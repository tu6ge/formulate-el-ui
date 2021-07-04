<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-color-picker
      v-model="context.model"
      v-bind="context.slotProps.component"
      @active-change="context.rootEmit('active-change', $event)"
    />
  </div>
</template>
<script>
import {ColorPicker} from 'element-ui'

export default {
  name:'fe-rate',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [ColorPicker.name]: ColorPicker
  }
}
</script>