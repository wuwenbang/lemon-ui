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
    selected: {
      type: String,
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
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
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