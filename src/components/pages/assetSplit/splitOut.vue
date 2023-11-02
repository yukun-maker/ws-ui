<template>
  <div style="margin: 3px;">
    <div style="display: flex; align-items: center">
      <el-form ref="queryForm" :model="queryParams" label-width="80px" style="height: 15%">
        <el-row>
          <el-col :span="8">
            <el-form-item label="所属产品">
              <el-tooltip placement="top" :content="queryParams.productCode" :hide-after="600000" >
                <el-input size="mini" v-model="queryParams.productCode"></el-input>
              </el-tooltip>
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
    <el-table :data="prodTableData" height="30%" border style="width: 100%; padding-bottom: 5px;">
      <el-table-column prop="flag" fixed="left" align="center" width="70"></el-table-column>
      <el-table-column prop="productCode" show-overflow-tooltip label="产品代码" width="100"></el-table-column>
      <el-table-column prop="balance" show-overflow-tooltip label="可用余额" width="100"></el-table-column>
      <el-table-column prop="yield" show-overflow-tooltip label="目标收益率"></el-table-column>
      <el-table-column prop="account" show-overflow-tooltip label="实时头寸"></el-table-column>
      <el-table-column prop="cc" show-overflow-tooltip label="实时持仓"></el-table-column>
<!--      <el-table-column fixed="right" label="操作" align="center" width="150">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button @click="viewRiskCalc(scope.row)" type="text" size="small">收益指标</el-button>-->
<!--          <el-button @click="viewRiskCalc(scope.row)" type="text" size="small">风控指标</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
    <!-- 资产信息 -->
    <el-table :data="assetTableData" height="51%" border :stripe="true" style="width: 100%;">
      <el-table-column type="selection" align="center" width="40"></el-table-column>
      <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
      <el-table-column prop="splitRule" show-overflow-tooltip label="分配规则" width="150">

      </el-table-column>
      <el-table-column prop="tailRule" show-overflow-tooltip label="调尾规则" width="150"></el-table-column>
      <el-table-column prop="assetCode" show-overflow-tooltip label="资产代码" width="150"></el-table-column>
      <el-table-column prop="assetName" show-overflow-tooltip label="资产名称" width="150"></el-table-column>
      <el-table-column prop="tradeDirect" show-overflow-tooltip label="交易方向" width="150"></el-table-column>
      <el-table-column prop="investType" show-overflow-tooltip label="投资分类" width="150"></el-table-column>
      <el-table-column prop="yield" show-overflow-tooltip label="资产收益率" width="100"></el-table-column>
      <el-table-column prop="amount" show-overflow-tooltip label="交易数量" width="150"></el-table-column>
      <el-table-column prop="facePrice" show-overflow-tooltip label="资产面值" width="100"></el-table-column>
      <el-table-column prop="account" show-overflow-tooltip label="交易金额" width="150"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "splitOut",
  props: {},
  mounted() {
    // 页面大小改变监听事件
    window.onresize = () => {
      console.log('onresize');
    }
  },
  data() {
    return {
      queryParams: {
        productCode: 'zeqgaaaaf'
      },
      prodTableData: [
        {flag:'调整前', productCode: 'A1D33F53a1f5a456e', balance: '16,531', yield: '3', account: '8,948,635', cc: '315,643,150'},
        {flag:'调整后', productCode: 'A1D33F5', balance: '15,896', yield: '5', account: '6,948,635', cc: '300,643,150'}
      ],
      assetTableData: [
        {splitRule:'按等比例拆分', tailRule:'调整到头寸最大中', assetCode:'Q6D4F23D1A', assetName: '测试31', tradeDirect: '债券买入',
          investType: '投资类', yield: '4.3', amount: '13,515', facePrice: '100', account: '5,674,831'},
        {splitRule:'按持仓规模占比分配', tailRule:'调整到持仓规模最小中', assetCode:'Z31A566', assetName: '测试66', tradeDirect: '申购确认',
          investType: '持有到期日', yield: '3.3', amount: '64,563', facePrice: '100', account: '9,461,615'},
        {splitRule:'按可用金额分配', tailRule:'本次调整最多', assetCode:'KJAFHIOHE', assetName: '测试18', tradeDirect: '理财买入',
          investType: '交易类', yield: '3.3', amount: '71,466', facePrice: '100', account: '10,003,156'},
        {splitRule:'按等比例拆分', tailRule:'调整到头寸最大中', assetCode:'Q6D4F23D1A', assetName: '测试31', tradeDirect: '债券买入',
          investType: '投资类', yield: '4.3', amount: '13,515', facePrice: '100', account: '5,674,831'},
        {splitRule:'按持仓规模占比分配', tailRule:'调整到持仓规模最小中', assetCode:'Z31A566', assetName: '测试66', tradeDirect: '申购确认',
          investType: '持有到期日', yield: '3.3', amount: '64,563', facePrice: '100', account: '9,461,615'},
        {splitRule:'按可用金额分配', tailRule:'本次调整最多', assetCode:'KJAFHIOHE', assetName: '测试18', tradeDirect: '理财买入',
          investType: '交易类', yield: '3.3', amount: '71,466', facePrice: '100', account: '10,003,156'},
      ],
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
