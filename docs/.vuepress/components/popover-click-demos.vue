<template>
  <templateDemos title="点击激活" :code="code">
    <Popover trigger="click" position="top">
      <div slot="content">
        这是一段内容
      </div>
      <Button>点击上弹</Button>
    </Popover>
    <Popover trigger="click" position="bottom">
      <div slot="content">
        这是一段内容
      </div>
      <Button>点击下弹</Button>
    </Popover>
    <Popover trigger="click" position="left">
      <div slot="content">
        这是一段内容
      </div>
      <Button>点击左弹</Button>
    </Popover>
    <Popover trigger="click" position="right">
      <div slot="content">
        这是一段内容
      </div>
      <Button>点击右弹</Button>
    </Popover>
  </templateDemos>

</template>

<script>
import Popover from "../../../src/Popover";
import templateDemos from "./template-demos";
import Button from "../../../src/Button";
export default {
  name: "collapse-demos",
  components: {
    templateDemos,
    Button,
    Popover,
  },
  mounted() {},
  methods: {},
  data() {
    return {
      code: `
<Popover trigger="click" position="top">
  <div slot="content">
    这是一段内容
  </div>
  <Button>点击上弹</Button>
</Popover>
<Popover trigger="click" position="bottom">
  <div slot="content">
    这是一段内容
  </div>
  <Button>点击下弹</Button>
</Popover>
<Popover trigger="click" position="left">
  <div slot="content">
    这是一段内容
  </div>
  <Button>点击左弹</Button>
</Popover>
<Popover trigger="click" position="right">
  <div slot="content">
    这是一段内容
  </div>
  <Button>点击右弹</Button>
</Popover>
                `,
    };
  },
};
</script>

<style lang="scss" scoped>
.popover {
  margin-right: 8px;
}
</style>