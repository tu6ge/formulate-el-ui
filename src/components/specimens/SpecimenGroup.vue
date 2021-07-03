<template>
  <div class="specimens specimens--group">
    <h2>Group classification</h2>
    <div class="specimen">
      <h3>Non-repeatable group</h3>
      <FormulateInput
        type="group"
      >
        <FormulateInput
          label="City"
          type="text"
          name="city"
        />
        <FormulateInput
          label="State"
          type="select"
          :options="{NE: 'Nebraska', MO: 'Missouri', VA: 'Virginia'}"
          placeholder="Select a state"
        />
      </FormulateInput>
    </div>
    <div class="specimen">
      <h3>Simple repeatable group</h3>
      <FormulateInput
        type="group"
        name="foobar"
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
      <h3>Repeatable group</h3>
      <FormulateInput
        name="users"
        label="Invite some new users"
        type="group"
        placeholder="users"
        help="Fields can be grouped"
        :repeatable="true"
        minimum="3"
        :value="[{ name: 'Justin' }, { name: 'Bob' }]"
        add-label="Add new user"
        remove-label="Remove user"
      >
        <FormulateInput
          label="First and last name"
          name="name"
          type="text"
          placeholder="User’s name"
          validation="required"
        />
        <FormulateInput
          name="email"
          label="Email address"
          type="email"
          placeholder="User’s email"
          validation="required|email"
        />
      </FormulateInput>
    </div>
    <div class="specimen2">
      <h3>Repeatable group</h3>
      <FormulateInput
        name="users"
        label="Invite some new users"
        type="group"
        placeholder="users"
        :repeatable="true"
        minimum="3"
        :value="[{ name: 'Justin' }, { name: 'Bob' }]"
        add-label="添加新用户"
        remove-label="Remove user"
      >
        <FormulateInput
          label="用户昵称"
          name="name"
          type="text"
          placeholder="User’s name"
          validation="required"
        />
        <FormulateInput
          name="email"
          label="邮箱"
          type="email"
          placeholder="User’s email"
          validation="required|email"
        />
        <FormulateInput
          label="总统"
          type="radio"
          :options="{trump: 'Trump', obama: 'Obama'}"
          validation="in:trump"
        />
      </FormulateInput>
      <FormulateInput
        label="总统"
        type="checkbox"
        :options="{trump: 'Trump', obama: 'Obama', bush: 'Bush', clinton: 'Clinton'}"
        validation="min:1"
      />
      <FormulateInput
        label="总统"
        type="radio"
        :options="{trump: 'Trump', obama: 'Obama', bush: 'Bush', clinton: 'Clinton'}"
        validation="in:trump"
      />
      <FormulateInput
        label="姓名"
        type="text"
        validation="required"
      />
      <FormulateInput
        label="选择花"
        type="select"
        :options="{vanilla: 'Vanilla', chocolate: 'Chocolate', cherry: 'Cherry', lemon: 'Lemon'}"
        validation="in:vanilla"
        help="You can choose more than one selection by holding command (mac) or option (windows)."
      />
      <FormulateInput
        label="联系电话"
        type="text"
        validation="mobile"
        help="请输入一个手机号码"
      />
      <FormulateInput
        label="身份证"
        type="text"
        validation="idcard"
        help="请输入一个身份证号码"
      />
      <FormulateInput
        label="个性签名"
        type="el-input"
        el-type="textarea"
        help="个性签名"
      />
      <FormulateInput type="submit" label="提交"></FormulateInput>
    </div>
  </div>
</template>
