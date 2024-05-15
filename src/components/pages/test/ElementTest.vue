<template>
  <div>
    <el-form ref="form"
             :model="form"
             :rules="rules"
             label-width="120px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="数量" prop="account">
            <el-statistic group-separator="," :precision="2" :value="form.account"></el-statistic>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户真实姓名" prop="userName">
            <el-input v-model="form.userName" maxlength="20" placeholder="请输入用户真实姓名" show-word-limit size="small"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户类型" prop="userType">
            <el-select class="radius-select" v-model="form.userType" placeholder="请选择用户类型" clearable style="width: 100%">
              <el-option label="普通用户" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户登录名" prop="userAccountName">
<!--            <el-popover placement="top-start" trigger="hover" :content="form.userAccountName">-->
            <el-tooltip class="calc-tooltip-item" placement="top-start" :content="form.userAccountName">
              <el-input v-model="form.userAccountName"
                        maxlength="30"
                        placeholder="请输入登录名"
                        size="small"
                        show-word-limit></el-input>
            </el-tooltip>

<!--            </el-popover>>-->
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户状态" prop="userStatus">
            <el-select v-model="form.userStatus" placeholder="请选择用户状态" style="width: 100%">
              <el-option key="1" label="正常" value="1"></el-option>
              <el-option key="0" label="禁用" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="O45用户编码" prop="hsUserCode">
            <el-tooltip placement="top-start" :content="form.hsUserCode">
              <el-input v-model="form.hsUserCode" maxlength="30" placeholder="请输入O45用户编码" show-word-limit></el-input>
            </el-tooltip>

          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="部门" prop="departmentCode" class="form-item-flex">
            <el-select v-model="form.departmentCode"
                       filterable
                       placeholder="请选择部门"
                       size="mini"
                       style="width: 90%">
              <el-option key="101" label="市场部" value="101"></el-option>
              <el-option key="102" label="策划部" value="102"></el-option>
            </el-select>
            <el-button size="mini" icon="el-icon-search"></el-button>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="职位" prop="departmentPosition">
            <el-select v-model="form.departmentPosition"
                       filterable
                       placeholder="请选择职位"
                       style="width: 100%">
              <el-option key="manager" label="经理" value="manager"></el-option>
              <el-option key="staff" label="员工" value="staff"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="手机号码" prop="phoneNumber">
            <el-input v-model="form.phoneNumber"
                      maxlength="11"
                      placeholder="请输入手机号码"
                      show-word-limit></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否O45交易员" prop="isO45Trader">
            <el-select v-model="form.isO45Trader"
                       filterable
                       placeholder="请选择是否O45交易员"
                       style="width: 100%">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="多选组件" prop="multiSelectLabel">
            <el-input v-model="form.multiSelectLabel" disabled>
              <el-button slot="append" icon="el-icon-search" @click="showMultiSelectDialog"></el-button>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="动态Tag" prop="dynamicTag">
            <el-input v-model="form.dynamicTag" disabled>
              <el-button slot="append" icon="el-icon-search" @click="showDynamicTagDialog"></el-button>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="输入建议" prop="inputSuggest">
            <el-autocomplete
              class="inline-input"
              v-model="form.inputSuggest"
              clearable
              :fetch-suggestions="querySearch"
              @select="handleSelect"
              @blur="onInputSuggestBlur"
              placeholder="请输入内容"
              style="width: 100%"
            >
              <el-button slot="append" icon="el-icon-search" @click="showDynamicTagDialog"></el-button>
            </el-autocomplete>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="test-buttons-box">
      <el-button class="test-button-item" type="primary" @click="onBtnClicked()">跳转</el-button>
      <el-badge :is-dot="true">
        <el-tooltip placement="top" content="16545">
          <el-button class="test-button-item" type="primary">小红点</el-button>
        </el-tooltip>

      </el-badge>
      <el-tooltip effect="light" placement="top" content="重置筛选条件并刷新列表">
        <el-button class="test-circle-button test-button-item" icon="el-icon-refresh" circle></el-button>
      </el-tooltip>
      <el-button class="iconfont" circle>&#xe671;</el-button>
    </div>
    <el-dialog title="Multi Select with Tag"
               :visible.sync="dialogMultiSelectShow"
               class="multi-select-dialog"
               width="30%">
      <multiSelect
        :show="dialogMultiSelectShow"
        :source-data="form.multiSelectTags"
        @confirm="onMultiSelectConfirm"
        @cancel="dialogMultiSelectShow = false"
      ></multiSelect>
    </el-dialog>
    <el-dialog title="Dynamic Tag"
               :visible.sync="dialogDynamicTagShow"
               class="multi-select-dialog"
               width="30%">
      <dynamicSelectTag @cancel="dialogDynamicTagShow = false"></dynamicSelectTag>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ElementTest",
  components: {
    multiSelect: () => import('../components/MultiSelectTag'),
    dynamicSelectTag: () => import('../components/dynamicSelectTag'),
  },
  mounted() {
    console.log('Test_mounted');
    const arr = [{id: 2, date: '2023-6-9'},{id: 1, date: '2023-12-1'},{id: 3}]
    arr.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    console.log(arr)
    this.calcTooltipItems()
  },
  data() {
    return {
      dialogMultiSelectShow: false,
      dialogDynamicTagShow: false,
      form: {
        account: 10000,
        userName: undefined,
        userAccountName: 'a13fe51a1',
        hsUserCode: '31af86e',
        userType: '1',
        userStatus: '1',
        departmentCode: undefined,
        departmentPosition: undefined,
        // 手机号码
        phoneNumber: undefined,
        multiSelectTag: undefined,
        multiSelectLabel: undefined,
        multiSelectTags: [],
        dynamicTag: undefined,
        inputSuggest: undefined
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户真实姓名', trigger: 'blur'},
          { max: 20, message: '长度不能超过20个汉字或字符', trigger: 'blur' }
        ],
        userAccountName: [
          {required: true, message: '请输入用户登录名', trigger: 'blur'},
          { max: 30, message: '长度不能超过30个汉字或字符', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9]+$/, message: '只能输入英文字母或数字', trigger: 'blur' }
        ],
        password: [
          {required: true, message: '请输入登录密码', trigger: 'blur'},
          { max: 30, message: '长度不能超过30个汉字或字符', trigger: 'blur' },
        ],
        userType: [
          {required: true, message: '请选择用户类型', trigger: 'change'}
        ],
        userStatus: [
          {required: true, message: '请选择用户状态', trigger: 'change'}
        ],
        departmentCode: [
          {required: true, message: '请选择部门', trigger: 'change'}
        ],
        departmentPosition: [
          {required: true, message: '请选择职位', trigger: 'change'}
        ],
        phoneNumber: [
          {required: true, message: '请输入手机号码', trigger: 'blur'},
        ]
      },
      restaurants: [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" }
      ],
    }
  },
  methods: {
    calcTooltipItems() {
      const doms = document.getElementsByClassName('calc-tooltip-item')
      console.log(doms[0], 'doms');
      console.log(doms[0].attributes['aria-describedby'].value, 'doms');

      const elementId = doms[0].attributes['aria-describedby'].value
      console.log(elementId, 'elementId');

      const itemDom = document.getElementById(elementId)
      console.log(itemDom, 'domItem');
    },
    showMultiSelectDialog() {
      this.dialogMultiSelectShow = true
    },
    showDynamicTagDialog() {
      this.dialogDynamicTagShow = true
    },
    onMultiSelectConfirm(res) {
      this.form.multiSelectTag = res.value
      this.form.multiSelectLabel = res.label
      this.form.multiSelectTags = res.tags
      this.dialogMultiSelectShow = false
    },
    onBtnClicked() {
      const startDate = new Date('2023-6-20')
      // this.$router.push({name: 'commonCustomer', params: {id: '123'}})
    },
    querySearch(queryString, callback) {
      const restaurants = this.restaurants;
      const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      callback(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) > -1);
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    onInputSuggestBlur() {
      console.log('onInputSuggestBlur')
    }
  }
}
</script>

<style scoped>
/*.el-row{*/
/*  display:flex;*/
/*  flex-wrap: wrap;*/
/*}*/
.el-col-12 {
  min-height: 48px;
}
.multi-select-dialog {
  padding: 10px 20px;
}
.test-buttons-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.test-button-item {
  margin-left: 5px;
}
.test-circle-button {
  max-height: 39px;
  max-width: 39px;
  border: 0px;
  color: #4892e3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 900;
}
/deep/ .radius-select .el-input--suffix .el-input__inner{
  border-radius: 20px;
}

/deep/ .form-item-flex .el-form-item__content {
  display: flex;
  align-items: center;
}
</style>
