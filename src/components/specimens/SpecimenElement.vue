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
        label="数量"
        :max="5"
        type="el-input-number"
      />
    </div>
  </div>
</template>
