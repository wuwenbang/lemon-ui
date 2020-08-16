<template>
  <div>
    <lm-button>默认按钮</lm-button>
    <lm-button icon="settings">设置按钮</lm-button>
    <lm-button :loading="isLoading" @click="isLoading=!isLoading">点击加载</lm-button>
    <lm-button disabled>禁用按钮</lm-button>
  </div>
</template>

<script>
import Button from "../../../src/button";
export default {
  components: {
    "lm-button": Button,
  },
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
