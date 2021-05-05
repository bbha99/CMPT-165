define(["require","exports","tslib","react","modules/clean/react/pass/empty_seen_state_facepile","modules/clean/react/pass/seen_state_facepile","modules/clean/file_store/utils","modules/clean/react/pass/constants","modules/clean/react/pass/data_helpers","modules/clean/react/pass/store","modules/clean/react/pass/types","modules/clean/sharing/stores/sharing_info","modules/core/i18n"],function(e,s,t,n,o,r,i,a,p,u,l,f,c){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),n=t.__importDefault(n);var h=(function(e){function s(s){var t=e.call(this,s)||this;return t.onUpdateFromStore=function(){t.setState(t.getStateFromStore())},t.state=t.getStateFromStore(),t}return t.__extends(s,e),s.prototype.componentWillMount=function(){u.passStore.add_change_listener(this.onUpdateFromStore),f.sharingInfoStore.add_change_listener(this.onUpdateFromStore);var e=this.props.isViewMetadataDisabled;p.PassHelpers.setup({user:this.props.user,fileData:this.getPassFileData(),skipSharingEndpoints:e,prevFileData:null,shouldWritePresence:this.shouldRegisterPresence()})},s.prototype.componentWillReceiveProps=function(e){i.areFilesEqual(e.file,this.props.file)||this.setState({passInfo:{anonymousPresence:null,isPassPermissionsPending:!0,passFetchingStatus:a.PASS_FETCHING_STATUS.FETCHING,passPermissions:null,presence:null,identifiedSeenStateInfo:null,userIdsWithoutSeenStateInfo:[]},sharingInfo:void 0})},s.prototype.componentWillUpdate=function(e,s){var t=s.passInfo;if(t.userIdsWithoutSeenStateInfo.length>0&&a.fetchingStatusIsSuccessful(t.passFetchingStatus)&&e.user){var n=e.file,o=this.urlFromProps(e);p.SeenStateHelpers.fetchSeenStateUsers(e.user.id,t.identifiedSeenStateInfo,t.userIdsWithoutSeenStateInfo,n.file_id,o)}},s.prototype.componentDidUpdate=function(e){if(!i.areFilesEqual(this.props.file,e.file)){var s={file:e.file,url:this.urlFromProps(e)},t=this.props.isViewMetadataDisabled;p.PassHelpers.setup({user:this.props.user,fileData:this.getPassFileData(),skipSharingEndpoints:t,prevFileData:s,shouldWritePresence:this.shouldRegisterPresence()})}},s.prototype.componentWillUnmount=function(){u.passStore.remove_change_listener(this.onUpdateFromStore),f.sharingInfoStore.remove_change_listener(this.onUpdateFromStore),p.PassHelpers.teardown({user:this.props.user,fileData:this.getPassFileData(),async:!0,shouldWritePresence:this.shouldRegisterPresence()})},s.prototype.getStateFromStore=function(){var e=this.props,s=e.user,t=e.file.file_id;return{passInfo:{anonymousPresence:u.passStore.anonymousPresence(t),isPassPermissionsPending:u.passStore.isPassPermissionsPending(t),passFetchingStatus:u.passStore.passFetchingStatus(t),passPermissions:u.passStore.getPassPermissions(t),presence:u.passStore.presence(t),identifiedSeenStateInfo:u.passStore.identifiedSeenStateInfo(t),userIdsWithoutSeenStateInfo:u.passStore.userIdsWithoutSeenStateInfo(t)},sharingInfo:s&&f.sharingInfoStore.getSharingInfo(s.id,t)||void 0}},s.prototype.getAnonymousPassInfo=function(){return null==this.state.passInfo.anonymousPresence?[]:this.state.passInfo.anonymousPresence.map(function(e){return{seen_state_user:{user_id:e,display_name:c._("Guest")},seen_events:[]}})},s.prototype.getMemberInfosInPassFormat=function(e){var s=e.members();return{invitees:s?this.getInviteeMemberInfos(s):[],users:s?this.getUserMemberInfos(s):[]}},s.prototype.getUserMemberInfos=function(e){return e.users.valueSeq().toArray().reduce(function(e,s){return s.account&&e.push({seen_state_user:{user_id:s.account_id,display_name:s.account.display_name,email:s.email(),photo_circle_url:s.account.profile_photo_url||void 0,access_level:s.access_type},seen_events:[]}),e},[])},s.prototype.getInviteeMemberInfos=function(e){return e.invitees.valueSeq().toArray().map(function(e){return{seen_state_user:{display_name:e.contact,access_level:e.access_type},seen_events:[]}})},s.prototype.getPassFileData=function(){return{file:this.props.file,url:this.urlFromProps()}},s.prototype.shouldRegisterPresence=function(){return!this.props.fromBrowse},s.prototype.urlFromProps=function(e){return void 0===e&&(e=this.props),e.sharedLinkInfo?e.sharedLinkInfo.url:void 0},s.prototype.getPropsFromPassInfo=function(){return{anonymousPresenceInfo:this.getAnonymousPassInfo(),isPassPermissionsPending:this.state.passInfo.isPassPermissionsPending,passFetchingStatus:this.state.passInfo.passFetchingStatus,passPermissions:this.state.passInfo.passPermissions,presence:this.state.passInfo.presence,identifiedSeenStateInfo:this.state.passInfo.identifiedSeenStateInfo}},s.prototype.getPropsFromSharingInfo=function(){var e={uniqueMemberCountInfo:l.FacepileInfo.createNotLoaded(),sharingStorePassInfo:l.FacepileInfo.createNotLoaded()};return this.state.sharingInfo?(null!=this.state.sharingInfo.memberCounts()&&(e.uniqueMemberCountInfo=l.FacepileInfo.create(this.state.sharingInfo.memberCounts().total_unique_users)),this.state.sharingInfo.hasDisplayableMembers()&&(e.sharingStorePassInfo=l.FacepileInfo.create(this.getMemberInfosInPassFormat(this.state.sharingInfo))),e):e},s.prototype.getPropsFromController=function(){var e=this.props,s=e.file,t=e.fromBrowse,n=e.sizeClass,o=e.user,r=e.isCollapsed;return{file:s,fromBrowse:t,sizeClass:n,url:this.urlFromProps(),user:o,isCollapsed:r}},s.prototype.render=function(){var e=this.props,s=e.isViewingFileSubpath;if(null==e.user||s)return n.default.createElement(o.EmptySeenStateFacepile,null);var i=t.__assign({},this.getPropsFromPassInfo(),this.getPropsFromSharingInfo(),this.getPropsFromController());return n.default.createElement(r.SeenStateFacepile,t.__assign({},i))},s.displayName="SeenStateFacepileController",s})(n.default.Component);s.SeenStateFacepileController=h});
//# sourceMappingURL=seen_state_facepile_controller.min.js-vflJVzijU.map