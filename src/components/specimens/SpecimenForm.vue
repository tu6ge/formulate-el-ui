<template>
  <div class="specimens specimens--group">
    <h2>表单</h2>
    <div class="">
      <FormulateForm v-model="form1">
        <FormulateInput
          label="用户名"
          type="el-input"
          name="username"
        />
        <FormulateInput
          label="密码"
          type="el-input"
          show-password
          name="password"
          validation="required"
          error-behavior="blur"
        />
        <FormulateInput
          label="确认密码"
          type="el-input"
          show-password
          name="password_confirm"
          validation="required|confirm"
          error-behavior="blur"
        />
        <FormulateInput
          label="年龄"
          type="el-input"
          validation="bail|required|number|max:120|min:18"
          error-behavior="blur"
        />
        <FormulateInput
          label="个性签名"
          type="el-input"
          el-type="textarea"
          maxlength="100"
          show-word-limit
          autosize
        />
        <FormulateInput
          label="性别"
          type="radio"
          :options="{'male':'男','female':'女'}"
        />
        <FormulateInput
          label="擅长的语言"
          type="checkbox"
          :options="['javascript','css','vue',{value:'jquery','label':'jquery',disabled: true}]"
          validation="required|max:2"
        />
        <FormulateInput
          label="擅长的语言"
          type="checkbox"
          :requiredTip="false"
          :options="['javascript','css','vue',{value:'jquery','label':'jquery',disabled: true}]"
          validation="required|max:2"
        />
        <FormulateInput
          label="用户头像"
          type="image"
          name="avatar"
          help="你长相怎样？"
        />
        <FormulateInput
          label="最热的星球"
          type="select"
          placeholder="选择一个星球"
          :options="{moon: '月球', mars: '火星', venus: '进行', mercury: '水星', sun: '太阳'}"
          help="星球表面的平均温度"
        />
        <FormulateInput
          label="旅行计划"
          type="group"
          :repeatable="true"
          add-label="添加旅行计划"
          name="plan"
          validation="city"
          :validation-rules="{city: cityRule}"
          :validation-messages="{ city: cityMessage }"
        >
          <FormulateInput
            label="日期"
            type="date"
            name="date"
          />
          <FormulateInput
            label="城市"
            name="city"
            type="select"
            :options="{beijing:'北京',shanghai:'上海',shenzhen:'深圳',qingdao:'青岛'}"
          />
          <FormulateInput
            label="景点"
            type="text"
            name="content"
            validation="required"
          />
        </FormulateInput>
        <FormulateInput
          type="submit"
          label="提交"
        />
      </FormulateForm>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      form1:{},
    }
  },
  methods: {
    cityRule ({value}) {
      if(Array.isArray(value)) {
        if(value.length ==1){
          return true
        }
        if (value[1].city == 'qingdao'){
          return true
        }
      }
      return false
    },
    cityMessage () {
      return '第二个城市请选择青岛'
    }
  }
}
</script>