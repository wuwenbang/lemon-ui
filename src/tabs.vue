<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "LemonTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn(
            "tabs的子组件应该是tabs-head和tabs-body，但是你的tabs没有子组件。"
          );
      }
    },
    selectTab() {
      this.$children.forEach((head) => {
        if (head.$options.name === "LemonTabsHead") {
          head.$children.forEach((item) => {
            if (
              item.$options.name === "LemonTabsItem" &&
              item.name === this.selected
            ) {
              this.eventBus.$emit("update:selected", this.selected, item);
            }
          });
        }
      });
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
    };
  },
  mounted() {
    this.checkChildren();
    this.selectTab();
  },
};
</script>

<style lang="scss" scoped>
</style>