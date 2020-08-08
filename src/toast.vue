<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
import Vue from "vue";
Vue.prototype.$toast = function () {
  console.log("我是 toast");
};
//构造组件的选项
export default {
  name: "LemonToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 50,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: (toast) => {
            toast.close();
          },
        };
      },
    },
  },
  mounted() {
    setTimeout(() => {
      if (this.autoClose) {
        this.close();
      }
    }, this.autoCloseDelay * 1000);
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      this.closeButton.callback();
    },
  },
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
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .line {
    margin-left: 16px;
    padding-right: 16px;
    height: 100%;
    border-left: 1px solid #666;
  }
  .close:hover {
    cursor: pointer;
  }
}
</style>