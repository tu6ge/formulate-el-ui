<template>
  <label
    :id="`${context.id}_label`"
    :class="classes"
    :for="context.id"
    v-text="context.label"
  />
</template>

<script>
export default {
  props: {
    context: {
      type: Object,
      required: true
    },
    requiredTip: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    hasRequired() {
      if(this.requiredTip==false){
        return false
      }

      if(this.context.rules.length == 0){
        return false
      }
      let result = this.context.rules.find(res=>{
        return res.ruleName == 'required'
      })
      return !!result
    },
    classes() {
      let classes = this.context.classes.label
      if(this.hasRequired){
        classes.push('formulate-input-label--required')
      }
      return classes
    }
  }
}
</script>
