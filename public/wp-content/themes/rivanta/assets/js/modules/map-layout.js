// Size the map before its deferred canvas runtime loads, avoiding a scroll jump.
export function fitMapToViewport(module=document.querySelector('[data-module="interactive-map"]')) {
  if(!module) return;
  const stage=module.querySelector('.rivanta-map-stage');
  const controls=module.querySelector('[data-map-controls]');
  const shell=module.querySelector('[data-map-animation]');
  if(!stage || !controls || !shell) return;
  if(module.dataset.mapLayout==='split') {
    stage.style.marginTop='';stage.style.marginBottom='';
    module.style.paddingTop='';module.style.paddingBottom='';controls.style.marginTop='';
    shell.style.width='';shell.style.height='';shell.style.maxWidth='';shell.style.aspectRatio='';
    return;
  }
  const width=innerWidth,height=innerHeight,wide=width>=1140;
  const topGap=wide ? Math.max(16,Math.min(36,Math.round(height*0.03))) : Math.max(10,Math.min(22,Math.round(height*0.02)));
  const bottomGap=wide ? Math.max(2,Math.min(10,Math.round(height*0.01))) : Math.max(8,Math.min(16,Math.round(height*0.015)));
  stage.style.marginTop=`${topGap}px`;stage.style.marginBottom=`${bottomGap}px`;
  if(!wide) {
    module.style.paddingTop='';module.style.paddingBottom='';controls.style.marginTop='';
    shell.style.width='';shell.style.height='';shell.style.maxWidth='';shell.style.aspectRatio='';
    return;
  }
  const padTop=Math.max(10,Math.min(20,Math.round(height*0.02)));
  const padBottom=Math.max(6,Math.min(14,Math.round(height*0.012)));
  const controlsHeight=controls.getBoundingClientRect().height;
  const available=Math.max(320,height-padTop-padBottom-Math.max(0,controlsHeight-14)-topGap-bottomGap);
  const gutter=width>=1536 ? 56 : width>=1280 ? 40 : 28;
  const targetWidth=Math.min(Math.round(available*1277/809),Math.max(520,width-gutter*2));
  module.style.paddingTop=`${padTop}px`;module.style.paddingBottom=`${padBottom}px`;
  controls.style.marginTop='-14px';
  shell.style.width=`${targetWidth}px`;shell.style.height=`${Math.round(targetWidth*809/1277)}px`;
  shell.style.maxWidth='100%';shell.style.aspectRatio='1277 / 809';
}
export function initMapLayout() {
  fitMapToViewport();
  let pending=0;
  addEventListener('resize',()=>{
    if(!pending) pending=requestAnimationFrame(()=>{pending=0;fitMapToViewport();});
  },{passive:true});
}
