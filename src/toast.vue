<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
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
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].indexOf(value) >= 0;
      },
    },
  },
  mounted() {
    this.delayClose();
    this.updateStyle();
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true,
      };
    },
  },
  methods: {
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.wrapper.getBoundingClientRect().height + "px";
      });
    },
    delayClose() {
      setTimeout(() => {
        if (this.autoClose) {
          this.close();
        }
      }, this.autoCloseDelay * 1000);
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    },
  },
};
</script> 

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.toast {
  animation: fade-in 0.5s;
  font-size: 14px;
  min-height: 40px;
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
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    top: 100%;
    transform: translate(-50%, -100%);
  }
  .message {
    padding: 8px 0;
    max-width: 400px;
    word-wrap: break-word;
  }
  .line {
    margin-left: 16px;
    height: 100%;
    border-left: 1px solid #666;
  }
  .close {
    flex-shrink: 0;
    padding-left: 16px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>