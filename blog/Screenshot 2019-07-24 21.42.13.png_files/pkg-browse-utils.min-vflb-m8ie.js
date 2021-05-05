define("modules/clean/bem",["require","exports"],function(e,n){"use strict";function r(e){function n(n,r){return e+(n?"__"+n:"")+(r?"--"+r:"")}return Object.assign(n,{mod:n.bind(null,null)})}function i(e,n){void 0===n&&(n=[]);var i=r(e),t={};return n.forEach(function(e){var n=e.split("_"),r=n[0],_=n[1];if(n.slice(2).length)throw new Error("Cannot define style keys with more then an element + modifer");t[e]=i(r,_)}),t}Object.defineProperty(n,"__esModule",{value:!0}),n.bem=r,n.bemStyles=i}),define("modules/clean/react/browse/sort_helpers",["require","exports"],function(e,n){"use strict";function r(e,n,r){for(var i="=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=0;t<Math.max(e.length,n.length);t++){var _=e.charAt(t),a=n.charAt(t);if(!_)return-r;if(!a)return r;var o=i.indexOf(_),s=i.indexOf(a);if(o<s)return-r;if(s<o)return r}return 0}function i(e,n,i,t){if(Array.isArray(e)&&Array.isArray(n)){for(var _=0;_<Math.max(e.length,n.length);_++){var a=e[_],o=n[_];if(null==a)return-i;if(null==o)return i;if("number"==typeof a&&"string"==typeof o)return-i;if("number"==typeof o&&"string"==typeof a)return i;if("string"==typeof a&&"string"==typeof o){var s=r(a,o,i);if(0!==s)return s}else{if(a<o)return-i;if(o<a)return i}}return 0}return e===n?0:t&&"string"==typeof e&&"string"==typeof n?t(e,n)<0?-i:i:e<n?-i:i}Object.defineProperty(n,"__esModule",{value:!0}),n.compare=i});var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n};define("modules/clean/react/retrieval_success_banner/browse_success_banner",["require","exports","modules/clean/react/async/loadable"],function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.BrowseSuccessBanner=r.Loadable({loader:function(){return new Promise(function(n,r){e(["modules/clean/react/retrieval_success_banner/browse_success_component"],n,r)}).then(__importStar).then(function(e){return e.BrowseSuccessBanner})}})}),define("modules/clean/react/retrieval_success_banner/retrieval_success_browseview_banner",["require","exports","tslib","modules/clean/react/async/loadable","modules/clean/web_timing_logger"],function(e,n,r,i,t){"use strict";var _=this;Object.defineProperty(n,"__esModule",{value:!0}),n.RetrievalSuccessBrowseviewBanner=i.Loadable({loader:function(){return r.__awaiter(_,void 0,Promise,function(){var n;return r.__generator(this,function(i){switch(i.label){case 0:return[4,t.waitForTTI()];case 1:return i.sent(),[4,new Promise(function(n,r){e(["modules/clean/react/retrieval_success_banner/retrieval_success_browseview_component"],n,r)}).then(r.__importStar)];case 2:return n=i.sent().RetrievalSuccessBrowseviewBannerWithProvider,[2,n]}})})}})}),define("modules/clean/react/retrieval_success_banner/retrieval_success_filesview_banner",["require","exports","tslib","modules/clean/react/async/loadable","modules/clean/web_timing_logger"],function(e,n,r,i,t){"use strict";var _=this;Object.defineProperty(n,"__esModule",{value:!0}),n.RetrievalSuccessFilesviewBanner=i.Loadable({loader:function(){return r.__awaiter(_,void 0,Promise,function(){var n;return r.__generator(this,function(i){switch(i.label){case 0:return[4,t.waitForTTI()];case 1:return i.sent(),[4,new Promise(function(n,r){e(["modules/clean/react/retrieval_success_banner/retrieval_success_filesview_component"],n,r)}).then(r.__importStar)];case 2:return n=i.sent().RetrievalSuccessFilesviewBannerWithProvider,[2,n]}})})}})}),define("modules/clean/react/retrieval_success_banner/retrieval_success_home_banner",["require","exports","tslib","modules/clean/react/async/loadable","modules/clean/web_timing_logger"],function(e,n,r,i,t){"use strict";var _=this;Object.defineProperty(n,"__esModule",{value:!0}),n.RetrievalSuccessHomeBanner=i.Loadable({loader:function(){return r.__awaiter(_,void 0,Promise,function(){var n;return r.__generator(this,function(i){switch(i.label){case 0:return[4,t.waitForTTI()];case 1:return i.sent(),[4,new Promise(function(n,r){e(["modules/clean/react/retrieval_success_banner/retrieval_success_home_component"],n,r)}).then(r.__importStar)];case 2:return n=i.sent().RetrievalSuccessHomeBannerWithProvider,[2,n]}})})}})});var __importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n};define("modules/clean/react/retrieval_success_banner/search_success_banner",["require","exports","modules/clean/react/async/loadable"],function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.SearchSuccessBanner=r.Loadable({loader:function(){return new Promise(function(n,r){e(["modules/clean/react/retrieval_success_banner/search_success_component"],n,r)}).then(__importStar).then(function(e){return e.SearchSuccessBanner})}})}),define("modules/clean/sharing/constants",["require","exports"],function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});(function(e){e[e.PUBLIC=1]="PUBLIC",e[e.TEAM_ONLY=2]="TEAM_ONLY",e[e.PASSWORD=3]="PASSWORD",e[e.ONLY_YOU=99]="ONLY_YOU"})(n.SHMODEL_LINK_TOKEN_VISIBILITY||(n.SHMODEL_LINK_TOKEN_VISIBILITY={})),n.MEMBER_ACTION={LEAVE_A_COPY:"leave_a_copy",MAKE_EDITOR:"make_editor",MAKE_OWNER:"make_owner",MAKE_VIEWER:"make_viewer",MAKE_VIEWER_NO_COMMENT:"make_viewer_no_comment",REMOVE:"remove",ALL:["leave_a_copy","make_editor","make_owner","make_viewer","make_viewer_no_comment","remove"]},n.SNIPPET_SIZES={FILENAME:22,DISPLAY_NAME:26,EMAIL:30,OUT_OF_QUOTA_FOLDER_NAME:15,NEW_FOLDER_MODAL_FOLDER_NAME:15},n.VALIDATE_PATH_PERMISSIONS={change_options:"canChangeOptions",disable_viewer_info:"disableViewerInfo",edit_contents:"canEditContents",enable_viewer_info:"enableViewerInfo",invite_editor:"canInviteEditor",invite_viewer:"canInviteViewer",invite_viewer_no_comment:"canInviteViewerNoComment",unshare:"canUnshareFolder",relinquish_membership:"canRelinquishMembership"},n.VALIDATE_PATH_PERMISSIONS_CONFIDENTIAL_AWARE={change_options:"canChangeOptions",disable_viewer_info:"disableViewerInfo",edit_contents:"canEditContents",enable_viewer_info:"enableViewerInfo",invite_editor:"canInviteEditor",invite_viewer:"canInviteViewer",invite_viewer_no_comment:"canInviteViewerNoComment",unshare:"canUnshareFolder",update_confidentiality:"canUpdateConfidentiality",relinquish_membership:"canRelinquishMembership"},n.ALPHA_FOLDER_METADATA_PERMISSIONS={change_options:"canChangeOptions",disable_viewer_info:"disableViewerInfo",edit_contents:"canEditContents",enable_viewer_info:"enableViewerInfo",invite_editor:"canInviteEditor",invite_viewer:"canInviteViewer",invite_viewer_no_comment:"canInviteViewerNoComment",leave_a_copy:"leaveACopy",relinquish_membership:"canRelinquishMembership",remove_download_policy:"removeDownloadPolicy",set_download_policy:"setDownloadPolicy",unmount:"canUnmountFolder",unshare:"canUnshareFolder",update_confidentiality:"canUpdateConfidentiality"},n.ALPHA_FILE_METADATA_PERMISSIONS={change_options:"canChangeOptions",create_view_link:"createViewLink",create_edit_link:"createEditLink",disable_viewer_info:"disableViewerInfo",enable_viewer_info:"enableViewerInfo",invite_viewer:"canInviteViewer",invite_editor:"canInviteEditor",invite_viewer_no_comment:"canInviteViewerNoComment",relinquish_membership:"canRelinquishMembership",remove_download_policy:"removeDownloadPolicy",set_download_policy:"setDownloadPolicy",unshare:"unshare"},n.FILE_METADATA_PERMISSIONS={invite_viewer:"canInviteViewer",invite_editor:"canInviteEditor",invite_viewer_no_comment:"canInviteViewerNoComment",relinquish_membership:"canRelinquishMembership",unshare:"unshare"};(function(e){e.BROWSE_FILE_ROW="BROWSE_FILE_ROW",e.FILE_ROW_SHARE_MENU="FILE_ROW_SHARE_MENU",e.PREVIEW_PAGE="PREVIEW_PAGE",e.NOTIFICATION_WEB="NOTIFICATION_WEB",e.RECENTS="RECENTS",e.SHARE="SHARE",e.SYNC_MODAL="SYNC_MODAL",e.GRANT_ACCESS="GRANT_ACCESS",e.DESKTOP_CLIENT="DESKTOP_CLIENT",e.WIZARD="WIZARD",e.OFFICE_INTEGRATION="OFFICE_INTEGRATION",e.LEGACY_BROWSE="LEGACY_BROWSE",e.SHARE_LINK_MODAL="SHARE_LINK_MODAL",e.BROWSE_SHARED_FOLDER_BANNER="BROWSE_SHARED_FOLDER_BANNER",e.BROWSE_GLOBAL_ACTIONS="BROWSE_GLOBAL_ACTIONS",e.EVENTS_PAGE="EVENTS_PAGE",e.BROWSE_FILE_ACTIONS="BROWSE_FILE_ACTIONS",e.CONTENT_MANAGER="CONTENT_MANAGER",e.PARENT_FOLDER_MODAL="PARENT_FOLDER_MODAL",e.OUT_OF_QUOTA_MODAL="OUT_OF_QUOTA_MODAL",e.LINKS_PAGE="LINKS_PAGE",e.PREVIEW_PAGE_FACEPILE="PREVIEW_PAGE_FACEPILE",e.BROWSE_FILE_FACEPILE="BROWSE_FILE_FACEPILE",e.SHARE_PAGE_FROM_EMAIL="SHARE_PAGE_FROM_EMAIL",e.SHARE_PAGE_FROM_NOTIFICATION_WEB="SHARE_PAGE_FROM_NOTIFICATION_WEB",e.COPY_SCL_LINK_MODAL="COPY_SCL_LINK_MODAL",e.HARMONY="HARMONY",e.NOTIFICATION_CLIENT="NOTIFICATION_CLIENT",e.NATIVE_SHARE_CLIENT="NATIVE_SHARE_CLIENT",e.FILESYSTEM="FILESYSTEM",e.NOTIFICATION_MOBILE="NOTIFICATION_MOBILE",e.WEB_MOBILE="WEB_MOBILE",e.IN_APP="IN_APP",e.EMAIL="EMAIL",e.PAPER_INTEGRATION="PAPER_INTEGRATION",e.GOOGLE_DSS="GOOGLE_DSS",e.BROWSE_NEW_FOLDER_MODAL="BROWSE_NEW_FOLDER_MODAL",e.TRELLO_FILE_VIEWER="TRELLO_FILE_VIEWER"})(n.SHARE_ACTION_ORIGIN_TYPE||(n.SHARE_ACTION_ORIGIN_TYPE={}));(function(e){e.Content="c",e.Shmodel="s"})(n.SharedLinkType||(n.SharedLinkType={})),n.FETCH_FILE_MEMBER_COUNT_LIMIT=100});
//# sourceMappingURL=pkg-browse-utils.min.js-vflNcYEIS.map