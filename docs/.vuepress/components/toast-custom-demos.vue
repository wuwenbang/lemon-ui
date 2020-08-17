<template>
  <templateDemos title="自定义关闭" :code=" code">
    <Button @click="showToast1">自定义关闭文字</Button>
    <Button @click="showToast2">关闭后执行回调函数</Button>
    <Button @click="showToast3">设置自动关闭时间</Button>
  </templateDemos>
</template>

<script>
import Toast from "../../../src/toastPlugin.js";
import templateDemos from "./template-demos";
import Button from "../../../src/Button";
import Vue from "vue";
Vue.use(Toast);
export default {
  name: "collapse-demos",
  components: {
    templateDemos,
    Button,
  },
  mounted() {},
  methods: {
    showToast1() {
      this.$toast("自定义关闭文字", {
        isCloseButton: true,
        closeButton: { text: "点击我关闭Toast" },
      });
    },
    showToast2() {
      this.$toast("关闭后执行回调函数", {
        isCloseButton: true,
        closeButton: {
          text: "关闭后执行 alert('已经关闭了')",
          callback: () => {
            window.alert("已经关闭了");
          },
        },
      });
    },
    showToast3() {
      this.$toast("2s后自动关闭", {
        isCloseButton: true,
        autoClose: 2,
      });
    },
  },
  data() {
    return {
      code: `
this.$toast('自定义关闭文字', {
  isCloseButton: true,
  closeButton: { text: "点击我关闭Toast" },
});
this.$toast('关闭后执行回调函数', {
  isCloseButton: true,
  closeButton: {
    text: "关闭后执行 alert('已经关闭了')",
    callback: () => {
      window.alert("已经关闭了");
    },
  },
});
this.$toast("2s后自动关闭", {
  isCloseButton: true,
  autoClose: 2,
});
 `,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>