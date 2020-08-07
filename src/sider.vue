<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false" style="padding: 0 5px">隐藏</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LemonSider",
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style>