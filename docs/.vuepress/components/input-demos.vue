<template>
  <div class="wrapper">
    <div>默认输入框：
      <lm-input></lm-input>
    </div>
    <div>禁用输入框：
      <lm-input disabled></lm-input>
    </div>
    <div>只读输入框：
      <lm-input readonly>只读信息</lm-input>
    </div>
    <div>输入错误信息：
      <lm-input error="错误信息"></lm-input>
    </div>
  </div>
</template> 

<script>
import Input from "../../../src/input";
export default {
  components: {
    "lm-input": Input,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  > div {
    margin: 4px 0;
  }
}
</style>
