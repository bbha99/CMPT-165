define(["require","exports","tslib","react","spectrum_comments/comment_editor/core/utils","spectrum_comments/comment_editor/core/scope_container","spectrum_comments/comment_editor/core/scope_component","spectrum_comments/comment_editor/core/editor_component","spectrum_comments/utils/shallow_equals"],function(t,e,o,n,r,s,i,c,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=(function(t){function e(e){var o=t.call(this,e)||this;return o.createContainer(),o}return o.__extends(e,t),e.prototype.getLayerProps=function(t){return{}},e.prototype.componentWillMount=function(){this.updateContainerStatus(this.props),this.subscribeToContainer()},e.prototype.componentWillReceiveProps=function(t){p.shallowEquals(this.getLayerProps(this.props),this.getLayerProps(t))||(this.cachedScope=void 0),this.updateContainerStatus(t)},e.prototype.componentWillUnmount=function(){this.unsubscribeFromContainer()},e.prototype.updateContainerStatus=function(t){this.container.updateStatus(this.mapPropsToUpdates(t,this.container.getStatus()),this.scope)},e.prototype.reloadCachedScope=function(){return r.completeScopeFromLayers(this.scopeNames,this.mapPropsToLayers(this.props))},Object.defineProperty(e.prototype,"container",{get:function(){return this._container},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scope",{get:function(){return this.cachedScope||(this.cachedScope=this.reloadCachedScope()),this.cachedScope},enumerable:!0,configurable:!0}),e.prototype.createContainer=function(){this._container=new s.ScopeContainerImpl({scopeNames:this.scopeNames,defaultStatus:this.createDefaultStatus()})},e.prototype.render=function(){return n.createElement(i.BaseScopeComponent,{scope:this.scope,container:this.container},this.props.children)},e.prototype.subscribeToContainer=function(){var t=this;this.subscriptionHandle=this.container.subscribe(function(e){t.setState(e)})},e.prototype.unsubscribeFromContainer=function(){this.subscriptionHandle&&this.subscriptionHandle.unsubscribe()},e})(c.EditorComponent);e.EditorContainer=a});
//# sourceMappingURL=editor_container_component.min.js-vfliTHRex.map