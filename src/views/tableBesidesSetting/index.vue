<template>
  <div>
    <el-button @click="onSearchBtnClicked">查询</el-button>
    <el-button @click="onColumnSettingBtnClicked">列设置</el-button>
    <dync-table
      ref="dyncTable"
      :module="module"
      :custom-table-height="tableHeight"
      class-name="table_besides_setting"
      :stripe="stripe"
      :tableIndex="showTableIndex"
      :selection="selection"
      :table-data.sync="tableData"
      :pager="true"
      :field-list.sync="fieldList"
      :handle.sync="handle"
      :show-summary="true"
      :get-summaries="getSummaries"
      :sort-change="sortChange"
      :btn-disable-set="btnDisabledSet"
      :btn-hide-set="btnHideSet"
    >
    </dync-table>
  </div>
</template>

<script>
import {fakeData} from "@/util/fakeData";

export default {
  name: "tableBesidesSetting",
  computed: {
    getSelectOpts() {
      return this.selectOpts
    }
  },
  created() {
  },
  mounted() {
    this.onSearchBtnClicked()
    const list = this.$refs.dyncTable.newFieldList
    const field = list.find(el => el.prop === 'investType')
    if (field) {
      field.slotProps.options = this.selectOpts
    }
    // this.selectOpts = [{key: "101", label:"市场部", value:"101"}, {key: "102", label:"策划部", value:"102"}]
  },
  data() {
    return {
      module: 'tableBesidesSetting',
      tableHeight: 500,
      tableData: [],
      selectOpts: [{key: "101", label:"市场部", value:"101"}, {key: "102", label:"策划部", value:"102"}],
      fieldList: [
        { prop: 'productCode', label: '产品', width: 150, showOverflowTooltip: true },
        { prop: 'assetCode', label: '资产', width: 150, showOverflowTooltip: true },
        { prop: 'faceValue', label: '资产面值', width: 150, showOverflowTooltip: true, type: 'number' },
        { prop: 'assetType', label: '资产类型', width: 150, showOverflowTooltip: true, type: 'slot',
          slotProps: {
            type: 'select',
            size: 'mini',
            filterable: true,
            options: [{key: "101", label:"市场部", value:"101"}, {key: "102", label:"策划部", value:"102"}]
          } },
        { prop: 'investType', label: '投资分类', width: 150, showOverflowTooltip: true, type: 'slot',
          slotProps: {
            type: 'selectWithBtn',
            size: 'mini',
            filterable: true,
            selectClass: 'selectWithBtn_select',
            btnClass: 'selectWithBtn_btn',
            btnIcon: 'el-icon-search',
            options: []
          }},
        { prop: 'account', label: '持仓', width: 150, showOverflowTooltip: true, type: 'input' },
        { prop: 'amount', label: '头寸', width: 150, showOverflowTooltip: true, type: 'number' },
        { prop: 'profitRate', label: '收益率', width: 150, showOverflowTooltip: true, type: 'number' },
        { prop: 'bank', label: '托管行', width: 150, showOverflowTooltip: true, type: 'number' },
        { prop: 'creator', label: '创建人', width: 150, showOverflowTooltip: true, type: 'number' },
        { prop: 'createDate', label: '创建时间', width: 150, showOverflowTooltip: true, type: 'number' },
        { prop: 'updater', label: '更新人', width: 150, showOverflowTooltip: true, type: 'number' },
        { prop: 'updateDate', label: '更新时间', width: 150, showOverflowTooltip: true, type: 'number' },
      ],
      handle: {
        fixed: 'right',
        width: 200,
        btnList: [
          { label: '查看', show: true, slot: true, type: 'primary', size: 'small', event: 'onViewBtnClicked',
            slotProps: {
              type: 'popoverTable',
              width: '400',
              placement: 'left',
              trigger: 'hover',
              tableColumns: [
                { prop: 'date', label: '日期', minWidth: 100, showOverflowTooltip: true },
                { prop: 'name', label: '名称', minWidth: 150, showOverflowTooltip: true },
                { prop: 'address', label: '地址', minWidth: 200, showOverflowTooltip: true },
              ],
              tableDataField: 'popoverTableList'
            }},
          { label: '编辑', show: true, type: 'primary', size: 'small', event: 'onEditBtnClicked' }
        ]
      },
      showSummary: true,
      showTableIndex: true,
      selection: true,
      stripe: true,
    }
  },
  methods: {
    // 列表查询方法
    onSearchBtnClicked() {
      this.tableData = fakeData.getTableBesidesSettingData()
    },
    btnDisabledSet(event, row) {
      if (event === 'onViewBtnClicked')
        return row.faceValue <  103
    },
    btnHideSet(event, row) {
      if (event === 'onViewBtnClicked')
        return row.faceValue === 103
    },
    onColumnSettingBtnClicked() {
      this.$refs.dyncTable.columnsSettings()
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
        } else {
          // sums[index] = 'N/A';
        }
      });
      return sums;
    },
    sortChange({ column, prop, order }) {
      console.log(prop, order);
      if ('ascending' === order) {
        this.tableData.sort((a, b) => {
          return String(a[prop]).localeCompare(String(b[prop]))
        })
      } else if ('descending' === order) {
        this.tableData.sort((a, b) => {
          return String(b[prop]).localeCompare(String(a[prop]))
        })
      } else {
        this.tableData.sort((a, b) => {
          return a._orderIndex - b._orderIndex
        })
      }
    },
  }
}
</script>

<style scoped>
/deep/ .selectWithBtn_select {
  width: 80%;
}
/deep/ .selectWithBtn_btn {
  padding: 7px;
}
</style>
