define(["require","exports","react","classnames","spectrum_comments/annotation_utils"],function(e,t,n,i,a){"use strict";function s(e){var t=e.rectangle,s=e.isEmphasized,r=i("sc-annotation-highlight-segment",{"sc-annotation-highlight-segment__emphasized":s});return n.createElement("div",{style:a.toRectangleStyle(t),className:r})}function r(e){var t=e.key,i=e.highlight,a=e.isEmphasized;return i.map(function(e,i){return n.createElement(s,{key:t+"-"+i,rectangle:e,isEmphasized:a})})}Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationHighlightSegment=s,t.renderAnnotationHighlight=r});
//# sourceMappingURL=index.min.js-vflqImleu.map