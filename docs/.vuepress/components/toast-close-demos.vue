<template>
  <templateDemos title="手动关闭" :code=" code">
    <Button @click="showToast1">顶部信息</Button>
    <Button @click="showToast2">中部信息</Button>
    <Button @click="showToast3">底部信息</Button>
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
      this.$toast("顶部信息", { isCloseButton: true });
    },
    showToast2() {
      this.$toast("中部信息", { position: "middle", isCloseButton: true });
    },
    showToast3() {
      this.$toast("底部信息", { position: "bottom", isCloseButton: true });
    },
  },
  data() {
    return {
      code: `
this.$toast('顶部信息', { isCloseButton: true });
this.$toast('中部信息', { position: "middle", isCloseButton: true });
this.$toast('底部信息', { position: "bottom", isCloseButton: true });
 `,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>