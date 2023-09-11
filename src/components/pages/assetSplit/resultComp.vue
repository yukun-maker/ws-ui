<template>
  <div>
    <el-tabs type="border-card" style="height: 100%">
      <el-tab-pane label="质押券信息">
        <el-table :data="pawnTable" height="300px" border style="width: 100%;">
          <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
          <el-table-column prop="field1" show-overflow-tooltip label="样例1" min-width="150"></el-table-column>
          <el-table-column prop="field2" show-overflow-tooltip label="样例2" min-width="100"></el-table-column>
          <el-table-column prop="field3" show-overflow-tooltip label="样例3" min-width="100"></el-table-column>
          <el-table-column prop="field4" show-overflow-tooltip label="样例4" min-width="150"></el-table-column>
          <el-table-column prop="field5" show-overflow-tooltip label="样例5" min-width="150"></el-table-column>
          <el-table-column prop="field6" show-overflow-tooltip label="样例6" min-width="150"></el-table-column>
          <el-table-column prop="field7" show-overflow-tooltip label="样例7" min-width="150"></el-table-column>
          <el-table-column prop="field8" show-overflow-tooltip label="样例8" min-width="150"></el-table-column>
          <el-table-column prop="field9" show-overflow-tooltip label="样例9" min-width="150"></el-table-column>
          <el-table-column prop="field10" show-overflow-tooltip label="样例10" min-width="150"></el-table-column>
          <el-table-column prop="field11" show-overflow-tooltip label="样例11" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="样例12" min-width="150"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="分配结果">
        <div style="height: 40px;line-height: 36px;background: aliceblue">
          <el-button size="small" type="primary" plain style="margin-left: 10px;">确认</el-button>
        </div>
        <el-table :data="splitResultTable" height="250px" border style="width: 100%;">
          <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
          <el-table-column prop="field1" show-overflow-tooltip label="关联交易回购" min-width="150"></el-table-column>
          <el-table-column prop="field2" show-overflow-tooltip label="资产类型" min-width="100"></el-table-column>
          <el-table-column prop="field3" show-overflow-tooltip label="买入方产品代码" min-width="150"></el-table-column>
          <el-table-column prop="field4" show-overflow-tooltip label="买入方产品名称" min-width="150"></el-table-column>
          <el-table-column prop="field5" show-overflow-tooltip label="产品本位币" min-width="150"></el-table-column>
          <el-table-column prop="field6" show-overflow-tooltip label="资产代码" min-width="150"></el-table-column>
          <el-table-column prop="field7" show-overflow-tooltip label="资产名称" min-width="150"></el-table-column>
          <el-table-column prop="field8" show-overflow-tooltip label="资产币种" min-width="150"></el-table-column>
          <el-table-column prop="field9" show-overflow-tooltip label="资产收益率(%)" min-width="150"></el-table-column>
          <el-table-column prop="field10" show-overflow-tooltip label="交易数量" min-width="150"></el-table-column>
          <el-table-column prop="field11" show-overflow-tooltip label="交易面值" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="价格/净价" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="应计利息" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="费用" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="交易金额" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="对应交易编号" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="卖出交易编号" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="卖出方产品代码" min-width="150"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="试算结果">
        <el-table :data="calcResultTable" height="300px" border style="width: 100%;">
          <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
          <el-table-column prop="field1" show-overflow-tooltip label="样例1" min-width="150"></el-table-column>
          <el-table-column prop="field2" show-overflow-tooltip label="样例2" min-width="100"></el-table-column>
          <el-table-column prop="field3" show-overflow-tooltip label="样例3" min-width="100"></el-table-column>
          <el-table-column prop="field4" show-overflow-tooltip label="样例4" min-width="150"></el-table-column>
          <el-table-column prop="field5" show-overflow-tooltip label="样例5" min-width="150"></el-table-column>
          <el-table-column prop="field6" show-overflow-tooltip label="样例6" min-width="150"></el-table-column>
          <el-table-column prop="field7" show-overflow-tooltip label="样例7" min-width="150"></el-table-column>
          <el-table-column prop="field8" show-overflow-tooltip label="样例8" min-width="150"></el-table-column>
          <el-table-column prop="field9" show-overflow-tooltip label="样例9" min-width="150"></el-table-column>
          <el-table-column prop="field10" show-overflow-tooltip label="样例10" min-width="150"></el-table-column>
          <el-table-column prop="field11" show-overflow-tooltip label="样例11" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="样例12" min-width="150"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="合规结果">
        <el-table :data="riskCalcResultTable" height="300px" border style="width: 100%;">
          <el-table-column type="index" align="center" label="序号" width="50"></el-table-column>
          <el-table-column prop="field1" show-overflow-tooltip label="样例1" min-width="150"></el-table-column>
          <el-table-column prop="field2" show-overflow-tooltip label="样例2" min-width="100"></el-table-column>
          <el-table-column prop="field3" show-overflow-tooltip label="样例3" min-width="100"></el-table-column>
          <el-table-column prop="field4" show-overflow-tooltip label="样例4" min-width="150"></el-table-column>
          <el-table-column prop="field5" show-overflow-tooltip label="样例5" min-width="150"></el-table-column>
          <el-table-column prop="field6" show-overflow-tooltip label="样例6" min-width="150"></el-table-column>
          <el-table-column prop="field7" show-overflow-tooltip label="样例7" min-width="150"></el-table-column>
          <el-table-column prop="field8" show-overflow-tooltip label="样例8" min-width="150"></el-table-column>
          <el-table-column prop="field9" show-overflow-tooltip label="样例9" min-width="150"></el-table-column>
          <el-table-column prop="field10" show-overflow-tooltip label="样例10" min-width="150"></el-table-column>
          <el-table-column prop="field11" show-overflow-tooltip label="样例11" min-width="150"></el-table-column>
          <el-table-column prop="field12" show-overflow-tooltip label="样例12" min-width="150"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "resultComp",
  data() {
    return {
      pawnTable: [],
      splitResultTable: [],
      calcResultTable: [],
      riskCalcResultTable: [],
    }
  }
}
</script>

<style scoped>
/deep/ .el-tabs__content {
  padding: 0;
}
</style>
