// Scroll progress controls the artwork; media never changes page geometry or input.
export function initHeroCanvasSequence() {
  const hero=document.querySelector('[data-module="hero-canvas-sequence"]');
  if (!hero || hero.dataset.controller==='native-scroll') return;
  const visual=hero.querySelector('.rivanta-hero-visual');
  const canvas=hero.querySelector('.rivanta-hero-canvas');
  const context=canvas?.getContext('2d',{alpha:true});
  if (!visual || !context) return;
  hero.dataset.controller='native-scroll';
  const openingVideo=hero.querySelector('.rivanta-hero-video');
  const closingVideo=hero.querySelector('.rivanta-hero-video-secondary');
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const metricNodes=['projects','project-value','employees-k'].map(name=>hero.querySelector(`[data-metric="${name}"]`));
  const metricTargets=[Number(hero.dataset.heroMetricTotalProjects)||3,Number(hero.dataset.heroMetricTotalProjectValueBn)||6,Number(hero.dataset.heroMetricCombinedEmployeesK)||1];
  const clamp=value=>Math.max(0,Math.min(1,value));
  const smoothstep=(start,end,value)=>{const t=clamp((value-start)/(end-start));return t*t*(3-2*t);};
  let width=1,height=1,top=0,range=1,pixelRatio=1;
  let target=0,progress=0,lastTime=0,raf=0,heroTrigger=null;
  const getScrollY=()=>window.rivantaScroll?.getY() ?? scrollY;
  let inView=true,forceDraw=true,mask=null,maskWidth=1,maskHeight=1,mediaMode='';
  const propertyValues=new Map();
  const setProperty=(name,value)=>{
    const text=Number(value).toFixed(3);
    if (propertyValues.get(name)!==text) {hero.style.setProperty(name,text);propertyValues.set(name,text);}
  };
  const play=video=>{if(video?.paused && !document.hidden) video.play()?.catch(()=>{});};
  const updateMedia=()=>{
    const active=!document.hidden && inView && !motion.matches;
    // Keep both videos running through their crossfade. On reverse scroll the
    // opening video is already playing before it becomes visible again.
    const openingNeeded=active && progress<0.96;
    const closingNeeded=active && progress>0.70;
    const mode=`${Number(openingNeeded)}:${Number(closingNeeded)}`;
    if(mode===mediaMode) return;
    mediaMode=mode;
    if(openingNeeded) play(openingVideo);else openingVideo?.pause();
    if(closingNeeded) play(closingVideo);else closingVideo?.pause();
  };
  if(closingVideo) {
    closingVideo.loop=true;
    closingVideo.addEventListener('loadeddata',()=>{forceDraw=true;schedule();});
  }

  const draw=()=>{
    const takeover=smoothstep(0.08,0.80,progress);
    // The detailed hawk has internal cutouts even when enlarged past the
    // viewport. Fade the complete orange layer into the video rather than
    // switching that layer off at a finite mask size.
    const entrance=smoothstep(0.08,0.32,progress);
    const heading=smoothstep(0.60,0.77,progress);
    const metrics=smoothstep(0.74,0.96,progress);
    const hasClosingFrame=closingVideo && closingVideo.readyState>=2;
    const closing=hasClosingFrame ? smoothstep(0.80,0.93,progress) : 0;
    setProperty('--hero-progress',progress);
    setProperty('--hero-opening-visibility',1-smoothstep(0.035,0.15,progress));
    setProperty('--hero-final-progress',heading);
    setProperty('--hero-final-shift-progress',metrics);
    setProperty('--hero-metrics-visibility',metrics);
    setProperty('--hero-secondary-visibility',hasClosingFrame ? smoothstep(0.74,0.80,progress) : 0);
    setProperty('--hero-overlay-visibility',entrance*(1-closing));
    hero.dataset.progress=progress.toFixed(3);
    hero.dataset.sequenceComplete=target>=0.999 ? '1' : '0';
    hero.dataset.sequenceActive=target>0 && target<1 ? '1' : '0';
    const phase=progress<0.28 ? 'opening' : progress<0.55 ? 'takeover' : 'final';
    if(hero.dataset.visualPhase!==phase) {
      hero.dataset.visualPhase=phase;
      dispatchEvent(new Event('rivanta:hero-phase'));
    }
    metricNodes.forEach((node,index)=>{
      if(!node) return;
      const amount=metricTargets[index]*smoothstep(0.74+index*0.035,0.92+index*0.02,progress);
      const text=index===0 ? Math.round(amount).toLocaleString('en-US') : String(Math.round(amount*10)/10);
      if(node.textContent!==text) node.textContent=text;
    });
    context.setTransform(pixelRatio,0,0,pixelRatio,0,0);
    context.clearRect(0,0,width,height);
    if(takeover>0 && closing<1) {
      context.fillStyle='#ed730c';context.fillRect(0,0,width,height);
      if(mask && takeover<0.9999) {
        const scale=Math.max(width/maskWidth,height/maskHeight)*2.2*(1-takeover);
        context.save();context.globalCompositeOperation='destination-out';
        context.translate(width/2,height/2);context.scale(scale,scale);
        context.drawImage(mask,-maskWidth/2,-maskHeight/2,maskWidth,maskHeight);context.restore();
      }
    }
    updateMedia();
  };
  const frame=time=>{
    raf=0;
    const dt=lastTime ? Math.min(64,time-lastTime) : 16.67;
    lastTime=time;
    target=motion.matches ? 0 : clamp((getScrollY()-top)/range);
    // ScrollSmoother already interpolates the page; do not add a second lag.
    const next=window.rivantaScroll || !inView || motion.matches ? target : progress+(target-progress)*(1-Math.exp(-dt/65));
    const changed=Math.abs(next-progress)>0.0001;
    progress=Math.abs(target-next)<0.0004 ? target : next;
    if(changed || forceDraw) {forceDraw=false;draw();}
    if(inView && !document.hidden && Math.abs(target-progress)>0.0004) schedule();
  };
  function schedule() {if(!raf && !document.hidden) raf=requestAnimationFrame(frame);}
  const measure=()=>{
    const rect=visual.getBoundingClientRect();
    width=Math.max(1,Math.round(rect.width));height=Math.max(1,Math.round(rect.height));
    top=window.rivantaScroll?.getTop(hero) ?? scrollY+hero.getBoundingClientRect().top;range=height*2.2;
    pixelRatio=Math.min(devicePixelRatio||1,width<768 ? 1.25 : 1.5);
    const w=Math.round(width*pixelRatio),h=Math.round(height*pixelRatio);
    if(canvas.width!==w || canvas.height!==h) {canvas.width=w;canvas.height=h;}
    hero.style.setProperty('--hero-scroll-distance-px',`${motion.matches ? height : height+range}px`);
    hero.dataset.sequenceReleaseBoundaryY=String(Math.round(top+range));
    hero.dataset.motion=motion.matches ? 'reduced' : 'standard';
    hero.dataset.sequenceLock='0';forceDraw=true;schedule();
    if (window.rivantaScroll && !heroTrigger && !motion.matches) {
      heroTrigger=window.rivantaScroll.pinHero(hero,hero.querySelector('.rivanta-hero-pin'),()=>range);
    }
    if (heroTrigger) {
      if (motion.matches) heroTrigger.disable();
      else heroTrigger.enable();
    }
    dispatchEvent(new Event('rivanta:layout'));
  };
  hero.getSequenceNavigationState=()=>({motion:motion.matches ? 'reduced' : 'standard',active:false,locked:false,complete:target>=1,releaseBoundaryY:top+range});
  // Section links never wait for the animation or video playback.
  hero.queueAnchorNavigation=()=>false;
  hero.clearQueuedAnchorNavigation=()=>true;
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('rivanta:scroll',()=>{
    if(document.hidden) return;
    // ScrollSmoother has already rendered this frame. Draw in that same tick;
    // queuing another RAF makes a fast reversal visibly trail by a frame.
    if(raf) cancelAnimationFrame(raf);
    frame(performance.now());
  });
  let measureRaf=0;
  const queueMeasure=()=>{if(!measureRaf) measureRaf=requestAnimationFrame(()=>{measureRaf=0;measure();});};
  addEventListener('resize',queueMeasure,{passive:true});
  new ResizeObserver(queueMeasure).observe(visual);
  new IntersectionObserver(entries=>{
    inView=entries[0].isIntersecting;forceDraw=true;lastTime=0;updateMedia();schedule();
  },{threshold:0}).observe(hero);
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden && raf) {cancelAnimationFrame(raf);raf=0;}
    lastTime=0;forceDraw=true;updateMedia();schedule();
  });
  motion.addEventListener('change',()=>{mediaMode='';measure();});
  addEventListener('pageshow',()=>{progress=clamp((getScrollY()-top)/range);forceDraw=true;schedule();});
  measure();
  if(hero.dataset.heroMaskSvg) {
    fetch(hero.dataset.heroMaskSvg).then(response=>{if(!response.ok)throw new Error('Hero mask unavailable');return response.text();}).then(source=>{
      const svg=new DOMParser().parseFromString(source,'image/svg+xml');
      const bounds=svg.querySelector('svg')?.getAttribute('viewBox')?.split(/\s+/).map(Number);
      if(bounds?.length!==4 || !bounds.every(Number.isFinite) || bounds[2]<=0 || bounds[3]<=0) throw new Error('Invalid hero mask bounds');
      // Decode the complete SVG so every hawk path, cutout, and nested transform
      // is retained. A single Path2D would discard most of the supplied emblem.
      const url=URL.createObjectURL(new Blob([source],{type:'image/svg+xml'}));
      const image=new Image();
      image.onload=()=>{
        URL.revokeObjectURL(url);
        mask=image;maskWidth=bounds[2];maskHeight=bounds[3];
        hero.dataset.maskState='ready';forceDraw=true;schedule();
      };
      image.onerror=()=>{URL.revokeObjectURL(url);hero.dataset.maskState='error';};
      image.src=url;
    }).catch(()=>{hero.dataset.maskState='error';});
  }
}
