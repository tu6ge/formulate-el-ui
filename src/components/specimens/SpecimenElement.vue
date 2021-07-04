<template>
  <div class="specimens specimens--group">
    <h2>element UI 演示</h2>
    <h2>Input 输入框</h2>
    <div class="specimen">
      <h3>普通</h3>
      <FormulateInput
        label="个性签名"
        type="el-input"
        value="你好，Element-UI"
        help="个性签名"
      />
    </div>
    <div class="specimen">
      <h3>限制长度</h3>
      <FormulateInput
        label="个性签名"
        type="el-input"
        maxlength="5"
        show-word-limit
        help="个性签名"
      />
    </div>
    <div class="specimen">
      <h3>可清空</h3>
      <FormulateInput
        label="个性签名"
        type="el-input"
        clearable
        help="个性签名"
      />
    </div>
    <div class="specimen">
      <h3>密码框</h3>
      <FormulateInput
        label="密码"
        type="el-input"
        el-type="password"
        show-password
        help="请输入密码"
      />
    </div>
    <div class="specimen">
      <h3>多行文本框</h3>
      <FormulateInput
        label="个性签名"
        type="el-input"
        el-type="textarea"
        help="个性签名"
      />
    </div>
    <div class="specimen">
      <h3>多行文本框 带行数</h3>
      <FormulateInput
        label="个性签名"
        type="el-input"
        el-type="textarea"
        rows="3"
        help="个性签名"
      />
    </div>
    <div class="specimen">
      <h3>多行文本框 自定义高度</h3>
      <FormulateInput
        label="个性签名"
        type="el-input"
        el-type="textarea"
        autosize
        help="个性签名"
      />
    </div>
    <h2>计数器</h2>
    <div class="specimen">
      <h3>普通</h3>
      <FormulateInput
        label="数量"
        :max="5"
        type="el-input-number"
      />
    </div>
    <div class="specimen">
      <h3>步数</h3>
      <FormulateInput
        label="数量"
        type="el-input-number"
        :step="2"
      />
    </div>
    <div class="specimen">
      <h3>严格步数</h3>
      <FormulateInput
        label="数量"
        type="el-input-number"
        :step="2"
        step-strictly
      />
    </div>
    <div class="specimen">
      <h3>精度</h3>
      <FormulateInput
        label="数量"
        type="el-input-number"
        :precision="2"
        :step="0.1"
        :max="10"
      />
    </div>
    <h2>switch 开关</h2>
    <div class="specimen">
      <h3>普通</h3>
      <FormulateInput
        label="你是否喜欢"
        type="el-switch"
        v-model="switchValue"
      />
    </div>
    <div class="specimen">
      <h3>文字描述</h3>
      <FormulateInput
        label="你是否喜欢"
        type="el-switch"
        v-model="switchValue"
        active-text="喜欢"
        inactive-text="讨厌"
      />
    </div>
    <div class="specimen">
      <h3>颜色</h3>
      <FormulateInput
        label="你是否喜欢"
        type="el-switch"
        v-model="switchValue"
        active-text="喜欢"
        inactive-text="讨厌"
        active-color="#13ce66"
        inactive-color="#ff4949"
      />
    </div>
    <div class="specimen">
      <h3>扩展类型</h3>
      <span>由于 formulate 不支持布尔类型，现在选中的时候，返回 1，反之返回 0，所以不支持扩展类型，开发者可以在表单提交后的事件中再做处理</span>
    </div>
    <h2>Slider 滑块</h2>
    <div class="specimen preview--el-slider">
      <h3>默认</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue1"
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>自定义初始值</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue2"
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>隐藏 Tooltip</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue2"
        :show-tooltip="false"
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>格式化 Tooltip</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue2"
        :format-tooltip="formatTooltip"
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>离散值</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue3"
        :step="10"
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>离散值 显示间断点</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue3"
        :step="10"
        show-stops
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>带输入框</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue4"
        show-input
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>带输入框 不显示控制按钮</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue4"
        show-input
        :show-input-controls="false"
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>选择范围</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue5"
        range
        show-stops
        :max="10"
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>竖向模式</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue6"
        vertical
        height="200px"
      />
    </div>
    <div class="specimen preview--el-slider">
      <h3>展示标记</h3>
      <FormulateInput
        label="分数"
        type="el-slider"
        v-model="sliderValue7"
        range
        :marks="sliderMarks"
      />
    </div>
    <h2>Rate 评分</h2>
    <div class="specimen">
      <h3>默认</h3>
      <FormulateInput
        label="分数"
        type="el-rate"
      />
    </div>
    <div class="specimen">
      <h3>区分颜色</h3>
      <FormulateInput
        label="分数"
        type="el-rate"
        :colors="rateColors"
      />
    </div>
    <div class="specimen">
      <h3>辅助文字</h3>
      <FormulateInput
        label="分数"
        type="el-rate"
        show-text
      />
    </div>
    <div class="specimen">
      <h3>显示分数</h3>
      <FormulateInput
        label="分数"
        type="el-rate"
        show-score
      />
    </div>
    <h2>ColorPicker 颜色选择器</h2>
    <div class="specimen ">
      <h3>有默认值</h3>
      <FormulateInput
        label="背景色"
        type="el-color-picker"
        v-model="colorValue"
      />
    </div>
    <div class="specimen ">
      <h3>无默认值</h3>
      <FormulateInput
        label="背景色"
        type="el-color-picker"
      />
    </div>
    <div class="specimen ">
      <h3>选择透明度</h3>
      <FormulateInput
        label="背景色"
        type="el-color-picker"
        show-alpha
      />
    </div>
    <div class="specimen ">
      <h3>预定义颜色</h3>
      <FormulateInput
        label="背景色"
        type="el-color-picker"
        show-alpha
        :predefine="predefineColors"
      />
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      switchValue: 1,
      sliderValue1: 0,
      sliderValue2: 33,
      sliderValue3: 10,
      sliderValue4: 10,
      sliderValue5: [4, 8],
      sliderValue6: 50,
      sliderValue7: [30, 60],
      sliderMarks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#1989FA'
          },
          label: this.$createElement('strong', '50%')
        }
      },
      rateColors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      colorValue:'#409EFF',
      predefineColors:[
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    }
  }
}
</script>

