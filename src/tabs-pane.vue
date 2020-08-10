<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LemonTabPane",
  inject: ["eventBus"],
  created() {},
};
</script>

<style lang="scss" scoped>
</style>