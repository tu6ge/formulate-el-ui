<template>
  <div class="specimens specimens--group">
    <h2>分组体系</h2>
    <div class="specimen">
      <h3>一个不可重复的分组</h3>
      <FormulateInput
        type="group"
      >
        <FormulateInput
          label="城市"
          type="text"
          name="city"
        />
        <FormulateInput
          label="区/县"
          type="select"
          :options="{NE: 'Nebraska', MO: 'Missouri', VA: 'Virginia'}"
          placeholder="请选择一个区县"
        />
      </FormulateInput>
    </div>
    <div class="specimen">
      <h3>简单的可重复分组</h3>
      <FormulateInput
        type="group"
        name="foobar"
        add-label="尝试着添加一条"
        :repeatable="true"
      >
        <div class="wrap">
          <FormulateInput
            type="text"
            name="name"
          />
        </div>
      </FormulateInput>
    </div>
    <div class="specimen">
      <h3>可重复分组</h3>
      <FormulateInput
        name="users"
        label="邀请一些新用户"
        type="group"
        placeholder="users"
        :repeatable="true"
        minimum="3"
        :value="[{ name: 'Justin' }, { name: 'Bob' }]"
        add-label="添加新用户"
        remove-label="删除用户"
      >
        <FormulateInput
          label="姓名"
          name="name"
          type="text"
          placeholder="用户的姓名"
          validation="required"
          validation-name="姓名"
        />
        <FormulateInput
          name="email"
          label="邮箱"
          type="email"
          placeholder="用户邮箱"
          validation="required|email"
          validation-name="邮箱"
        />
      </FormulateInput>
    </div>
  </div>
</template>
