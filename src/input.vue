<template>
  <!-- 如果 error 存在，添加 class error -->
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly" @change="$emit('change',$event.target.value) " @input="$emit('input',$event.target.value) " @focus="$emit('focus',$event.target.value) " @blur="$emit('blur',$event.target.value) ">
    <!-- $emit 参数1：事件名，参数2：传出的第一个参数，参数3：传出的第二个参数 -->
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
$border-color-focus: #888;
@keyframes primary-shadow {
  to {
    box-shadow: lighten($border-color-focus, 36%) 0px 0px 0px 2px;
  }
}
.wrapper {
  display: inline-flex;
  font-size: 14px;
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
      border-color: #999;
    }
    &:focus {
      outline: none;
      animation: primary-shadow 250ms linear;
      animation-fill-mode: forwards;
      /* box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5); */
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
    line-height: 34px;
  }
}
</style>