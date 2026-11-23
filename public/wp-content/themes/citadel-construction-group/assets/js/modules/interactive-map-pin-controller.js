export function createInteractiveMapPinController(config) {
  const {
    createjs = window.createjs,
    normalizeKey,
    hqInstancePropByPartner,
    partnerPrefixByKey,
    genericInstancePropByPartner,
    baseAlpha = 0.5,
    selectedHqAlpha = 1,
    popDurationMs = 220,
    popStaggerMs = 72,
    popScaleFrom = 0.6,
    pinVisual = {},
  } = config;

  const baseVisual = {
    fillColor: '#FFFFFF',
    fillAlpha: 1,
    ringColor: '#FFFFFF',
    ringAlpha: 1,
    ringStrokeWidth: 2,
    centerX: 0,
    centerY: 0,
    innerRadius: 4.8,
    outerRadius: 5.8,
    ...pinVisual,
  };
  const hqVisual = {
    ...baseVisual,
    ...(pinVisual?.hq || {}),
  };
  // Unselected/resting dots use the brand-orange treatment; the selected
  // partner's dots keep the (CMS-driven, default white) base/hq visuals.
  // The ring sits outside the fill with a dark gap — the two oranges are too
  // close in value to read as fill-plus-border when they touch.
  const restingVisual = {
    ...baseVisual,
    fillColor: '#FF7300',
    ringColor: '#FF9623',
    ringAlpha: 1,
    ringStrokeWidth: 1.8,
    outerRadius: 7,
    ...(pinVisual?.resting || {}),
  };
  const restingHqVisual = {
    ...hqVisual,
    fillColor: restingVisual.fillColor,
    ringColor: restingVisual.ringColor,
    ringAlpha: restingVisual.ringAlpha,
    ringStrokeWidth: 2,
    outerRadius: 7.4,
  };

  const hqPinByPartnerKey = new Map();
  const genericPinNodesByPartnerKey = new Map();
  const allNodes = [];
  const activeTimers = new Set();

  let stateMode = 'hidden';
  let statePartnerKey = '';
  let stateHighlightHq = false;
  let activeAnimationToken = 0;
  let animationInProgress = false;

  const clearActiveTimers = () => {
    activeTimers.forEach((timerId) => {
      window.clearTimeout(timerId);
    });
    activeTimers.clear();
  };

  const addTimer = (callback, delayMs) => {
    const timerId = window.setTimeout(() => {
      activeTimers.delete(timerId);
      callback();
    }, Math.max(0, Number(delayMs) || 0));
    activeTimers.add(timerId);
    return timerId;
  };

  const maybeAddNode = (node) => {
    if (!node || typeof node !== 'object') {
      return;
    }

    if (typeof node.alpha !== 'number') {
      return;
    }

    if (!allNodes.includes(node)) {
      allNodes.push(node);
    }
  };

  const resolveDotSymbol = (node) => {
    if (!node || typeof node !== 'object') {
      return null;
    }

    if (node.shape?.graphics && node.shape_1?.graphics) {
      return node;
    }

    if (node.instance?.shape?.graphics && node.instance?.shape_1?.graphics) {
      return node.instance;
    }

    return null;
  };

  const applyDotVisualStyle = (node, isHq, selected = false) => {
    const dotSymbol = resolveDotSymbol(node);
    if (!dotSymbol) {
      return;
    }

    const visual = selected
      ? (isHq ? hqVisual : baseVisual)
      : (isHq ? restingHqVisual : restingVisual);
    const centerX = Number(visual.centerX);
    const centerY = Number(visual.centerY);
    const innerRadius = Number(visual.innerRadius);
    const outerRadius = Number(visual.outerRadius);
    const ringStrokeWidth = Number(visual.ringStrokeWidth);

    dotSymbol.shape.graphics.clear();
    dotSymbol.shape.graphics
      .setStrokeStyle(Number.isFinite(ringStrokeWidth) ? Math.max(0, ringStrokeWidth) : 2)
      .beginStroke(String(visual.ringColor || '#FFFFFF'))
      .beginFill('rgba(0,0,0,0)')
      .drawCircle(
        Number.isFinite(centerX) ? centerX : 0,
        Number.isFinite(centerY) ? centerY : 0,
        Number.isFinite(outerRadius) ? Math.max(0, outerRadius) : 5.8
      )
      .endFill();
    dotSymbol.shape.alpha = Number.isFinite(Number(visual.ringAlpha))
      ? Math.max(0, Math.min(1, Number(visual.ringAlpha)))
      : 1;

    dotSymbol.shape_1.graphics.clear();
    dotSymbol.shape_1.graphics
      .beginFill(String(visual.fillColor || '#FFFFFF'))
      .drawCircle(
        Number.isFinite(centerX) ? centerX : 0,
        Number.isFinite(centerY) ? centerY : 0,
        Number.isFinite(innerRadius) ? Math.max(0, innerRadius) : 4.8
      )
      .endFill();
    dotSymbol.shape_1.alpha = Number.isFinite(Number(visual.fillAlpha))
      ? Math.max(0, Math.min(1, Number(visual.fillAlpha)))
      : 1;
  };

  // Tracks which partner key the dot graphics are currently colored for
  // ('' = resting/orange, null = unknown/force next apply). Graphics redraws
  // are expensive, so recolor only on state changes — never per tick.
  let coloredPartnerKey = null;

  const applyPinColorState = (selectedPartnerKey) => {
    const normalizedKey = normalizeKey(selectedPartnerKey || '');
    if (coloredPartnerKey === normalizedKey) {
      return;
    }

    coloredPartnerKey = normalizedKey;
    const hqNodes = new Set(hqPinByPartnerKey.values());
    const selectedNodes = normalizedKey ? new Set(getPartnerNodes(normalizedKey)) : new Set();
    const styledDotSymbols = new Set();

    allNodes.forEach((node) => {
      const dotSymbol = resolveDotSymbol(node);
      if (!dotSymbol || styledDotSymbols.has(dotSymbol)) {
        return;
      }

      styledDotSymbols.add(dotSymbol);
      applyDotVisualStyle(node, hqNodes.has(node), selectedNodes.has(node));
    });
  };

  const applyRuntimePinVisualStyles = () => {
    coloredPartnerKey = null;
    applyPinColorState('');
  };

  const setNodeInstant = (node, alpha, scale = 1) => {
    if (!node || typeof node !== 'object') {
      return;
    }

    node.alpha = alpha;
    if (typeof node.scaleX === 'number') {
      node.scaleX = scale;
    }
    if (typeof node.scaleY === 'number') {
      node.scaleY = scale;
    }
  };

  const getPartnerKeyFromPrefix = (prefix) => {
    const normalizedPrefix = normalizeKey(prefix);
    const match = Object.entries(partnerPrefixByKey).find(([, partnerPrefix]) => {
      return normalizeKey(partnerPrefix) === normalizedPrefix;
    });
    return match ? match[0] : '';
  };

  const addGenericPin = (partnerKey, node) => {
    const normalizedPartnerKey = normalizeKey(partnerKey);
    if (!normalizedPartnerKey || !node || typeof node.alpha !== 'number') {
      return;
    }

    const existing = genericPinNodesByPartnerKey.get(normalizedPartnerKey) || [];
    if (!existing.includes(node)) {
      existing.push(node);
      genericPinNodesByPartnerKey.set(normalizedPartnerKey, existing);
    }

    maybeAddNode(node);
  };

  const getPartnerNodes = (partnerKey) => {
    const normalizedPartnerKey = normalizeKey(partnerKey);
    const genericNodes = genericPinNodesByPartnerKey.get(normalizedPartnerKey) || [];
    const hqNode = hqPinByPartnerKey.get(normalizedPartnerKey);

    if (!hqNode) {
      return [...genericNodes];
    }

    return [hqNode, ...genericNodes.filter((node) => node !== hqNode)];
  };

  const stopNodeTweens = () => {
    if (!createjs?.Tween) {
      return;
    }

    allNodes.forEach((node) => {
      createjs.Tween.removeTweens(node);
    });
  };

  const applySteadyState = () => {
    if (animationInProgress) {
      return;
    }

    if (stateMode === 'hidden') {
      allNodes.forEach((node) => {
        setNodeInstant(node, 0, 1);
      });
      return;
    }

    if (stateMode === 'resting') {
      allNodes.forEach((node) => {
        setNodeInstant(node, baseAlpha, 1);
      });
      return;
    }

    if (stateMode !== 'partner') {
      return;
    }

    const normalizedPartnerKey = normalizeKey(statePartnerKey);
    const hqNode = hqPinByPartnerKey.get(normalizedPartnerKey) || null;
    const partnerNodes = getPartnerNodes(normalizedPartnerKey);

    allNodes.forEach((node) => {
      if (!partnerNodes.includes(node)) {
        setNodeInstant(node, 0, 1);
      }
    });

    partnerNodes.forEach((node) => {
      const isHq = node === hqNode;
      const alpha = isHq && stateHighlightHq ? selectedHqAlpha : baseAlpha;
      setNodeInstant(node, alpha, 1);
    });
  };

  const animatePopIn = (nodes, options = {}) => {
    const holdMs = Math.max(0, Number(options.holdMs || 0));
    const highlightHq = options.highlightHq === true;
    const partnerKey = options.partnerKey || '';
    const duration = Math.max(0, Number(options.durationMs || popDurationMs));
    const stagger = Math.max(0, Number(options.staggerMs || popStaggerMs));
    const fromScale = Math.max(0.2, Number(options.fromScale || popScaleFrom));

    const normalizedPartnerKey = normalizeKey(partnerKey);
    const hqNode = hqPinByPartnerKey.get(normalizedPartnerKey) || null;
    cancelActivePinAnimations();
    const token = ++activeAnimationToken;
    animationInProgress = true;
    applyPinColorState(normalizedPartnerKey);

    if (!nodes.length) {
      animationInProgress = false;
      stateMode = 'partner';
      statePartnerKey = normalizedPartnerKey;
      stateHighlightHq = highlightHq;
      applySteadyState();
      return Promise.resolve();
    }

    nodes.forEach((node) => {
      setNodeInstant(node, 0, fromScale);
    });

    const completionPromises = nodes.map((node, index) => {
      return new Promise((resolve) => {
        const targetAlpha = node === hqNode && highlightHq ? selectedHqAlpha : baseAlpha;

        const runTween = () => {
          if (token !== activeAnimationToken) {
            resolve();
            return;
          }

          if (createjs?.Tween && createjs?.Ease) {
            createjs.Tween.removeTweens(node);
            createjs.Tween.get(node, { override: true })
              .to({ alpha: targetAlpha, scaleX: 1, scaleY: 1 }, duration, createjs.Ease.backOut)
              .call(() => {
                resolve();
              });
            return;
          }

          setNodeInstant(node, targetAlpha, 1);
          resolve();
        };

        if (stagger > 0) {
          addTimer(runTween, stagger * index);
        } else {
          runTween();
        }
      });
    });

    return Promise.all(completionPromises).then(() => {
      return new Promise((resolve) => {
        if (token !== activeAnimationToken) {
          animationInProgress = false;
          resolve();
          return;
        }

        const finalize = () => {
          if (token !== activeAnimationToken) {
            animationInProgress = false;
            resolve();
            return;
          }

          stateMode = 'partner';
          statePartnerKey = normalizedPartnerKey;
          stateHighlightHq = highlightHq;
          animationInProgress = false;
          applySteadyState();
          resolve();
        };

        if (holdMs > 0) {
          addTimer(finalize, holdMs);
        } else {
          finalize();
        }
      });
    });
  };

  const initializeFromLayer = (layer) => {
    allNodes.length = 0;
    hqPinByPartnerKey.clear();
    genericPinNodesByPartnerKey.clear();

    if (!layer) {
      return;
    }

    Object.keys(layer).forEach((prop) => {
      const node = layer[prop];
      if (!node || typeof node !== 'object' || typeof node.alpha !== 'number') {
        return;
      }

      const locationMatch = prop.match(/^([a-z0-9]+)_loc_\d+$/i);
      if (locationMatch) {
        const partnerKey = getPartnerKeyFromPrefix(locationMatch[1]);
        if (partnerKey) {
          addGenericPin(partnerKey, node);
          return;
        }
      }

      if (/^instance(?:_\d+)?$/i.test(prop)) {
        maybeAddNode(node);
      }
    });

    Object.entries(hqInstancePropByPartner).forEach(([partnerKey, prop]) => {
      const hqNode = layer[prop];
      if (!hqNode || typeof hqNode.alpha !== 'number') {
        return;
      }

      const normalizedPartnerKey = normalizeKey(partnerKey);
      hqPinByPartnerKey.set(normalizedPartnerKey, hqNode);
      maybeAddNode(hqNode);
    });

    Object.entries(genericInstancePropByPartner || {}).forEach(([partnerKey, props]) => {
      props.forEach((prop) => {
        addGenericPin(partnerKey, layer[prop]);
      });
    });

    applyRuntimePinVisualStyles();

    stateMode = 'hidden';
    statePartnerKey = '';
    stateHighlightHq = false;
    applySteadyState();
  };

  const cancelActivePinAnimations = () => {
    activeAnimationToken += 1;
    animationInProgress = false;
    clearActiveTimers();
    stopNodeTweens();
  };

  const hideAllPinsInstantly = () => {
    cancelActivePinAnimations();
    stateMode = 'hidden';
    statePartnerKey = '';
    stateHighlightHq = false;
    applySteadyState();
  };

  const hidePinsForTransition = () => {
    hideAllPinsInstantly();
  };

  const showPartnerPins = (partnerKey, options = {}) => {
    const nodes = getPartnerNodes(partnerKey);
    const introMode = options.introMode === true;
    const highlightHq = options.highlightHq === true && !introMode;

    return animatePopIn(nodes, {
      partnerKey,
      holdMs: options.holdMs,
      durationMs: options.durationMs,
      staggerMs: options.staggerMs,
      fromScale: options.fromScale,
      highlightHq,
    });
  };

  const applyManualSelectionState = (partnerKey, options = {}) => {
    return showPartnerPins(partnerKey, {
      introMode: false,
      highlightHq: options.highlightHq !== false,
      holdMs: options.holdMs ?? 0,
      durationMs: options.durationMs,
      staggerMs: options.staggerMs,
      fromScale: options.fromScale,
    });
  };

  const runRestingRandomRepopulate = (options = {}) => {
    cancelActivePinAnimations();
    applyPinColorState('');

    const nodes = [...allNodes];
    if (!nodes.length) {
      stateMode = 'resting';
      applySteadyState();
      return Promise.resolve();
    }

    const totalDurationMs = Math.max(200, Number(options.totalDurationMs || 1200));
    const fromScale = Math.max(0.2, Number(options.fromScale || popScaleFrom));
    const token = ++activeAnimationToken;
    animationInProgress = true;

    // Fisher-Yates shuffle
    for (let i = nodes.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = nodes[i];
      nodes[i] = nodes[j];
      nodes[j] = temp;
    }

    const perNodeDelay = nodes.length > 1 ? totalDurationMs / (nodes.length - 1) : 0;

    nodes.forEach((node) => {
      setNodeInstant(node, 0, fromScale);
    });

    const completionPromises = nodes.map((node, index) => {
      return new Promise((resolve) => {
        const runTween = () => {
          if (token !== activeAnimationToken) {
            resolve();
            return;
          }

          if (createjs?.Tween && createjs?.Ease) {
            createjs.Tween.removeTweens(node);
            createjs.Tween.get(node, { override: true })
              .to({ alpha: baseAlpha, scaleX: 1, scaleY: 1 }, Math.max(120, popDurationMs), createjs.Ease.backOut)
              .call(() => {
                resolve();
              });
            return;
          }

          setNodeInstant(node, baseAlpha, 1);
          resolve();
        };

        addTimer(runTween, Math.round(index * perNodeDelay));
      });
    });

    return Promise.all(completionPromises).then(() => {
      if (token !== activeAnimationToken) {
        animationInProgress = false;
        return;
      }

      stateMode = 'resting';
      statePartnerKey = '';
      stateHighlightHq = false;
      animationInProgress = false;
      applySteadyState();
    });
  };

  const showRestingPinsInstantly = () => {
    cancelActivePinAnimations();
    applyPinColorState('');
    stateMode = 'resting';
    statePartnerKey = '';
    stateHighlightHq = false;
    applySteadyState();
  };

  const sync = () => {
    applySteadyState();
  };

  return {
    initializeFromLayer,
    sync,
    hideAllPinsInstantly,
    hidePinsForTransition,
    showPartnerPins,
    runIntroPartnerPop(partnerKey, options = {}) {
      return showPartnerPins(partnerKey, {
        introMode: true,
        holdMs: options.holdMs ?? 140,
        durationMs: options.durationMs,
        staggerMs: options.staggerMs,
        fromScale: options.fromScale,
      });
    },
    runRestingRandomRepopulate,
    showRestingPinsInstantly,
    applyManualSelectionState,
    cancelActivePinAnimations,
  };
}
