<template>
  <div style="margin: 3px">
    <div style="display: flex; align-items: center">
      <el-form ref="queryForm" :model="queryParams" label-width="80px" style="height: 15%">
        <el-row>
          <el-col :span="8">
            <el-form-item label="所属产品">
              <el-input size="mini" v-model="queryParams.productCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="业务日期">
              <el-input size="mini" v-model="queryParams.bussinessDate"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="汇总方式">
              <el-input size="mini" v-model="queryParams.huizongType"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="资产类型">
              <el-input size="mini" v-model="queryParams.assetType"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="资产名称">
              <el-input size="mini" v-model="queryParams.assetName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="资产币种">
              <el-input size="mini" v-model="queryParams.currency"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-button style="height: 70px">查询</el-button>
    </div>
    <!-- 产品信息 -->
    <el-table :data="prodTableData" height="81%" border style="width: 100%;">
      <el-table-column type="selection" align="center" width="40"></el-table-column>
      <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
      <el-table-column prop="productCode" show-overflow-tooltip label="产品代码" width="150"></el-table-column>
      <el-table-column prop="balance" show-overflow-tooltip label="可用余额" width="100"></el-table-column>
      <el-table-column prop="yield" show-overflow-tooltip label="目标收益率" width="100"></el-table-column>
      <el-table-column prop="account" show-overflow-tooltip label="实时头寸" width="150"></el-table-column>
      <el-table-column prop="cc" show-overflow-tooltip label="实时持仓" width="150"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center" width="150">
        <template slot-scope="scope">
          <el-button @click="viewRiskCalc(scope.row)" type="text" size="small">收益指标</el-button>
          <el-button @click="viewRiskCalc(scope.row)" type="text" size="small">风控指标</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "splitIn",
  props: {},
  data() {
    return {
      queryParams: {},
      prodTableData: [
        {productCode: 'A1D33F53a1f5a456e', balance: '16,531', yield: '3', account: '8,948,635', cc: '315,643,150'},
        {productCode: 'A1D33F5', balance: '15,896', yield: '5', account: '6,948,635', cc: '300,643,150'}
      ]
    }
  },
  methods: {
    // 查看风控指标
    viewRiskCalc(row) {
      console.log(row);
    }
  }
}
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0px;
}
.el-input--mini {
  width: 80%;
}
/deep/ .el-table th.el-table__cell {
  text-align: center;
}
</style>
