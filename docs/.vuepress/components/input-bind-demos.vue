
<template>
  <templateDemos title="双向绑定" :code="code">
    <Input v-model="value"></Input>
    <div>{{value}}</div>
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
      value: "HelloWorld",
      code: `
<Input v-model="value"></Input>
<div>{{value}}</div>

data:{value: "HelloWorld"}
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
