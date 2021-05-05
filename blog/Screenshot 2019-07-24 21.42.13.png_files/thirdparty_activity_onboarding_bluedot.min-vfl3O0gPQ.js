define(["require","exports","tslib","react","modules/clean/api_v2/default_user_client","external/lodash","modules/clean/react/portal","deep-integrations/user_education_pulsar/user_education_pulsar","modules/clean/react/css","modules/clean/logging/telemetry","modules/clean/logging/hive/schemas/web-ecosystem_integration_events"],function(t,e,i,n,r,o,a,s,u,c,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n=i.__importDefault(n),o=i.__importStar(o),c=i.__importStar(c);var d=(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={visibleDot:!1,activityTabRendered:!1},e.mounted=!1,e}return i.__extends(e,t),e.prototype.render=function(){if(!this.hasThirdpartyActivity())return null;if(this.props.activityTabClicked)return null;if(!this.state.visibleDot)return null;if(!this.state.activityTabRendered)return null;var t=this.getActivityTab();return null==t?null:n.default.createElement(a.Portal,{parentElement:t},n.default.createElement("div",{className:"thirdparty_activity-onboarding-bluedot-container"},n.default.createElement(s.UserEducationPulsarUI,null)))},e.prototype.componentDidMount=function(){var t=this;this.mounted=!0,this.props.activityTabClicked||this.userHasOnboarded(this.props.user).then(function(e){if(!e&&t.mounted){t.setState({visibleDot:!0});(new c.HiveLogger).log(new l.EcosystemIntegrationLoggingTableRow({event_name:l.EventName.onboardingDotViewed}))}}),this.props.showActivityTab&&!this.state.activityTabRendered&&this.setStateForActivityTabRendered()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.componentDidUpdate=function(t,e){if(!t.activityTabClicked&&this.props.activityTabClicked&&e.visibleDot){new r.DefaultUserApiV2Client(this.props.user).ns("integrations").rpc("add_dismiss_prompts",{prompts:[{".tag":"thirdparty_activity_onboarding_bluedot"}]},{});(new c.HiveLogger).log(new l.EcosystemIntegrationLoggingTableRow({event_name:l.EventName.onboardingDotDismissed}))}!t.showActivityTab&&this.props.showActivityTab&&this.setStateForActivityTabRendered()},e.prototype.setStateForActivityTabRendered=function(){var t=this;Promise.resolve().then(function(){t.mounted&&null!=t.getActivityTab()&&t.setState({activityTabRendered:!0})})},e.prototype.getActivityTab=function(){return document.querySelector('[data-value="activity"]')},e.prototype.userHasOnboarded=function(t){return i.__awaiter(this,void 0,Promise,function(){var e,n;return i.__generator(this,function(i){switch(i.label){case 0:return e=new r.DefaultUserApiV2Client(t),[4,e.ns("integrations").rpc("get_user_settings",void 0,{})];case 1:return n=i.sent(),[2,o.some(n.dismissed_prompts,[".tag","thirdparty_activity_onboarding_bluedot"])]}})})},e.prototype.hasThirdpartyActivity=function(){var t=["slack_link_share","zoom_screen_share"];return o.some(this.props.fileActivities,function(e){return t.includes(e.type)})},e})(n.default.Component);e.ThirdPartyActivityOnboardingBlueDot=u.requireCssWithComponent(d,["/static/css/thirdparty_activity_onboarding_bluedot-vfltmmYoB.css"])});
//# sourceMappingURL=thirdparty_activity_onboarding_bluedot.min.js-vflCsU90O.map