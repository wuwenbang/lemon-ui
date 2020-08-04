<template>
  <!-- 如果 error 存在，添加 class error -->
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon name="error" class="errorIcon"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  components: { Icon },
  name: "LemonInput",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$red: #f1453d;
.wrapper {
  display: inline-flex;
  font-size: 12px;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    line-height: 32px;
    height: 32px;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: #666;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .errorMessage {
    color: $red;
  }
}
</style>