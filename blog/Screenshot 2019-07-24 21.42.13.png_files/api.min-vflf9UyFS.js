define(["require","exports","tslib","modules/clean/ajax_as_promised"],function(e,s,r,t){"use strict";function i(e,s){var r={link_key:e.linkKey,link_type:e.linkType,secure_hash:e.secureHash,subpath:e.subPath};return e.itemId&&(r.item_id=e.itemId),new Promise(function(e,i){return t.WebProgressRequest({url:"/sm/c2d",data:r,subject_user:s,success:e})})}Object.defineProperty(s,"__esModule",{value:!0}),t=r.__importStar(t),s.copySharedFile=i});
//# sourceMappingURL=api.min.js-vflf0XroB.map