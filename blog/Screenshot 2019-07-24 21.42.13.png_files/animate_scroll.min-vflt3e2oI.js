define(["require","exports","tslib"],function(e,r,a){"use strict";function n(e,r,a,n){switch(e){case u.Linear:return r*a/n;case u.QuadEaseIn:var t=a/n;return r*t*t;case u.QuadEaseOut:var t=a/n;return-r*t*(t-2);case u.QuadEaseInOut:var t=a/n;return t<.5?2*r*t*t:-r*t*(4-2*t)}}function t(e){var r=e.dataset.scrollingId;if(void 0!==r&&o[r]){var a=o[r],n=a.rafId,t=a.rej;cancelAnimationFrame(n),t()}}function i(e,r){var a=e.dataset.scrollingId,n=a&&o[a];return n&&n.yPos===r}function s(e){function r(e){if(u){v||(v=e);var t=e-v,i=n(s,E,t,l);if(u.scrollTop=g+i,t<l)return o[I]=a.__assign({},o[I],{rafId:requestAnimationFrame(r)});u.scrollTop=g+E,o[I].res(),delete o[I]}}var s=e.timing,u=e.container,d=e.yPos,l=e.duration;if(i(u,d)){var f=u.dataset.scrollingId,m=f&&o[f];return m&&m.promise}t(u);var v,I=u.dataset.scrollingId=String(c++),g=u.scrollTop,E=d-g,Q={},p=new Promise(function(e,r){Q={res:e,rej:r}});return o[I]=a.__assign({},Q,{rafId:requestAnimationFrame(r),yPos:d,promise:p}),p}Object.defineProperty(r,"__esModule",{value:!0});var u,o={},c=0;(function(e){e[e.Linear=0]="Linear",e[e.QuadEaseIn=1]="QuadEaseIn",e[e.QuadEaseOut=2]="QuadEaseOut",e[e.QuadEaseInOut=3]="QuadEaseInOut"})(u=r.Timing||(r.Timing={})),r.interpolate=n,r.animateScroll=s});
//# sourceMappingURL=animate_scroll.min.js-vflyOIOm3.map