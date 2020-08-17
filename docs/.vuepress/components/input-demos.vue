<template>
  <templateDemos title="基本用法" :code="code">
    <Input value="默认输入框"></Input>
    <Input value="禁用输入框" disabled></Input>
    <Input value="只读输入框" readonly></Input>
    <Input value="错误信息" error="错误信息"></Input>
  </templateDemos>
</template> 

<script>
import Input from "../../../src/input";
import templateDemos from "./template-demos";

export default {
  components: {
    Input,
    templateDemos,
  },
  data() {
    return {
      code: `
<Input value="默认输入框"></Input>
<Input value="禁用输入框" disabled></Input>
<Input value="只读输入框" readonly></Input>
<Input value="错误信息" error="错误信息"></Input>
`,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 5px 10px 0;
}
</style>
