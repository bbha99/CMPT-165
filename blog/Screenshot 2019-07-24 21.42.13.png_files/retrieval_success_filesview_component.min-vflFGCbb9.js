define(["require","exports","tslib","external/react-redux","react","modules/clean/react/retrieval_success_banner/constants","modules/clean/react/retrieval_success_banner/data/store","modules/clean/react/retrieval_success_banner/data/selectors","modules/clean/react/retrieval_success_banner/browse_success_banner","modules/clean/react/retrieval_success_banner/search_success_banner","modules/clean/react/retrieval_success_banner/util"],function(e,n,r,a,t,s,c,i,u,o,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t=r.__importDefault(t),i=r.__importStar(i);var S=function(e,n){var a=i.isBrowseSuccessBannerCounterComplete,t=i.isBrowseSuccessBannerVisible,s=i.isRetrievalSuccessBannerVisible,c=i.isSearchSuccessBannerVisible,u=i.isSearchBarAbandoned,o=i.isSearchResultActionClicked,l=i.isSearchSuccessBannerDismissed;return r.__assign({browseSuccessBannerCounterComplete:a(e),browseSuccessBannerShouldShow:t(e),retrievalSuccessBannerShouldShow:s(e),searchSuccessBannerShouldShow:c(e),searchBarAbandoned:u(e),searchResultActionClicked:o(e),searchSuccessBannerDismissed:l(e)},n)},d=(function(e){function n(n){var r=e.call(this,n)||this;return r.updateBannerVariant=function(){var e=r.props,n=e.searchSuccessBannerShouldShow,a=e.browseSuccessBannerCounterComplete,t=e.browseSuccessBannerShouldShow;if(l.userIsOptedOutOfRetrievalSuccessBanner())return void r.setState({bannerVariant:s.BannerVariant.NONE});n?r.setState({bannerVariant:s.BannerVariant.SSB}):a||t?r.setState({bannerVariant:s.BannerVariant.BSB}):r.setState({bannerVariant:s.BannerVariant.NONE})},r.state={bannerVariant:s.BannerVariant.NONE},r}return r.__extends(n,e),n.prototype.componentDidUpdate=function(){this.updateBannerVariant()},n.prototype.componentWillMount=function(){this.updateBannerVariant()},n.prototype.render=function(){var e=this.props,n=e.user,r=e.displayContext,a=this.state.bannerVariant;return a===s.BannerVariant.SSB?t.default.createElement(o.SearchSuccessBanner,{user:n,displayContext:r}):a===s.BannerVariant.BSB?t.default.createElement(u.BrowseSuccessBanner,{displayContext:r}):null},n.defaultProps={displayContext:s.SearchSuccessDisplayContext.IN_EMBEDDED_APP},n})(t.default.PureComponent);n.RetrievalSuccessFilesviewBannerComponent=d;var B=a.connect(S)(d),p=c.getStoreForSuccessBanner();n.RetrievalSuccessFilesviewBannerWithProvider=function(e){return t.default.createElement(a.Provider,{store:p},t.default.createElement(B,r.__assign({},e)))}});
//# sourceMappingURL=retrieval_success_filesview_component.min.js-vfllWQe8L.map