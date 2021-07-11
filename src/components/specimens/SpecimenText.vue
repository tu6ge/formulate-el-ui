<template>
  <div class="specimens specimens--text">
    <h2>Text 体系</h2>
    <div class="specimen">
      <h3>颜色</h3>
      <FormulateInput
        label="选择一个颜色?"
        type="color"
        help="挑选你喜欢的"
        validation="required|between:0,10"
      />
    </div>
    <div class="specimen">
      <h3>日期</h3>
      <FormulateInput
        label="选择一天"
        type="date"
        help="挑选你的生日"
      />
    </div>
    <div class="specimen">
      <h3>日期 2021-6-18 之前</h3>
      <FormulateInput
        label="选择一天"
        type="date"
        help="挑选你的生日"
        validation="before:2021-6-18"
      />
    </div>
    <div class="specimen">
      <h3>Datetime-local</h3>
      <FormulateInput
        label="选择一天和时间"
        type="datetime-local"
        help="什么时候聚会呢？"
      />
    </div>
    <div class="specimen">
      <h3>邮箱</h3>
      <FormulateInput
        label="你的邮箱是？"
        type="email"
        placeholder="placeholder@example.com"
        help="请留下你的邮箱"
      />
    </div>
    <div class="specimen">
      <h3>月份</h3>
      <FormulateInput
        label="感兴趣的月份"
        type="month"
        help="是圣诞节吗？"
      />
    </div>
    <div class="specimen">
      <h3>数字</h3>
      <FormulateInput
        label="你现在多大了？"
        type="number"
        placeholder="25"
        help="选择你的年龄"
      />
    </div>
    <div class="specimen">
      <h3>密码</h3>
      <FormulateInput
        label="输入一个密码"
        type="password"
        help="请不要输入123456"
      />
    </div>
    <div class="specimen">
      <h3>搜索</h3>
      <FormulateInput
        label="但是我还是没找到。"
        type="search"
        placeholder="我在找什么..."
        help="我爬过最高的山峰。"
      />
    </div>
    <div class="specimen">
      <h3>电话</h3>
      <FormulateInput
        label="哦，你喜欢迈克和艾克斯吗？"
        type="tel"
        placeholder="我可以给你号码吗..."
        help="我可以拥有吗？"
      />
    </div>
    <div class="specimen">
      <h3>时间</h3>
      <FormulateInput
        label="什么时间吃晚饭"
        type="time"
        placeholder="选择一个时间"
        help="你什么时候把食物塞进自己的嘴里？"
      />
    </div>
    <div class="specimen">
      <h3>文本</h3>
      <FormulateInput
        label="用户名"
        type="text"
        placeholder="用户名"
        help="选择一个用户名"
      />
    </div>
    <div class="specimen">
      <h3>链接</h3>
      <FormulateInput
        label="个人网站"
        type="url"
        placeholder="https://"
        help="你网站的网址是多少？"
      />
    </div>
    <div class="specimen">
      <h3>星期</h3>
      <FormulateInput
        label="我不知道谁会使用这个字段"
        type="week"
        placeholder="选择一个周"
        help="哪个周？"
      />
    </div>
    <div class="specimen">
      <h3>element-ui 举例</h3>
      <FormulateInput
        label="用户名"
        type="el-input"
        value="张三"
        clearable
        help="你想起名叫张三吗"
      />
      <FormulateInput
        label="你喜欢的开源作者是谁"
        type="el-input"
        value="尤雨溪"
        maxlength="10"
        show-word-limit
        help="只能写一个"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isDisabled: false
    }
  }
}
</script>
