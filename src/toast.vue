<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
Vue.prototype.$toast = function () {
  console.log("我是 toast");
};
export default {
  name: "LemonToast",
};
</script> 

<style lang="scss" scoped>
.toast {
  font-size: 14px;
  height: 40px;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  border-radius: 4px;
  transform: translateX(-50%);
  color: white;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
</style>