<template>

  <button class="lm-button test" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <lm-icon v-if="icon && !loading" :name="icon"></lm-icon>
    <lm-icon v-if="loading" class="loading icon" name="loading"></lm-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Vue from "vue";
import Icon from "./icon";
Vue.component("lm-icon", Icon);
export default {
  name: "LemonButton",
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

<style lang="scss" scope>
$button-height: 32px;
$font-size: 13.333px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #d9d9d9;
$border-color-hover: #57ca97;
@keyframes primary-shadow {
  to {
    box-shadow: lighten($border-color-hover, 36%) 0px 0px 0px 2px;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.lm-button {
  height: $button-height;
  font-size: $font-size;
  line-height: $font-size;
  padding: 1px 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
    cursor: pointer;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
    animation: primary-shadow 250ms linear;
    animation-fill-mode: forwards;
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