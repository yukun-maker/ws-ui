export default {
  state: {
    // 菜单折叠状态
    isCollapse: false
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}
