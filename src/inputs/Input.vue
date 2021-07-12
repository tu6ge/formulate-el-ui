<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-input 
      v-model="context.model"
      v-bind="context.slotProps.component"
      :type="type"
      @blur="context.blurHandler"
      v-on="$listeners"
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
  },
  computed: {
    type(){
      return this.context.slotProps.component.elType || 'text'
    }
  }
}
</script>