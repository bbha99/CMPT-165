define(["require","exports","tslib","react","modules/clean/auth/login_or_register/types","modules/clean/downloads","modules/clean/multiaccount_login","modules/clean/react/copy_to_dropbox/modal","modules/clean/react/modal","modules/clean/react/share_download/api","modules/clean/sharing/signup_modal_proxy","modules/clean/storage","modules/clean/viewer","modules/constants/file_viewer","modules/core/browser","modules/core/exception","modules/core/i18n","modules/core/notify","modules/clean/react/share_download/api"],function(e,o,n,t,r,a,i,s,l,u,c,d,_,m,h,g,f,p,w){"use strict";function D(e,t){return n.__awaiter(this,void 0,void 0,function(){var r,i,s,l,d;return n.__generator(this,function(n){switch(n.label){case 0:return r=e.downloadTestUrl,i=e.url,m.SHARED_LINK_REACT_AUTH_MODAL?[4,o.authModalHelpers.authenticateForDownload(t||null)]:[3,2];case 1:return n.sent(),[3,4];case 2:return[4,c.signupModalProxy.signupForDirectDownload()];case 3:n.sent(),n.label=4;case 4:if(!r)return[3,8];n.label=5;case 5:return n.trys.push([5,7,,8]),[4,u.testDownload(r)];case 6:return n.sent(),[3,8];case 7:return s=n.sent(),s instanceof w.TooLargeError?p.Notify.error(f._("The zip file is too large.")):p.Notify.error(f._("Failed to download zip file.")),[2];case 8:return n.trys.push([8,10,,11]),[4,u.fetchDownloadUrl(i)];case 9:return l=n.sent(),a.get({url:l}),[3,11];case 10:return d=n.sent(),p.Notify.error(f._("Failed to download.")),[3,11];case 11:return[2]}})})}function A(e,r,a,u){return n.__awaiter(this,void 0,void 0,function(){var d,f,p,w;return n.__generator(this,function(n){switch(n.label){case 0:return d=!!m.SHARED_LINK_REACT_AUTH_MODAL,"anonymous"!==a?[3,5]:d?[4,o.authModalHelpers.authenticateForSaveToDropbox()]:[3,2];case 1:return f=n.sent(),[3,4];case 2:return[4,c.signupModalProxy.signup()];case 3:f=n.sent(),n.label=4;case 4:return p=h.reload,[3,9];case 5:return f=u?u.id:-1,g.assert(f!==-1,"role isn't anonymous => user cannot be null or undefined!"),w=_.Viewer.get_viewer(),w.is_user_signed_in(u)?[3,9]:d?[4,o.authModalHelpers.doMultiAccountAuthentication(a)]:[3,7];case 6:return n.sent(),[3,9];case 7:return[4,new Promise(function(e){i.default.show_modal({role:a,on_success:e})})];case 8:n.sent(),n.label=9;case 9:return l.Modal.showInstance(t.default.createElement(s.CopyToDropboxModal,{shareToken:e,copyable:r,userId:f,role:a,onDismiss:p})),[2]}})})}Object.defineProperty(o,"__esModule",{value:!0}),t=n.__importDefault(t),a=n.__importStar(a),i=n.__importDefault(i),u=n.__importStar(u),h=n.__importStar(h),o.direct=D,o.toDropbox=A,o.authModalHelpers={authenticateForDownload:function(o){return o!==r.LoginOrRegisterKind.DOWNLOAD||d.LocalStorage.get("has_seen_download_signup_modal")?Promise.resolve():new Promise(function(a,i){var s=function(){d.LocalStorage.set("has_seen_download_signup_modal",!0),a()},u=function(){d.LocalStorage.set("has_seen_download_signup_modal",!0),i()};new Promise(function(o,n){e(["modules/clean/auth/login_or_register/modal"],o,n)}).then(n.__importStar).then(function(e){var n=e.LoginOrRegisterModal;l.Modal.showInstance(t.default.createElement(n,{downloadAction:r.DownloadAction.DIRECT_DOWNLOAD,id:"shared-link-download-signup-modal",initialMode:r.Mode.REGISTER,kind:o,onAuthenticateSuccess:s,onCancel:u,onContinueToView:s,signup_tag:"shmodel_download_register"}))})})},authenticateForSaveToDropbox:function(){return new Promise(function(o,a){var i=function(e){return o(e.id)};new Promise(function(o,n){e(["modules/clean/auth/login_or_register/modal"],o,n)}).then(n.__importStar).then(function(e){var o=e.LoginOrRegisterModal;l.Modal.showInstance(t.default.createElement(o,{downloadAction:r.DownloadAction.SAVE_TO_DROPBOX,id:"shared-link-immediate-signup-modal",initialMode:r.Mode.REGISTER,kind:r.LoginOrRegisterKind.DOWNLOAD,onAuthenticateSuccess:i,onCancel:a,signup_tag:"shmodel_modal_register"}))})})},doMultiAccountAuthentication:function(o){return new Promise(function(r,a){new Promise(function(o,n){e(["modules/clean/auth/multi_account_login_modal"],o,n)}).then(n.__importStar).then(function(e){var n=e.MultiAccountLoginModal;l.Modal.showInstance(t.default.createElement(n,{onAuthenticateSuccess:r,onCancel:a,role:o}))})})}}});
//# sourceMappingURL=actions.min.js-vflJ_Jw7-.map