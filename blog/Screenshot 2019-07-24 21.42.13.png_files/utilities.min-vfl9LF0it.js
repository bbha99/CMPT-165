define(["require","exports","spectrum_comments/annotation_instructional_tooltip_pane/utilities"],function(t,e,i){"use strict";function n(t){var e=t.currentTarget.getBoundingClientRect(),i=e.top,n=e.left,h=e.width,r=e.height,o=t.clientX,g=t.clientY,a=[o-n,g-i];return{x:a[0]/h,y:a[1]/r}}function h(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=1),Math.min(Math.max(e,t),i)}function r(t){var e=t.x,i=t.y,n=t.width,r=t.height;return{x:h(e),y:h(i),width:h(n),height:h(r)}}function o(t,e){return g({left:t.x,top:t.y,width:t.width,height:t.height},{left:e.x,top:e.y,width:e.width,height:e.height})}function g(t,e,i){var n=i?i.x:t.left-e.left,h=i?i.y:t.top-e.top;return r({x:n/e.width,y:h/e.height,width:t.width/e.width,height:t.height/e.height})}function a(t,e,i){return{x:t.x*e,y:t.y*i,width:t.width*e,height:t.height*i}}function u(t,e){return void 0!==e?{type:"document",regionType:e,regions:t}:{type:"image",region:t[0]}}function d(t,e){var i=t.x+t.width-e.width,n=t.y+t.height-e.height;return{x:Math.min(i,e.x),y:Math.min(n,e.y),width:e.width,height:e.height}}function c(t,e){var i=t.x+t.width,n=t.y+t.height,r=t.x,o=t.y,g={x:h(e.x,r,i),y:h(e.y,o,n)},a={x:h(e.x+e.width,r,i),y:h(e.y+e.height,o,n)};return{x:g.x,y:g.y,width:a.x-g.x,height:a.y-g.y}}function y(t,e){var i=t.x,n=t.y,h=t.width,r=t.height,o=i+h,g=n+r,a=e.x+e.width,u=e.y+e.height;return h<=8&&o+8>a&&(i=o-8,h=8),r<=8&&g+8>u&&(n=g-8,r=8),{x:i,y:n,width:h,height:r}}function x(t,e,i){return y("drag"===i?d(e,t):c(e,t),e)}function w(){return window.getSelection().getRangeAt(0)}function l(t){return s(t)?N.Link:f(t)?N.Text:p(t,e.COMPONENT_CLASS_NAME)||p(t,i.COMPONENT_CLASS_NAME)||m(t)?N.Creation:N.None}function f(t){var e=t.target.tagName.toUpperCase();return"P"===e||"TEXT"===e}function s(t){return"A"===t.target.tagName}function m(t){return"IMG"===t.target.tagName}function p(t,e){return t.target.classList.contains(e)}function v(t,e,i,n,h){var r,o,a=g(t,i);if(a.y*i.height>=n+h)r=(a.x+a.width/2)*i.width-n/2,o=a.y*i.height-n-h;else if((1-a.x-a.width)*i.width>=n)r=(a.x+a.width)*i.width+h,o=(a.y+a.height/2)*i.height-n/2;else if(a.x*i.width>=n)r=a.x*i.width-n-h,o=(a.y+a.height/2)*i.height-n/2;else if((1-a.y-a.height)*i.height>=n)r=(a.x+a.width/2)*i.width-n/2,o=(a.y+a.height)*i.height+h;else{var u=g(e,i);r=(u.x+u.width/2)*i.width-n/2,o=(u.y+u.height)*i.height+h}return{x:r,y:o}}Object.defineProperty(e,"__esModule",{value:!0}),e.COMPONENT_CLASS_NAME="sc-annotation-conductor-layer";var N;(function(t){t[t.None=0]="None",t[t.Text=1]="Text",t[t.Link=2]="Link",t[t.Creation=3]="Creation"})(N=e.Surface||(e.Surface={})),e.toPoint=n,e.normalizeValue=h,e.normalizeRegion=r,e.createRectangleFromPixelRectangle=o,e.createNormalizedRegion=g,e.createPlacementFromNormalizedRegion=a,e.createAnnotation=u,e.applyEdgeBoundingByPosition=d,e.applyEdgeBoundingByDimensions=c;e.applyEdgeBounding=x,e.getTextSelectionRange=w,e.getSurfaceFromEvt=l,e.isOnText=f,e.isOnLink=s,e.isOnImage=m,e.isOnDivWithClass=p,e.getOverlayElementPosition=v});
//# sourceMappingURL=utilities.min.js-vflEGSCsB.map