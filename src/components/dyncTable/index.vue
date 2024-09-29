<template>
  <div class="dync-table" :class="className">
    <el-table
      ref="dyncTable"
      row-key="_id"
      :data="tableData"
      :max-height="customTableHeight || 300"
      :height="customTableHeight || 300"
      border
      :style="getTableStyle"
      @row-dblclick="handleRowDbClick"
      :cell-style="cellStyleFunc"
      :show-summary="showSummary"
      :summary-method="getSummaries"
      @sort-change="sortChange"
      @selection-change="selectionChange"
    >
      <el-table-column v-if="selection" key="selection" align="center" type="selection" width="55" fixed="left"></el-table-column>
      <el-table-column
        v-if="tableIndex"
        key="index"
        type="index"
        align="center"
        label="序号"
        :width="fieldList.length === 0 ? '' : 55"
        fixed="left"
      ></el-table-column>
      <el-table-column
        v-for="(item, index) in newFieldList.filter(item => item.show)"
        :key="`${index}-${item.prop}`"
        :label="item.label"
        :prop="item.prop"
        :align="item.align || 'center'"
        :width="item.width"
        :min-width="item.minWidth || '100px'"
        :show-overflow-tooltip="item.showOverflowTooltip"
        sortable="custom"
        :fixed="item.fixed"
      >
        <template v-slot="scope">
          <!-- slot自定义列 -->
<!--          <template v-if="item.type === 'slot'">-->
<!--            <slot :name="`col-${item.prop}`" :row="scope.row"></slot>-->
<!--          </template>-->
          <!-- 输入框 -->
          <el-input v-if="item.type === 'input'"
                    v-model="scope.row[item.prop]"
          ></el-input>
          <!-- 下拉框 -->
          <el-select v-else-if="item.type === 'slot' && item.slotProps.type === 'select'"
            v-model="scope.row[item.prop]"
            :filterable="item.slotProps.filterable"
            :size="item.slotProps.size"
            style="width: 100%">
            <el-option v-for="(item, index) in item.slotProps.options"
                       :key="item.key"
                       :label="item.label"
                       :value="item.value"
            ></el-option>
          </el-select>
          <!-- 下拉框带按钮 -->
          <div v-else-if="item.type === 'slot' && item.slotProps.type === 'selectWithBtn'" class="form-item-flex">
            <el-select v-model="scope.row[item.prop]"
                       :filterable="item.slotProps.filterable"
                       :size="item.slotProps.size"
                       :class="item.slotProps.selectClass">
              <el-option v-for="(item, index) in item.slotProps.options"
                         :key="item.key"
                         :label="item.label"
                         :value="item.value"
              ></el-option>
            </el-select>
            <el-button :size="item.slotProps.size"
                       :icon="item.slotProps.btnIcon"
                       style="padding: 7px 7px"
                       :class="item.slotProps.btnClass"
            ></el-button>
          </div>
          <!-- 其他 -->
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="handle"
        key="handle"
        :fixed="handle.fixed"
        :align="handle.align || 'center'"
        :label="handle.label || '操作'"
        :width="handle.width"
        :min-width="handle.minWidth"
      >
        <template v-slot="scope">
          <template v-for="(item, index) in handle.btnList">
            <!-- 自定义操作类型 -->
<!--            <slot-->
<!--              v-if="item.slot && item.show && !btnHideSet(item.event, scope.row)"-->
<!--              :name="`bt-${item.event}`"-->
<!--              :data="{ item, row: scope.row }"-->
<!--            ></slot>-->
            <!-- 操作按钮 -->
            <el-popover v-if="item.slot && item.slotProps.type === 'popoverTable' && item.show && !btnHideSet(item.event, scope.row)"
              :placement="item.slotProps.placement"
              :width="item.slotProps.width"
              :trigger="item.slotProps.trigger">
              <el-table :data="scope.row[item.slotProps.tableDataField]" border>
                <el-table-column
                  v-for="(popoverTableItem, popoverTableIndex) in item.slotProps.tableColumns"
                  :key="`${popoverTableIndex}-${popoverTableItem.prop}`"
                  :label="popoverTableItem.label"
                  :prop="popoverTableItem.prop"
                  :width="popoverTableItem.width"
                  :min-width="popoverTableItem.minWidth || '100px'"
                  :show-overflow-tooltip="popoverTableItem.showOverflowTooltip"
                  sortable="custom"
                ></el-table-column>
              </el-table>
              <el-button :key="index" :size="item.size" :type="item.type" slot="reference"
                         :icon="item.icon"
                         :disabled="item.disabled || btnDisableSet(item.event, scope.row)">{{ item.label }}</el-button>
            </el-popover>
            <el-button
              v-if="!item.slot && item.show && !btnHideSet(item.event, scope.row)"
              :key="index"
              :size="item.size"
              :type="item.type"
              :icon="item.icon"
              :disabled="item.disabled || btnDisableSet(item.event, scope.row)"
              @click.stop="handleClick(item.event, scope.row, scope.$index)"
            >
              {{ item.label }}
            </el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <template v-if="pager">
      <div class="table-pagination-container">
        <el-pagination
          :current-page.sync="listInfo.query.page"
          :page-sizes="listInfo.pageSizes"
          :page-size="listInfo.query.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listInfo.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </template>
    <column-setting
      v-if="columnSelectorVisible"
      ref="columnSelector"
      :module="module"
      :show-columns.sync="newFieldList"
      :all-fields.sync="fieldList"
      :dialogVisible.sync="columnSelectorVisible"
      @confirmEvent="columnSettingConfirm"
      @cancelEvent="columnSettingCancel"
    />
  </div>
