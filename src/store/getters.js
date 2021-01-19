const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  userId: state => state.user.userId,
  username: state => state.user.username,
  nickname: state => state.user.nickname,
  realname: state => state.user.realname,
  introduction: state => state.user.introduction,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  menuPerms: state => state.user.menuPerms,
  btnPerms: state => state.user.btnPerms,
  apiPerms: state => state.user.apiPerms,
  roleNameSet: state => state.user.roleNameSet,
  roleValueSet: state => state.user.roleValueSet,
  menuBtnPermSet: state => state.user.menuBtnPermSet,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
