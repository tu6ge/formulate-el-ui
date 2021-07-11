<template>
  <div class="specimens specimens--text">
    <h2>Box 体系</h2>
    <div class="specimen">
      <h3>单一 Checkbox</h3>
      <FormulateInput
        type="checkbox"
        label="你喜欢 vueformulate 吗？"
      />
    </div>
    <div class="specimen">
      <h3>不可点击的 Checkbox</h3>
      <FormulateInput
        disabled
        type="checkbox"
        label="你喜欢 vueformulate 吗？"
      />
    </div>
    <div class="specimen">
      <h3>多个 checkbox</h3>
      <FormulateInput
        type="checkbox"
        label="你最喜欢哪种的水果？"
        :options="{apple: '苹果', banana: '香蕉', orange: '橘子', watermelon: '西瓜'}"
        help="可以多选，也可以单选"
      />
    </div>
    <div class="specimen">
      <h3>多可不可点击的 checkbox</h3>
      <FormulateInput
        type="checkbox"
        disabled
        :value="['watermelon']"
        label="你最喜欢哪种的水果？"
        :options="{apple: '苹果', banana: '香蕉', orange: '橘子', watermelon: '西瓜'}"
        help="可以多选，也可以单选"
      />
    </div>
    <div class="specimen">
      <h3>单选框</h3>
      <FormulateInput
        type="radio"
        label="你想参观什么沉重的物体？"
        :options="{moon: '月球', mars: '火星', venus: '进行', mercury: '水星', sun: '太阳'}"
      />
    </div>
    <div class="specimen">
      <h3>单选不可点击的单选框</h3>
      <FormulateInput
        disabled
        value="moon"
        type="radio"
        label="你想参观什么沉重的物体？"
        :options="{moon: '月球', mars: '火星', venus: '进行', mercury: '水星', sun: '太阳'}"
      />
    </div>
  </div>
</template>
