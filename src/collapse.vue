<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LemonCollapse",
};
</script> 

<style lang="scss" scoped>
$gray: #ccc;
.collapse {
  border: 1px solid $gray;
  border-radius: 4px;
}
</style>