<template>

  <button class="lm-button" :class="{[`icon-${iconPosition}`]:true}">
    <lm-icon v-if="icon" :name="icon"></lm-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      // 属性检查器
      validator(value) {
        return value == "left" || value == "right";
      },
    },
  },
};
</script>

<style lang="scss">
.lm-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
  .content {
    order: 2;
  }
  .icon {
    order: 1;
    margin-right: 4px;
  }
  &.icon-right {
    .content {
      order: 1;
    }
    .icon {
      order: 2;
      margin-left: 4px;
      margin-right: 0;
    }
  }
}
</style>