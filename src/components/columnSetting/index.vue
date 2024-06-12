<template>
  <el-dialog title="列设置" :visible.sync="dialogVisible" close-on-click-modal width="660px" append-to-body>
    <el-transfer
      ref="transfer"
      style="text-align: left; display: inline-block; padding-left: 20px;"
      v-model="values"
      :data="columns"
      :titles="['显示列', '隐藏列']"
      :props="{key: 'prop'}"
      @change="handleChange">
      <div slot="left-footer">
        <el-button class="transfer-footer" @click="up">
          <i class="el-icon-arrow-up" title="上移"></i>
        </el-button>
        <el-button class="transfer-footer" @click="down">
          <i class="el-icon-arrow-down" title="下移"></i>
        </el-button>
        <el-button class="transfer-footer" @click="reset">
          <i class="el-icon-refresh" title="重置列设置"></i>
        </el-button>
      </div>
      <div slot="right-footer" class="transfer-footer">
        <!--        <el-button class="transfer-footer" @click="reset">-->
        <!--          <i class="el-icon-refresh" title="备用按钮"></i>-->
        <!--        </el-button>-->
      </div>
    </el-transfer>
    <div style="padding-top: 10px; text-align: center">
      <el-button type="primary" plain @click="onConfirmBtnClicked">确定</el-button>
      <el-button type="primary" plain @click="onCancelBtnClicked">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
// import { saveColumnSetting } from './api'
export default {
  name: 'columnSetting',
  data() {
    return {
      values: [],
      columns: []
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    showColumns: Array,
    allFields: Array,
    module: String,
    getShowFieldList: Function
  },
  watch: {
    dialogVisible: {
      immediate: true,
      handler(val) {
        if (val) {
          this.init()
        }
      }
    },
    values: {
      deep: true,
      handler() {
        this.columns.forEach(el => {
          el.show = !this.values.includes(el.prop)
        })
      }
    },
  },
  methods: {
    init() {
      const showColumnsPropArr = this.showColumns.map(el => el.prop)
      const hideColumns = this.allFields.filter(el => showColumnsPropArr.indexOf(el.prop) === -1)
      if (hideColumns.length > 0) this.values = hideColumns.map(el => el.prop)
      this.columns = _.cloneDeep(this.allFields)
      this.columns.forEach(el => el.show = showColumnsPropArr.includes(el.prop))
    },
    up() {
      const leftChecked = this.$refs.transfer.leftChecked
      if (!leftChecked || !leftChecked.length) {
        return this.$notify({ title: '提示', message: '请在左侧选择排序列字段', type: 'warning', duration: 2000 })
      }
      if (leftChecked.length > 1) {
        return this.$notify({ title: '提示', message: '只能选择一项', type: 'warning', duration: 2000 })
      }
      const moveElement = leftChecked[0]
      const fromIndex = this.columns.findIndex(el => el.prop === moveElement)
      let topFlag = true
      for (let i = fromIndex - 1; i > -1; i--) {
        if (this.columns[i].show) {
          topFlag = false
          const fromColumn = this.columns[fromIndex]
          const preColumn = this.columns[i]
          this.columns.splice(fromIndex, 1, preColumn)
          this.columns.splice(i, 1, fromColumn)
          break
        }
      }
      if (topFlag) {
        return this.$notify({ title: '提示', message: '已经上移到最顶部', type: 'warning', duration: 2000 })
      }
    },
    down() {
      const leftChecked = this.$refs.transfer.leftChecked
      if (!leftChecked || !leftChecked.length) {
        return this.$notify({ title: '提示', message: '请在左侧选择排序列字段', type: 'warning', duration: 2000 })
      }
      const moveElement = leftChecked[0]
      if (leftChecked.length > 1) {
        return this.$notify({ title: '提示', message: '只能选择一项', type: 'warning', duration: 2000 })
      }
      const fromIndex = this.columns.findIndex(el => el.prop === moveElement)
      let bottomFlag = true
      for (let i = fromIndex + 1; i < this.columns.length; i++) {
        if (this.columns[i].show) {
          bottomFlag = false
          const fromColumn = this.columns[fromIndex]
          const nextColumn = this.columns[i]
          this.columns.splice(fromIndex, 1, nextColumn)
          this.columns.splice(i, 1, fromColumn)
          break
        }
      }
      if (bottomFlag) {
        return this.$notify({ title: '提示', message: '已经下移到最底部', type: 'warning', duration: 2000 })
      }
    },
    async reset() {
      this.init()
      this.values = []
    },
    handleChange(value, direction, movedKeys) {
    },
    onConfirmBtnClicked() {
      this.$emit('confirmEvent', this.columns.filter(el => this.values.indexOf(el.prop) === -1))
    },
    onCancelBtnClicked() {
      this.$emit('cancelEvent')
    }
  }
}
</script>
<style scoped>
.transfer-footer {
  margin: 8px 0 0 10px;
  padding: 5px 10px;
}
/deep/ .el-transfer-panel__body {
  height: 320px;
}
/deep/ .el-transfer-panel__list {
  height: 100%;
}
/*::v-deep .el-transfer-panel__list {*/
/*  height: 500px;*/
/*}*/
</style>
