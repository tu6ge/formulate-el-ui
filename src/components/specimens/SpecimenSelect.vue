<template>
  <div class="specimens specimens--text">
    <h2>下拉选择体系</h2>
    <div class="specimen">
      <h3>下拉选择器</h3>
      <FormulateInput
        label="哪个星球最热呢？"
        type="select"
        :options="{moon: '月球', mars: '火星', venus: '进行', mercury: '水星', sun: '太阳'}"
        help="星球表面的平均温度"
      />
      <FormulateInput
        label="谁制造了最好的火箭呢？"
        type="select"
        :options="['SpaceX', 'United Launch Alliance', 'Avio', 'Aerojet Rocketdyne', 'Russians']"
        help="选择你最喜欢的"
      />
    </div>
    <div class="specimen">
      <h3>带 placeholder 的下拉选择器</h3>
      <FormulateInput
        label="哪个星球最热呢？"
        type="select"
        placeholder="选择一个星球"
        :options="{moon: '月球', mars: '火星', venus: '进行', mercury: '水星', sun: '太阳'}"
        help="星球表面的平均温度"
      />
    </div>
    <div class="specimen">
      <h3>带多选功能的下拉选择器</h3>
      <FormulateInput
        label="在访问一个炎热的星球时，您最喜欢的冰淇淋口味是什么？"
        type="select"
        multiple
        size="3"
        :options="{vanilla: '香草', chocolate: '巧克力', cherry: '樱桃', lemon: '柠檬'}"
        help="您可以通过按住 command (mac) 或 ctrl (windows) 来选择多个选项。"
      />
    </div>
  </div>
</template>
