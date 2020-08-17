<template>
  <div class="tabs-head" ref="head">
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
      let headLeft = this.$refs.head.getBoundingClientRect().left;
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.transform = `translateX(${left - headLeft}px)`;
    });
  },
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;

.tabs-head {
  border-bottom: 1px solid #ddd;
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid #3eaf7c;
    transition: all 0.15s;
  }
  > .action-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>