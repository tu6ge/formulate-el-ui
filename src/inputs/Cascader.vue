<template>
  <div
    :class="context.classes.element"
    :data-type="context.type"
  >
    <el-cascader 
      v-model="context.model"
      v-bind="context.slotProps.component"
      :options="context.options"
      @change="context.rootEmit('change', $event)"
      @expand-change="context.rootEmit('expand-change', $event)"
      @visible-change="context.rootEmit('visible-change', $event)"
      @blur="context.blurHandler"
      @focus="context.rootEmit('focus', $event)"
    />
  </div>
</template>
<script>
import {Cascader} from 'element-ui'
export default {
  name:'fe-cascader',
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  components: {
    [Cascader.name]: Cascader
  }
}
</script>