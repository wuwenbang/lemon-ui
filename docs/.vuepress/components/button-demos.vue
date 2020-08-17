<template>
  <templateDemos title="基本用法" :code="code">
    <Button>默认按钮</Button>
    <Button icon="settings">设置按钮</Button>
    <Button :loading="isLoading" @click="isLoading=!isLoading">点击加载</Button>
    <Button disabled>禁用按钮</Button>
  </templateDemos>

</template>

<script>
import Button from "../../../src/Button";
import templateDemos from "./template-demos";
export default {
  name: "button-simple-demos",
  components: {
    Button,
    templateDemos,
  },
  data() {
    return {
      isLoading: false,
      code: `
<Button>默认按钮</Button>
<Button icon="settings">只读按钮</Button>
<Button :loading="isLoading" @click="isLoading=!isLoading">点击加载</Button>
<Button disabled>禁用按钮</Button>
`,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>