<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-select
      v-model="context.model"
      :options="context.options"
      v-bind="context.slotProps.component"
      @blur="context.blurHandler"
      v-on="$listeners"
    >
      <el-option
        v-for="(item,index) in context.options"
        :key="index"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>
<script>
import {Select,Option} from 'element-ui'

export default {
  name:'fe-select',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [Select.name]: Select,
    [Option.name]: Option,
  }
}
</script>