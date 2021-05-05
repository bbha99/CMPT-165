define(["require","exports","tslib","react","modules/clean/react/title_bar/title_bar_title","external/classnames"],function(e,l,t,o,a,s){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),o=t.__importDefault(o),s=t.__importDefault(s),l.TitleBarBase=function(e){var l=e.canClose,t=e.className,r=e.closeTitle,i=e.closeUrl,n=e.controls,c=e.customLogoUrl,d=e.file,u=e.isSigningMode,f=e.isSendForSignatureMode,m=e.areAllFieldsCompleted,_=e.onClose,S=e.overrideIcon,g=e.shouldShowIcon,p=e.sizeClass,C=e.title;return o.default.createElement("div",{className:s.default("react-title-bar",t)},m?null:o.default.createElement(a.TitleBarTitle,{canClose:!!l,closeTitle:r,closeUrl:i,customLogoUrl:c,file:d,isSigningMode:u,isSendForSignatureMode:f,onClose:_,overrideIcon:S,shouldShowIcon:g,sizeClass:p},C),o.default.createElement("div",{className:"react-title-bar__action-wrap"},n))},l.TitleBarBase.defaultProps={shouldShowIcon:!0}});
//# sourceMappingURL=base.min.js-vfl7rgYMO.map