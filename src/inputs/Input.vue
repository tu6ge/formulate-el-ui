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
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/icon.css'

export default {
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