define(["require","exports","tslib","react","spectrum_comments/comment_stream/unread_pill"],function(e,r,n,t,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=(function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.maybeRenderUnreadPill=function(e,n,o){if(r.props.showUnreadPill&&e&&n)return t.createElement(i.UnreadPill,{countMsg:r.props.countMsgFn(e),onClick:function(){return r.props.onItemActivated(n)},direction:o})},r}return n.__extends(r,e),r.prototype.render=function(){var e=this.props,r=e.visibilityData,n=e.children;return t.createElement("div",{className:"sc-unread-pill-wrapper"},this.maybeRenderUnreadPill(r.countAbove,r.nearestAbove,"UP"),n,this.maybeRenderUnreadPill(r.countBelow,r.nearestBelow,"DOWN"))},r})(t.PureComponent);r.UnreadPillWrapper=o});
//# sourceMappingURL=unread_pill_wrapper.min.js-vflc-L8na.map