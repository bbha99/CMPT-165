define(["require","exports","tslib","react","modules/core/i18n","modules/clean/react_format","modules/clean/react/file_viewer/share_helpers","modules/clean/react/file_activity_stream/file_activity_stream_card","modules/clean/react/file_activity_stream/utils","modules/clean/sharing/constants"],function(e,t,r,n,s,o,a,i,c,l){"use strict";function u(e){return e.changed_group?e.changed_group.name:e.changed_user?e.changed_user.display_name:e.changed_email?e.changed_email:null}Object.defineProperty(t,"__esModule",{value:!0}),n=r.__importDefault(n),a=r.__importStar(a);var g=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onShareSettingsClick=function(){a.share(t.props.file,t.props.viewingUser,null,l.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_PAGE)},t}return r.__extends(t,e),t.prototype.formatAccessMessage=function(e,t){if(c.isViewingUser(this.props))switch(e){case"writer":case"owner":case"reader":return s._("<strong>You</strong> turned on commenting for <strong>%(entity)s</strong>");case"reader_no_comment":return s._("<strong>You</strong> gave view-only access to <strong>%(entity)s</strong>");case"no_access":return s._("<strong>You</strong> removed <strong>%(entity)s</strong> from this file")}else switch(e){case"writer":case"owner":case"reader":return s._("<strong>%(name)s</strong> turned on commenting for <strong>%(entity)s</strong>");case"reader_no_comment":return s._("<strong>%(name)s</strong> gave view-only access to <strong>%(entity)s</strong>");case"no_access":return s._("<strong>%(name)s</strong> removed <strong>%(entity)s</strong> from this file")}return null},Object.defineProperty(t.prototype,"message",{get:function(){var e=this.props.activity,t=u(e),r=this.formatAccessMessage(e.access_type,e.user);return t&&r?o.reactFormat(r,{strong:n.default.createElement("strong",null),name:e.user.display_name,entity:t}):null},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this,t=e.message,r=e.props.activity;return t?n.default.createElement(i.FileActivityStreamCard,{user:r.user,timestamp:r.timestamp,action:{text:s._("Sharing settings"),onClick:this.onShareSettingsClick},message:t}):null},t})(n.default.Component);t.FileSharedContentChangeActivityCard=g});
//# sourceMappingURL=file_shared_content_change_activity_card.min.js-vfl4Lvxig.map