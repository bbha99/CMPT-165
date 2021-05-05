define(["require","exports","tslib","react","modules/clean/react/modal","modules/clean/react/css","modules/clean/static_urls","spectrum/button"],function(e,t,a,l,s,c,i,n){"use strict";function o(e){e.preventDefault(),s.Modal.close()}Object.defineProperty(t,"__esModule",{value:!0}),l=a.__importDefault(l);var m=function(e){var t=i.static_url("/static/images/app_actions/extensions_edu_modal-vflbqOv4S.gif"),a=i.static_url("/static/images/app_actions/extensions_edu_modal@2x-vflUAZ9Uc.gif");return e.imageUrl&&e.imageUrl2x&&(t=e.imageUrl,a=e.imageUrl2x),a+=" 2x",l.default.createElement(s.Modal,{className:"split-modal uxa-modal",ariaLabel:"SplitModal",acceptButtonText:null,id:e.analyticsTrackingId,style:"clean"},l.default.createElement("div",{className:"split-modal__content"},l.default.createElement("div",{className:"split-modal__image-container"},l.default.createElement("img",{className:"split-modal__image",src:t,srcSet:a,alt:""})),l.default.createElement("div",{className:"split-modal__text-container"},l.default.createElement("div",{className:"split-modal__title"},e.title),l.default.createElement("div",{className:"split-modal__detail-text"},e.detail),l.default.createElement(n.Button,{variant:"borderless",className:"split-modal__accept-button",onClick:e.onAccept},e.acceptButtonText),e.closeButtonText?l.default.createElement(n.Button,{variant:"styleless",className:"split-modal__close-button",onClick:o},e.closeButtonText):null)))};t.SplitModal=c.requireCssWithComponent(m,["/static/css/extensions/index-vfl_jKO8D.css","/static/css/modal-vflYDGbgV.css"])});
//# sourceMappingURL=split_modal.min.js-vflBapNbG.map