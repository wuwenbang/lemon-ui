<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "LemonCollapse",
  props: {
    single: {
      type: Boolean,
      defalut: false,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
      single: this.single,
    };
  },
};
</script> 

<style lang="scss" scoped>
$gray: #ccc;
.collapse {
  border: 1px solid $gray;
  border-radius: 4px;
}
</style>