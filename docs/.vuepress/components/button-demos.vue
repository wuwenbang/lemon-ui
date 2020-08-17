<template>
  <templateDemos title="基本用法" :code="code">
    <div class="wrapper">
      <Button>默认按钮</Button>
      <Button disabled>禁用按钮</Button>
      <Button :loading="isLoading" @click="isLoading=!isLoading">点击加载</Button>
    </div>
    <div class="wrapper">
      <Button icon="shezhi">设置按钮</Button>
      <Button icon="dianzan">点赞按钮</Button>
      <Button icon="shoucang">收藏按钮</Button>
      <Button icon="shanchu">删除按钮</Button>
    </div>

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
<div>
  <Button>默认按钮</Button>
  <Button disabled>禁用按钮</Button>
  <Button :loading="isLoading" @click="isLoading=!isLoading">点击加载</Button>
</div>
<div>
  <Button icon="shezhi">设置按钮</Button>
  <Button icon="dianzan">点赞按钮</Button>
  <Button icon="shoucang">收藏按钮</Button>
  <Button icon="shanchu">删除按钮</Button>
</div>
`,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 10px;
}
</style>