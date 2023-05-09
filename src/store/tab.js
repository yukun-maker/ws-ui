export default {
  state: {
    // 菜单折叠状态
    isCollapse: false,
    // 菜单的path - menuItem集合
    menuPathMap: new Map(),
    // 面包屑集合
    breadcrumbItemList: [
      {
        path: '/',
        label: '首页',
        name: 'homePage',
      }
    ]
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    updateMenuPathMap(state, value) {
      state.menuPathMap = value
    },
    updateBreadcrumbItems(state, items) {
      const headItem = [
        {
          path: '/',
          label: '首页',
          name: 'homePage',
        }
      ]
      state.breadcrumbItemList = headItem.concat(items)
    }
  }
}
