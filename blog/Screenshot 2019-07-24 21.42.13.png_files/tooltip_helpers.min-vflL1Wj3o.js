define(["require","exports","modules/core/i18n","modules/clean/datetime","modules/clean/previews/util","modules/clean/react/pass/constants"],function(e,n,a,i,r,s){"use strict";function o(e){var n=a._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s",{comment:'Format like "userName <newline> Viewed 5 days ago'});if(r.shouldShowPlatformInfo()){var o=e.platformType;o===s.PASS_PLATFORM.DESKTOP?n=a._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on desktop",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on desktop'}):o===s.PASS_PLATFORM.WEB?n=a._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on web",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on web'}):o===s.PASS_PLATFORM.MOBILE&&(n=a._("<b>%(user_name)s</b> <newline/> Viewed %(ago)s <newline/> on mobile",{comment:'Format like "userName <newline> Viewed 5 days ago <newline> on mobile'}))}return n.replace("%(ago)s",i.ago(1e3*e.whenLastSeen,!1,!0,!0))}function t(){return a._("<b>%(user_name)s</b> <newline/> Viewing now",{comment:'Format like "user_name <newline> Viewing now"'})}function m(e){switch(e){case"owner":return a._("<b>%(user_name)s</b> <newline/> Owner",{comment:'Format like "user_name <newline> Owner"'});case"writer":return a._("<b>%(user_name)s</b> <newline/> Can edit",{comment:'Format like "user_name <newline> Can edit"'});case"reader":return a._("<b>%(user_name)s</b> <newline/> Can comment",{comment:'Format like "user_name <newline> Can comment"'});case"reader_no_comment":case void 0:return a._("<b>%(user_name)s</b> <newline/> Can view",{comment:'Format like "user_name <newline> Can view"'})}}Object.defineProperty(n,"__esModule",{value:!0}),n.buildSeenStateTemplate=function(e){return e.isActive?t():null!=e.whenLastSeen?o(e):m(e.accessLevel)},n.buildSeenStateMessage=function(e){return n.buildSeenStateTemplate(e).replace("<b>","").replace("</b>","").replace("<newline/>","").replace("%(user_name)s","").trim()}});
//# sourceMappingURL=tooltip_helpers.min.js-vfloU2AOh.map