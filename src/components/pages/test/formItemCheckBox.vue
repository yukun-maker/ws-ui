<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-col :span="7">
        <el-form-item label="资产规模">
          <el-input v-model="form.assetScale"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">
        <el-checkbox v-model="checkedObj.assetScale" class="form_checkbox"></el-checkbox>
      </el-col>
      <el-col :span="7">
        <el-form-item label="净资产">
          <el-input v-model="form.netValue"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">
        <el-checkbox v-model="checkedObj.netValue" class="form_checkbox"></el-checkbox>
      </el-col>
      <el-col :span="7">
        <el-form-item label="杠杆率">
          <el-input v-model="form.leverRate"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">
        <el-checkbox v-model="checkedObj.leverRate" class="form_checkbox"></el-checkbox>
      </el-col>
      <el-col :span="7">
        <el-form-item label="负债规模">
          <el-input v-model="form.debtScale"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">
        <el-checkbox v-model="checkedObj.debtScale" class="form_checkbox"></el-checkbox>
      </el-col>
      <el-col :span="7">
        <el-form-item label="单位净值">
          <el-input v-model="form.uniValue"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">
        <el-checkbox v-model="checkedObj.uniValue" class="form_checkbox"></el-checkbox>
      </el-col>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "ElementTest",
  components: {
  },
  mounted() {
  },
  data() {
    return {
      form: {
        assetScale: undefined,
        netValue: undefined,
        leverRate: undefined,
        debtScale: undefined,
        uniValue: undefined,
      },
      checkedObj: {
        assetScale: false,
        netValue: true,
        leverRate: true,
        debtScale: false,
        uniValue: false,
      },
      rules: {

      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.form_checkbox {
  margin-left: 10px;
  margin-top: 9px;
  transform: scale(1.5)
}
</style>
