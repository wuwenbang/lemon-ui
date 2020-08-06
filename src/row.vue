<template>
  <div class="row" :style="rowStyle" :class="`align-${position}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LemonRow",
  props: {
    gutter: {
      type: [Number, String],
    },
    position: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      },
    },
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: this.gutter / 2 + "px",
        marginLeft: this.gutter / 2 + "px",
      };
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>