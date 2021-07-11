<template>
  <div class="specimens specimens--text">
    <h2>滑块体系</h2>
    <div class="specimen specimen--single">
      <h3>带范围的</h3>
      <FormulateInput
        label="我们应该把它调到多远？"
        type="range"
        min="0"
        max="11"
        :show-value="true"
        help="每当我们被允许再次举办派对时......"
      />
    </div>
  </div>
</template>
