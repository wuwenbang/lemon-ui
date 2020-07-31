<template>
  <div class="lm-button-group">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lm-button-group {
  vertical-align: middle;
  display: inline-flex;

  > .lm-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>