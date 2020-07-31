<template>

  <button class="lm-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <lm-icon v-if="icon && !loading" :name="icon"></lm-icon>
    <lm-icon v-if="loading" class="loading icon" name="loading"></lm-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
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
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.lm-button {
  height: var(--button-height);
  font-size: var(--font-size);
  line-height: var(--font-size);
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
  .loading {
    animation: spin 2s infinite linear;
  }
}
</style>