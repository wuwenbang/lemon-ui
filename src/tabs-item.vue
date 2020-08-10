<template>
  <div class="tabs-item" @click="updateSelected" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LemonTabsItem",
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  inject: ["eventBus"],
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
  methods: {
    updateSelected() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  border: 1px solid gray;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 1em;
  display: flex;
  align-items: center;
  &.active {
    background: gray;
  }
}
</style>