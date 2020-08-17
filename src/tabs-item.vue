<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
        disabled: this.disabled,
      };
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
    }
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit("click", this);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 1.5em;
  display: flex;
  align-items: center;
  &.active {
    color: #3eaf7c;
    font-weight: bold;
  }
  &.disabled {
    color: #ccc;
    cursor: not-allowed;
  }
}
</style>