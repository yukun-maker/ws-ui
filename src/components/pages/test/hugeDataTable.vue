<template>
  <div>
    <el-button @click="onSearchBtnClicked">查询</el-button>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column prop="name" header-align="center" label="姓名"></el-table-column>
      <el-table-column prop="address" header-align="center" label="地址"> </el-table-column>
      <el-table-column prop="remark" header-align="center" label="备注"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {fakeData} from "@/util/fakeData";

export default {
  name: "hugeDataTable",
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    onSearchBtnClicked() {
      const allData = fakeData.getHugeTableData()
      this.tableData = allData.slice(90000, 100000)
    }
  }
}
</script>

<style scoped>

</style>
