define(["require","exports","tslib","react","classnames","prop-types","spectrum_comments/comment_editor/comment_utils","spectrum_comments/comment_editor/comment_editor","spectrum_comments/comment_editor/components/post_bar"],function(t,e,n,o,r,a,s,c,i){"use strict";function l(t,e){var r=e.localization;if(t.isEmpty)return null;var a=t.disabled,s=t.postEnabled,c=n.__rest(t,["disabled","postEnabled"]);return o.createElement(i.PostBar,n.__assign({},c,{postEnabled:s&&!a,postLabel:r.threadPostLabel,cancelLabel:r.threadCancelLabel}))}Object.defineProperty(e,"__esModule",{value:!0}),e.ThreadEditorPostBar=l,l.contextTypes={localization:a.object};var d=(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={content:s.createEmptyContent()},e.clear=function(){e.setState({content:s.createEmptyContent()})},e.onPost=function(t,n){e.props.disabled||(e.clear(),e.props.onPost(t,n))},e.onCancel=function(){e.clear(),e.props.onCancel()},e.renderPostBar=function(t){return o.createElement(l,n.__assign({},t,{disabled:e.props.disabled}))},e}return n.__extends(e,t),e.prototype.render=function(){var t=this.localization,e=this.props,n=e.author,a=e.shouldFocus,s=e.mentionsMatches,i=e.onEditorStateChange,l=e.onMentionsQueryUpdated,d=e.onFocus,u=void 0===d?function(){return{}}:d,p=e.onBlur,m=void 0===p?function(){return{}}:p,h=this.state.content,b=r({"sc-thread-editor":!0});return o.createElement("div",{className:b},o.createElement(c.CommentEditor,{author:n,shouldFocus:a,content:h,mentionsMatches:s,onEditorStateChange:i,onMentionsQueryUpdated:l,onCancel:this.onCancel,onPost:this.onPost,placeholder:t.threadEditorPlaceholder,postSignalComponent:this.renderPostBar,onFocus:u,onBlur:m}))},Object.defineProperty(e.prototype,"localization",{get:function(){return this.context.localization},enumerable:!0,configurable:!0}),e.contextTypes={localization:a.object},e})(o.PureComponent);e.ThreadEditor=d});
//# sourceMappingURL=thread_editor.min.js-vflFUnaH7.map