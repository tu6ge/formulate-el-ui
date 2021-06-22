<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-input 
      v-model="context.model"
      v-bind="context.slotProps.component"
    />
  </div>
</template>
<script>
import {Input} from 'element-ui'

export default {
  name:'fe-input',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [Input.name]: Input
  }
}
</script>