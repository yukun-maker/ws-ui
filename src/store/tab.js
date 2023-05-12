import router from '@/router'

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
    ],
    homeTags: []
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
    },
    updateHomeTags(state, tagItems) {
      if (tagItems && tagItems.length > 0) {
        state.homeTags = state.homeTags.concat(tagItems)
      }
      window.sessionStorage.setItem('tags', JSON.stringify(state.homeTags))
    },
    closeTag(state, tagItem, toPath) {
      const index = state.homeTags.findIndex(el => el.path === tagItem.path)
      state.homeTags.splice(index, 1)
      if (router.currentRoute.path === tagItem.path) {
        if (toPath) {
          router.push(toPath)
        } else {
          router.push(state.homeTags[index-1].path)
        }
      }
      window.sessionStorage.setItem('tags', JSON.stringify(state.homeTags))
    }
  }
}
