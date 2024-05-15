<template>
  <div>
    <el-button @click="onSearchBtnClicked">查询</el-button>
    <el-table
      :data="tableData"
      border
      show-summary
      highlight-current-row
      stripe
      height="500"
      style="width: 100%">
      <el-table-column fixed type="selection" width="55"></el-table-column>
      <el-table-column fixed prop="product" header-align="center" label="产品" width="100"></el-table-column>
      <el-table-column prop="product" header-align="center" label="产品" width="100"></el-table-column>
      <el-table-column prop="product" header-align="center" label="产品" width="100"></el-table-column>
      <el-table-column prop="product" header-align="center" label="产品" width="100"></el-table-column>
      <el-table-column prop="product" header-align="center" label="产品" width="100"></el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="address" header-align="center" label="地址" width="100"> </el-table-column>
      <el-table-column prop="stock" header-align="center" label="库存" width="100"> </el-table-column>
      <el-table-column prop="stock" header-align="center" label="库存" width="100"> </el-table-column>
      <el-table-column prop="stock" header-align="center" label="库存" width="100"> </el-table-column>
      <el-table-column prop="stock" header-align="center" label="库存" width="100"> </el-table-column>
      <el-table-column prop="stock" header-align="center" label="库存" width="100"> </el-table-column>
      <el-table-column prop="stock" header-align="center" label="库存" width="100"> </el-table-column>
      <el-table-column fixed="right" prop="remark" header-align="center" label="备注" width="100"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import {fakeData} from "@/util/fakeData";

export default {
  name: "hugeDataTable",
  mounted() {
    this.onSearchBtnClicked()
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    onSearchBtnClicked() {
      this.tableData = fakeData.getTableData()
    }
  }
}
</script>

<style scoped>

</style>
