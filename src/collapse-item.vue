  
<template>
  <div class="collapseItem">
    <div class="title" @click="toggle" :data-name="name">
      <span>{{title}}</span>
      <Icon :name="direction"></Icon>
    </div>
    <div class="content" ref="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  components: {
    Icon,
  },
  name: "LemonCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    direction() {
      return this.open ? "down" : "right";
    },
  },
  data() {
    return {
      open: false,
    };
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:selected", (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true;
        } else {
          this.open = false;
        }
      });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus &&
          this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    },
  },
};
</script>

<style scoped lang="scss">
$grey: #d9d9d9;
$border-radius: 4px;
.collapseItem {
  transition: all 1s;
  border-bottom: 1px solid $grey;
  padding: 8px 16px;
  .title {
    margin-top: 8px;
    padding-bottom: 8px;
    /* margin-bottom: 8px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
  }
  .content {
    padding: 1em 0;
  }
  &:last-child {
    border-bottom: none;
  }
}
</style>