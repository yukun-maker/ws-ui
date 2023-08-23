<template>
  <div>
    <el-checkbox-group
      v-model="checkedCities">
      <el-checkbox v-for="city in cities"
                   :label="city.label"
                   :value="city.value"
                   :key="city.value"></el-checkbox>
    </el-checkbox-group>
    <span v-if="this.$route.params">{{ this.$route.params.id }}</span>
<!--    <span v-if="this.$route.params">{{ this.$route }}</span>-->
  </div>

</template>

<script>
const cityOptions = [
  {value: 'SH', label: '上海'},
  {value: 'BJ', label: '北京'},
  {value: 'GZ', label: '广州'},
  {value: 'SZ', label: '深圳'}];
export default {
  name: "CommonCustomer",
  mounted() {
    console.log('CommonCustomer_mounted');
  },
  data() {
    return {
      checkedCities: ['SH', 'BJ'],
      cities: cityOptions
    };
  }
}
</script>

<style scoped>

</style>
