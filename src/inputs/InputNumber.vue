<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-input-number
      v-model="context.model"
      v-bind="context.slotProps.component"
    />
  </div>
</template>
<script>
import {InputNumber} from 'element-ui'

export default {
  name:'fe-input',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [InputNumber.name]: InputNumber
  }
}
</script>