<template>
 <div>
   <el-select
     v-if="!ifView"
     v-model="multiSelectValue"
     multiple
     collapse-tags
     clearable
     @change="onSelectChanged"
     style="margin-left: 20px;"
     size="medium"
     placeholder="请选择">
     <el-option
       v-for="item in options"
       :key="item.value"
       :label="item.label"
       :value="item.value"
     ></el-option>
   </el-select>
   <el-divider v-if="!ifView && !!multiSelectValue && multiSelectValue.length > 0" class="my-divider"></el-divider>
   <el-tag
     v-for="item in itemTags"
     :key="item.value"
     :closable="!ifView"
     class="tag-item"
     effect="plain"
     @close="closeTag(item)"
   >{{ item.label }}</el-tag>
   <div class="dialogBtn">
     <el-button type="primary" size="medium" @click="$emit('cancel')">返回</el-button>
     <el-button type="primary" size="medium" @click="onConfirm">确定</el-button>
   </div>
 </div>
</template>

<script>
export default {
  name: "MultiSelectTag",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    status: {
      type: String
    },
    sourceData: {
      type: Array,
      default: () => { return [] }
    }
  },
  watch: {
    show: {
      handler(val) {
        if (val) this.init()
      }
    }
  },
  computed: {
    ifView() {
      return this.status === 'view'
    }
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      multiSelectValue: [],
      itemTags: [],
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
      ],
      flag: true
    }
  },
  methods: {
    init() {
      this.multiSelectValue = []
      this.itemTags = []
      if (!!this.sourceData && this.sourceData.length > 0) {
        this.itemTags = _.clone(this.sourceData)
        if (!this.ifView) {
          this.multiSelectValue = this.sourceData.map(el => el.value)
        }
      }
    },
    // options是可变的，不能直接赋值
    onSelectChanged(val) {
      const existsValueArr = this.itemTags.map(el => el.value)
      if (val && val.length > this.itemTags.length) { // 新增
        const addValue = val.find(el => existsValueArr.indexOf(el) === -1)
        this.itemTags.push(this.options.find(el => el.value === addValue))
      } else { // 删除
        if (val && val.length === 0) {
          this.itemTags = []
        } else {
          const deleteValue = existsValueArr.find(el => val.indexOf(el) === -1)
          const deleteIndex = this.itemTags.findIndex(el => el.value === deleteValue)
          this.itemTags.splice(deleteIndex, 1)
        }
      }
    },
    closeTag(tag) {
      this.itemTags.splice(this.itemTags.indexOf(tag), 1)
      this.multiSelectValue.splice(this.multiSelectValue.indexOf(tag.value), 1)
    },
    onConfirm() {
      const ret = {
        label: this.itemTags.map(el => el.label).join('、'),
        value: this.multiSelectValue,
        tags: this.itemTags
      }
      this.$emit('confirm', ret)
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
.my-divider {
  margin: 10px 0;
}
</style>
