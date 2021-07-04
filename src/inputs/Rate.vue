<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-rate
      v-model="context.model"
      v-bind="context.slotProps.component"
    />
  </div>
</template>
<script>
import {Rate} from 'element-ui'

export default {
  name:'fe-rate',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [Rate.name]: Rate
  }
}
</script>