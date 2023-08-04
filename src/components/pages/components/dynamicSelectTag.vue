<template>
 <div>
   <el-tag
     v-for="item in dynamicTags"
     :key="item.value"
     closable
     class="tag-item"
     effect="plain"
     @close="closeTag(item)"
   >{{ item.label }}</el-tag>

   <el-select
     ref="selectTag"
     v-if="selectVisible"
     v-model="selectValue"
     clearable
     filterable
     style="margin-left: 20px;"
     size="small"
     @blur="onBlur"
     placeholder="请选择">
     <el-option
       v-for="item in options"
       :key="item.value"
       :label="item.label"
       :value="item.value">
     </el-option>
   </el-select>
   <el-button v-else class="button-new-tag" size="small" @click="showSelect">+ New Tag</el-button>
   <div class="dialogBtn">
     <el-button type="primary" size="medium" @click="$emit('cancel')">返回</el-button>
     <el-button type="primary" size="medium">确定</el-button>
   </div>
 </div>
</template>

<script>
export default {
  name: "dynamicSelectTag",
  data() {
    return {
      selectValue: undefined,
      selectVisible: false,
      dynamicTags: [],
      options: [
        {value: 'hjg', label: '黄金糕'},
        {value: 'spn', label: '双皮奶'},
        {value: 'kzj', label: '蚵仔煎'},
        {value: 'yd', label: '椰冻'},
        {value: 'hqsn', label: '厚切酸奶'},
        {value: 'tlms', label: '提拉米苏'},
        {value: 'mjj', label: '毛巾卷'},
        {value: 'hjg1', label: '黄金糕1'},
        {value: 'spn1', label: '双皮奶1'},
        {value: 'kzj1', label: '蚵仔煎1'},
        {value: 'yd1', label: '椰冻1'},
        {value: 'hqsn1', label: '厚切酸奶1'},
        {value: 'tlms1', label: '提拉米苏1'},
        {value: 'mjj1', label: '毛巾卷1'},
        {value: 'hjg2', label: '黄金糕2'},
        {value: 'spn2', label: '双皮奶2'},
        {value: 'kzj2', label: '蚵仔煎2'},
        {value: 'yd2', label: '椰冻2'},
        {value: 'hqsn2', label: '厚切酸奶2'},
        {value: 'tlms2', label: '提拉米苏2'},
        {value: 'mjj2', label: '毛巾卷2'},
      ]
    }
  },
  methods: {
    // onChanged(val) {
    //   this.dynamicTags = this.options.filter(el => val.indexOf(el.value) > -1)
    //   console.log(val);
    // },
    closeTag(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showSelect() {
      this.selectVisible = true
      this.$nextTick(_ => {
        this.$refs.selectTag.focus()
      })
    },
    onBlur() {
      if (this.selectValue) {
        this.dynamicTags.push(this.options.find(el => el.value = this.selectValue))
      }
      this.selectVisible = false
      this.selectValue = ''
    }
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
</style>
