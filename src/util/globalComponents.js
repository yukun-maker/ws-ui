/**
 * 全局注册组件
 * 以下直接在template内用即可，不需要再通过import的形式在父组件的components内引用
 */

// 引入组件
import dyncTable from '@/components/dyncTable/index'
import columnSetting from '@/components/columnSetting/index'

// 注册组件
const plugins = {
  install(Vue) {
    // 原SvTable，全局通用列表 <sv-table></sv-table>
    Vue.component('dyncTable', dyncTable)
    Vue.component('columnSetting', columnSetting)
  }
}
export default plugins
