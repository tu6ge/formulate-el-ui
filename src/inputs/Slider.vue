<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-slider
      v-model="context.model"
      v-bind="context.slotProps.component"
    />
  </div>
</template>
<script>
import {Slider} from 'element-ui'

export default {
  name:'fe-slider',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [Slider.name]: Slider
  }
}
</script>