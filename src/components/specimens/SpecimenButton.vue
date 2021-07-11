<template>
  <div class="specimens">
    <h2>按钮体系</h2>
    <div class="specimen">
      <h3>Button</h3>
      <FormulateInput
        label="点击"
        type="button"
      />
    </div>
    <div class="specimen">
      <h3>Submit</h3>
      <FormulateInput
        label="提交"
        type="submit"
      />
    </div>
    <div class="specimen">
      <h3>不可点击的 submit</h3>
      <FormulateInput
        disabled
        label="Submit me"
        type="submit"
      />
    </div>
  </div>
</template>
