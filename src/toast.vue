<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="closeWrapper" v-if="isCloseButton">
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
          {{closeButton.text}}
        </span>
      </div>
    </div>
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
      type: [Boolean, Number],
      default: 5,
      validator(value) {
        return value === false || typeof value === "number";
      },
    },
    isCloseButton: {
      type: Boolean,
      default() {
        return false;
      },
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
        if (this.$refs.line) {
          this.$refs.line.style.height =
            this.$refs.toast.getBoundingClientRect().height + "px";
        }
      });
    },
    delayClose() {
      setTimeout(() => {
        if (this.autoClose) {
          this.close();
        }
      }, this.autoClose * 1000);
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
@keyframes slide-down {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
.wrapper {
  z-index: 30;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      animation: slide-down 1s;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: fade-in 1s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up 1s;
    }
  }
}
.toast {
  font-size: 14px;
  min-height: 40px;
  line-height: 1.8;
  top: 0;
  border-radius: 4px;
  color: white;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;

  .message {
    padding: 8px 0;
    max-width: 400px;
    word-wrap: break-word;
  }
  .closeWrapper {
    display: flex;
    align-items: center;
    .line {
      margin-left: 16px;
      height: 100%;
      border-left: 1px solid #666;
    }
    .close {
      flex-shrink: 0;
      padding-left: 16px;
      display: inline-block;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>