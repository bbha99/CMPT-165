(function(e,r){if("function"==typeof define&&define.amd)define("Reselect",["exports"],r);else if("undefined"!=typeof exports)r(exports);else{var t={exports:{}};r(t.exports),e.Reselect=t.exports}})(this,function(e){"use strict";function r(e,r){return e===r}function t(e,r,t){if(null===r||null===t||r.length!==t.length)return!1;for(var n=r.length,o=0;o<n;o++)if(!e(r[o],t[o]))return!1;return!0}function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,o=null,i=null;return function(){return t(n,o,arguments)||(i=e.apply(null,arguments)),o=arguments,i}}function o(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every(function(e){return"function"==typeof e})){var t=r.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return r}function i(e){for(var r=arguments.length,t=Array(r>1?r-1:0),i=1;i<r;i++)t[i-1]=arguments[i];return function(){for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];var s=0,a=i.pop(),c=o(i),l=e.apply(void 0,[function(){return s++,a.apply(null,arguments)}].concat(t)),p=n(function(){for(var e=[],r=c.length,t=0;t<r;t++)e.push(c[t].apply(null,arguments));return l.apply(null,e)});return p.resultFunc=a,p.recomputations=function(){return s},p.resetRecomputations=function(){return s=0},p}}function u(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var t=Object.keys(e);return r(t.map(function(r){return e[r]}),function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return r.reduce(function(e,r,n){return e[t[n]]=r,e},{})})}e.__esModule=!0,e.defaultMemoize=n,e.createSelectorCreator=i,e.createStructuredSelector=u;var s=e.createSelector=i(n)}),define("modules/clean/api_v2/client_base",["require","exports","tslib","modules/clean/api_v2/types","modules/clean/api_v2/transport/jquery","modules/clean/devtools/panels/performance/perf_hub_action_types","modules/clean/devtools/panels/performance/perf_hub_actions","modules/constants/debug","modules/constants/request","modules/core/browser","modules/core/cookies","modules/core/uri"],function(e,r,t,n,o,i,u,s,a,c,l,p){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),s=t.__importStar(s),c=t.__importStar(c);var f=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(o.JQueryAsyncTransport);r.DefaultApiV2Transport=f;var d=(function(){function e(e){this.transport=e||new f}return e.prototype._upload=function(e,r,o,i){var u,s=t.__assign((u={},u[n.ApiV2HeaderNames.CsrfToken]=this.csrfToken(),u[n.ApiV2HeaderNames.DropboxApiArg]=JSON.stringify(r),u),this._headers(i));return this.executeRpc(e,s,o,"application/octet-stream")},e.prototype._rpc=function(e,r,o){var i,u=t.__assign((i={},i[n.ApiV2HeaderNames.CsrfToken]=this.csrfToken(),i),this._headers(o)),s=JSON.stringify(r||null);return this.executeRpc(e,u,s,"application/json")},e.prototype.csrfToken=function(){return l.Cookies.read("__Host-js_csrf")||""},e.prototype.executeRpc=function(e,r,n,o){return t.__awaiter(this,void 0,void 0,function(){var l,f,d,_,m,h,v;return t.__generator(this,function(t){switch(t.label){case 0:return l="client-web.dropbox.com"===c.get_hostname()?"client-web.dropbox.com":"www.dropbox.com",s.CPROFILE_ENABLED&&(f={cProfile:s.CPROFILE_PARAMETER,parent_request_id:a.REQUEST_ID},r[i.PerfHubHeaderNames.FORCE_REQUEST_TRACING_HEADER]="ON"),d=new p.URI({scheme:"https",authority:l,path:"/2/"+e,query:f}),[4,this.transport.executeRpc(d,r,n,o)];case 1:return _=t.sent(),s.CPROFILE_ENABLED&&(m=_.headers[i.PerfHubHeaderNames.SERVER_RESPONSE_TIME]||"-1",h=_.headers[i.PerfHubHeaderNames.REQUEST_PROFILE_ID]||"",v=_.headers[i.PerfHubHeaderNames.REQUEST_ID],u.PerfHubActions.add_ajax_profile(d.getPath(),m,h,v)),[2,_.result]}})})},e})();r.ApiV2ClientBase=d,d.prototype.ns=function(e){var r=this;return{rpc:function(t,n,o){return r._rpc(e+"/"+t,n,o)},upload:function(t,n,o,i){return r._upload(e+"/"+t,n,o,i)}}}}),define("modules/clean/api_v2/error",["require","exports","tslib","modules/core/html","modules/core/i18n","external/lodash"],function(e,r,t,n,o,i){"use strict";function u(e){return e instanceof d}function s(e){return e instanceof _}function a(e){return e instanceof m}function c(e){return e instanceof h}function l(e){return e instanceof v}function p(e){return e instanceof y}function f(e){return function(r){if(u(r))return e(r);throw r}}Object.defineProperty(r,"__esModule",{value:!0}),i=t.__importStar(i);var d=(function(){function e(e){this.message=e}return e.prototype.toString=function(){return void 0===this.message?"ApiError":"string"==typeof this.message?this.message:this.message.toString()},e.parseResponse=function(r,t,u,s){void 0===s&&(s=null);var a="";null==s&&(s=r in g?g[r]:r>=500?v:e);var c={raw:{status:r,responseBody:u},summary:null,error:{},headers:t};try{var l=JSON.parse(u)||{};c.error=l.error,c.summary=l.error_summary,a=null!=l.user_message?l.user_message.text:""}catch(e){}429!==r||a||(a=o._('Folder updates in progress — please try again later.\n<a href="/help/9259" target="_blank" rel="noopener">Learn more</a>'));var p=void 0;return a&&(p=new n.HTML(a)),i.assignIn(new s(p),c)},e})();r.ApiError=d;var _=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(d);r.BadRequestError=_;var m=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(d);r.AuthError=m;var h=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(d);r.AppError=h;var v=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(d);r.ServerError=v;var y=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(d);r.RateLimitError=y,r.isApiError=u,r.isBadRequestError=s,r.isAuthError=a,r.isAppError=c,r.isServerError=l,r.isRateLimitError=p,r.catchApiError=f;var g={400:_,401:m,409:h,429:y}}),define("modules/clean/api_v2/transport/jquery",["require","exports","tslib","jquery","external/lodash","modules/clean/api_v2/error"],function(e,r,t,n,o,i){"use strict";function u(e){var r=e.getAllResponseHeaders(),t={};if(r){var n=r.trim().split(/[\r\n]+/).map(function(e){return e.split(": ")});t=o.zipObject(o.map(n,o.first),o.map(n,function(e){return null!=e&&e[1]}))}return t}function s(e,r,t,n){return{result:JSON.parse(n.responseText),headers:u(n)}}function a(e){return i.ApiError.parseResponse(e.status,u(e),e.responseText)}Object.defineProperty(r,"__esModule",{value:!0}),n=t.__importDefault(n),o=t.__importStar(o);var c=(function(){function e(){}return e.prototype.executeRpc=function(e,r,t,o){return new Promise(function(i,u){return n.default.ajax({type:"POST",url:e.toString(),contentType:o,headers:r,data:t}).done(function(r,t,n){return i(s(e,r,t,n))}).fail(function(e){return u(a(e))})})},e})();r.JQueryAsyncTransport=c;var l=(function(){function e(e){if(e<=0)throw new Error("You passed syncTimeout=${syncTimeout}. syncTimeout must be a positive number");this.syncTimeout=e}return e.prototype.executeRpc=function(e,r,t,o){var i=Promise.resolve(null),u=function(r,t,n){i=Promise.resolve(s(e,r,t,n))},c=function(e){i=Promise.reject(a(e))};return n.default.ajax({type:"POST",url:e.toString(),contentType:o,headers:r,data:t,async:!1,timeout:this.syncTimeout,success:u,error:c}),i},e})();r.JQuerySyncTransport=l}),define("modules/clean/api_v2/types",["require","exports","tslib"],function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});(function(e){e.DropboxApiArg="Dropbox-API-Arg",e.DropboxApiSelectAdmin="Dropbox-API-Select-Admin",e.DropboxPathRoot="X-Dropbox-Path-Root",e.DropboxUid="X-Dropbox-Uid",e.DropboxTeamId="X-Dropbox-Teamid",e.DropboxTeamAuthorization="X-Dropbox-Team-Authorization",e.CsrfToken="X-CSRF-Token"})(r.ApiV2HeaderNames||(r.ApiV2HeaderNames={}));var n=(function(){function e(e,r,t){this.type=e,this.value=r,this.isScalar=t}return e.parse=function(e){var r=e[".tag"];return 2===Object.keys(e).length&&null!=e[r]?new o(r,e[r]):new i(r,e)},e})();r.Union=n;var o=(function(e){function r(r,t){return void 0===t&&(t=null),e.call(this,r,t,!0)||this}return t.__extends(r,e),r.prototype.toJSON=function(){var e={".tag":this.type};return null!=this.value&&(e[this.type]=this.value),e},r})(n);r.UnionScalar=o;var i=(function(e){function r(r,t){return void 0===t&&(t={}),e.call(this,r,t,!1)||this}return t.__extends(r,e),r.prototype.toJSON=function(){return t.__assign({".tag":this.type},this.value)},r})(n);r.UnionStruct=i}),define("modules/clean/api_v2/user_client",["require","exports","tslib","modules/clean/api_v2/types","modules/clean/api_v2/client_base","modules/clean/viewer"],function(e,r,t,n,o,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var u=(function(e){function r(r){return e.call(this,r)||this}return t.__extends(r,e),r.prototype._headers=function(e){var r,o=i.Viewer.get_viewer().get_user_by_id(e.subjectUserId);return t.__assign((r={},r[n.ApiV2HeaderNames.DropboxUid]=String(o.id),r[n.ApiV2HeaderNames.DropboxPathRoot]=String(o.root_ns_id),r),e.headers)},r})(o.ApiV2ClientBase);r.UserApiV2Client=u}),define("modules/clean/query_string_helpers",["require","exports"],function(e,r){"use strict";function t(e){return void 0===e&&(e=window),e.location.search}function n(e){var r={};if(e.length)for(var t=e.substring(1).replace(/&amp;/g,"&").split("&"),n=0,o=t;n<o.length;n++){var i=o[n],u=i.split("="),s=u[0],a=u[1];s&&a&&(s=s.trim(),a=a.trim(),s.length&&a.length&&(r[s]=decodeURIComponent(a.replace(/\+/g," "))))}return r}function o(){return n(t())}function i(e,r){return r.reduce(function(r,t){return e.hasOwnProperty(t)&&(r[t]=e[t]),r},{})}function u(){return i(n(t()),a)}function s(){var e=u();return JSON.stringify(e)}Object.defineProperty(r,"__esModule",{value:!0});var a=["gclid","oqa","trigger","_tk","_camp","_ad","_net","_kw","utm_campaign","utm_content","utm_medium","utm_source","utm_term","cont"];r.TRACKING_PARAMS_LIST=a,r.getQueryString=t,r.parseQueryString=n,r.getParsedQueryString=o,r.filterQueryObject=i,r.getTrackingParams=u,r.getTrackingParamsAsJSON=s}),define("modules/clean/undo",["require","exports","tslib","jquery","modules/constants/undo_strings","modules/core/notify"],function(e,r,t,n,o,i){"use strict";function u(){l&&(l(c),l=void 0,c=null)}function s(e,r){l=e,c=r||null}function a(e,r,t,s,a){if(void 0===a&&(a=o.UNDO),!r||!Object.keys(r).length)return void i.Notify.success(e);c=r,l=t,s=null==s?30:s;var p=n.default("<span />");e.toHTML?p.html(e.toHTML()):p.text(e);var f=n.default('<button class="button-as-link"/>').text(a);f.on("click",function(e){e.preventDefault(),u(),i.Notify.clear()}),p.append("&nbsp;").append(f),i.Notify.success(p,s)}Object.defineProperty(r,"__esModule",{value:!0}),n=t.__importDefault(n);var c,l;r.performUndo=u,r.setHandleUndo=s,r.notifyWithUndo=a});
//# sourceMappingURL=pkg-api_v2.min.js-vfl8c8Ckd.map