define(["require","exports","tslib","external/react-redux","modules/clean/react/comments2/components/annotations/ready_utils","modules/clean/react/comments2/data/selectors","spectrum_comments/annotation_view_layer"],function(e,t,a,n,r,o,d){"use strict";function i(e,t){return{threads:o.getDisplayedThreadsForLayer(e,t.page),activatedThreadId:o.getActivatedThreadId(e),hoverThreadId:o.getHoverThreadId(e),hideLayer:!!o.getPendingNumberedAnnotation(e)}}Object.defineProperty(t,"__esModule",{value:!0}),o=a.__importStar(o);var s=r.waitForComments2(n.connect(i)(d.AnnotationViewLayer));t.AnnotationViewLayer=s});
//# sourceMappingURL=annotation_view_layer.min.js-vflYLiwd3.map