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
    />
  </div>
</template>
<script>
import {Select} from 'element-ui'

export default {
  name:'fe-select',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [Select.name]: Select
  }
}
</script>