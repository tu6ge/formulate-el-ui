<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-switch
      v-model="context.model"
      v-bind="context.slotProps.component"
      :active-value="1"
      :inactive-value="0"
    />
  </div>
</template>
<script>
import {Switch} from 'element-ui'

export default {
  name:'fe-switch',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [Switch.name]: Switch
  }
}
</script>