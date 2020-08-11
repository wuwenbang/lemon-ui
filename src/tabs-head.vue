<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "LemonTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      console.log(left);
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.transform = `translateX(${left}px)`;
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: #0af;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 0.3s;
  }
  > .action-wrapper {
    margin-left: auto;
  }
}
</style>