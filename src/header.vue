<template>
  <div class="header">
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: "LemonHeader",
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
</style>