</template>
<script>
import {fakeData} from "@/util/fakeData";
export default {
  name: 'dyncTable',
  props: {
    // 斑马线
    stripe: {
      type: Boolean,
      default: false
    },
    // 是否显示序号
    tableIndex: {
      type: Boolean,
      default: false
    },
    // 是否有复选框
    selection: {
      type: Boolean,
      default: false
    },
    // 列表数据
    tableData: {
      type: Array
    },
    // 表格字段配置
    fieldList: {
      type: Array,
      required: true,
      default: () => []
    },
    // 主键
    pk: {
      type: String,
      default: 'id'
    },
    // 是否分页
    pager: {
      type: Boolean,
      default: true
    },
    // 普通列表查询条件
    query: {
      type: Object,
      default: () => ({})
    },
    // 如果需要配置隐藏列功能需要传入module，module需要保证唯一性
    // 如果重新设置了列表的列，例如新增列，修改列，需要删除掉admin库里面的base_user_columns_setting表里面对应module的列设置
    module: {
      type: String
    },
    // 操作栏配置
    handle: {
      type: Object
    },
    // 操作按钮隐藏功能
    btnHideSet: {
      type: Function,
      default: () => false
    },
    // 操作按钮disabled
    btnDisableSet: {
      type: Function,
      default: () => false
    },
    // 自定义table高度
    customTableHeight: {
      type: [String, Number]
    },
    // 表格宽度，默认100%
    tableWidth: {
      type: String,
      default: '100%'
    },
    // 自定义类名
    className: {
      type: String
    },
    pageLimit: {
      type: Number
    },
    cellStyleFunc: {
      type: Function,
      default: () => {
        // 默认空
      }
    },
    // 是否展示合并行
    showSummary: {
      type: Boolean,
      default: false
    },
    // 合计行方法
    getSummaries: {
      type: Function,
      default: () => []
    },
    // 排序改变事件
    sortChange: {
      type: Function,
      default: () => {}
    },
    // 自定义样式
    rowStyle: {
      type: Function,
      default: () => ({})
    }
  },
  data() {
    return {
      // 选中的行数据
      selectionRows: [],
      // 列表信息
      listInfo: {
        // 总条数
        total: 0,
        // 分页数量列表
        pageSizes: [10, 20, 50, 100],
        // 查询条件
        query: {
          page: 1,
          // 每页条数
          limit: this.pageLimit ? this.pageLimit : 20
        }
      },
      newFieldList: [],
      // 列设置弹窗展示标识
      columnSelectorVisible: false,
      // 行排序
      customOrderByList: []
    }
  },
  computed: {
    // 列表样式
    getTableStyle() {
      return { width: this.tableWidth }
    }
  },
  watch: {},
  // 更新列表
  updated() {
    this.$refs.dyncTable.doLayout()
  },
  // 初始化列设置
  created() {
    this.initColumns()
  },
  methods: {
    // 初始化列设置
    // 1. 如果没有传入module，即列设置未保存到数据库，直接通过调用geneNewFieldList生成列表的当前列
    // 2. 如果传入了module，即列设置可能已经保存到数据库
    // 2.1 请求数据库保存的列设置的数据
    // 2.2 判断后台是否请求回来数据
    // 2.2.1 如果请求回来数据，调用geneNewFieldListForModule对请求后台的数据做处理，取出每一列的设置with和show，以及列的顺序
    // 2.2.2 如果未请求回来数据，调用geneNewFieldList生成列表的当前列
    async initColumns() {
      if (!this.module) {
        this.newFieldList = this.geneNewFieldList()
      } else {
        const response = fakeData.getColumnSetting()
        this.newFieldList =
          response && response.length ? this.geneNewFieldListForModule(JSON.parse(response)) : this.geneNewFieldList()
      }
    },
    // 根据前台定义生成列设置，过滤掉hidden隐藏的列，并且把显示的列设置show为true
    geneNewFieldList() {
      const newFieldList = this.fieldList
        .filter(el => !el.hidden)
        .map(item => {
          this.$set(item, 'show', true)
          return item
        })
      return _.cloneDeep(newFieldList)
    },
    // 根据数据库中保存的列设置做处理
    geneNewFieldListForModule(oldFieldList) {
      // 前台设置的列设置为fieldList过滤掉隐藏列
      const newFieldList = this.fieldList.filter(el => !el.hidden)
      let storedInDbFields = []
      const newAddFields = []
      // 遍历前台列设置
      for (let index = 0; index < newFieldList.length; index++) {
        // 前台列对象item
        const item = { ...newFieldList[index] }
        // 获得当前列在数据库中存储的数据
        const oldIndex = oldFieldList.findIndex(el => item.prop === el.prop)
        // 判断，如果后台中没有oldIndex不为-1，在item中记录在后台存存储的顺序，获得是否展示show，获取列设置width或者minWidth，把数据存储到storedInDbFields中
        // 如果oldIndex为false说明为前台新增列，设置show属性为true，找到其前一列的属性prop，将其存储到新增表单属性数组newAddFields中
        if (oldIndex !== -1) {
          item.orderNum = oldIndex
          item.show = oldFieldList[oldIndex].show
          if (item.width) {
            item.width = oldFieldList[oldIndex].width ? oldFieldList[oldIndex].width : item.width
          }
          if (item.minWidth) {
            item.minWidth = oldFieldList[oldIndex].minWidth ? oldFieldList[oldIndex].minWidth : item.minWidth
          }
          storedInDbFields.push(item)
        } else {
          this.$set(item, 'show', true)
          item.preProp = index > 0 ? newFieldList[index - 1].prop : undefined
          newAddFields.push(item)
        }
      }
      // 对之前已经存在的列表配置项storedInDbFields进行排序
      storedInDbFields.sort(this.compareArray('orderNum'))
      // 遍历newAddFields
      // 如果不存在前一列的属性，将其放到第一列
      // 否则将其插入到前一列的下一列
      newAddFields.forEach(item => {
        if (!item.preProp) {
          storedInDbFields = [item, ...storedInDbFields]
        } else {
          const preIndex = storedInDbFields.findIndex(el => el.prop === item.preProp)
          storedInDbFields.splice(preIndex + 1, 0, item)
        }
      })
      return storedInDbFields
    },
    // 对数组进行排序
    compareArray(prop) {
      return function(a, b) {
        const value1 = a[prop]
        const value2 = b[prop]
        return value1 - value2
      }
    },
    // 重置列设置
    async resetColumnSettings() {
      // TODO
      const newFieldList = this.fieldList
        .filter(el => !el.hidden)
        .map(item => {
          this.$set(item, 'show', true)
          return item
        })
      this.newFieldList = _.cloneDeep(newFieldList)
      console.log({ module: this.module, columns: JSON.stringify(newFieldList) })
      // await saveColumnSetting({ module: this.module, columns: JSON.stringify(newFieldList) })
    },
    // 打开列设置弹出框
    columnsSettings() {
      this.columnSelectorVisible = true
    },
    // 改变每页显示数量
    handleSizeChange(val) {
      this.listInfo.query.limit = val
      this.listInfo.query.page = 1
      this.$emit('onPageInfoChange')
    },
    // 换页
    handleCurrentChange(val) {
      this.listInfo.query.page = val
      this.$emit('onPageInfoChange')
    },
    // 单击事件
    handleRowClick(row) {
      if (this.selection) {
        this.$refs.dyncTable.toggleRowSelection(row)
      }
    },
    // 选中行数据
    selectionChange(val) {
      this.selectionRows = val
      this.$nextTick(() => {
        // this.$refs.dyncTable.doLayout()
      })
    },
    // setRowStyle({ row, rowIndex }) {
    //   if (!this.pk) {
    //     return
    //   }
    //   const selectIndex = this.selectionRows.findIndex(item => item[this.pk] === row[this.pk])
    //   let selectRowStyle = {}
    //   if (selectIndex !== -1) {
    //     selectRowStyle = { background: '#ecf5ff' }
    //   }
    //   const index = rowIndex + 1
    //   let stripeStyle = {}
    //   if (this.stripe && index % 2 === 0) {
    //     stripeStyle = { background: '#FAFAFA' }
    //   }
    //   return { ...stripeStyle, ...selectRowStyle, ...this.rowStyle({ row, rowIndex }) }
    // },
    // 双击行事件
    handleRowDbClick(row) {
      this.$emit('row-dbclick', row)
    },
    // 派发按钮点击事件
    handleClick(event, data, index) {
      this.$emit('handle-click', event, data, index)
    },
    // 列设置确定保存事件
    columnSettingConfirm(visibleColumns) {
      this.newFieldList = _.cloneDeep(visibleColumns)
      // TODO
      this.columnSelectorVisible = false
    },
    // 列设置取消事件
    columnSettingCancel() {
      this.columnSelectorVisible = false
    }
  }
}
</script>

<style scoped>
/deep/ .form-item-flex .el-form-item__content {
  display: flex;
  align-items: center;
}
</style>
