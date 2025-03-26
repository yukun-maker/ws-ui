<template>
 <div style="text-align: center">
   <el-progress type="circle" :percentage="percentage"></el-progress>
 </div>
</template>

<script>
export default {
  name: "progressDialog",
  props: {
    percentage: {
      type: Number,
      default: 0
    }
  },
  watch: {},
  computed: {},
  mounted() {
    this.init()
  },
  data() {
    return {}
  },
  methods: {
    init() {},
  }
}
</script>

<style scoped>
.dialogBtn {
  text-align: center;
  margin: 10px 3px 0px 0px;
}
.tag-item {
  margin: 5px;
}
.my-divider {
  margin: 10px 0;
}
</style>
