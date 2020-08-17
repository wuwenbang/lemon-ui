<template>
  <templateDemos title="悬浮激活" :code="code">
    <Popover trigger="hover" position="top">
      <div slot="content">
        这是一段内容
      </div>
      <Button>悬浮上弹</Button>
    </Popover>
    <Popover trigger="hover" position="bottom">
      <div slot="content">
        这是一段内容
      </div>
      <Button>悬浮下弹</Button>
    </Popover>
    <Popover trigger="hover" position="left">
      <div slot="content">
        这是一段内容
      </div>
      <Button>悬浮左弹</Button>
    </Popover>
    <Popover trigger="hover" position="right">
      <div slot="content">
        这是一段内容
      </div>
      <Button>悬浮右弹</Button>
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
<Popover trigger="hover" position="top">
  <div slot="content">
    这是一段内容
  </div>
  <Button>悬浮上弹</Button>
</Popover>
<Popover trigger="hover" position="bottom">
  <div slot="content">
    这是一段内容
  </div>
  <Button>悬浮下弹</Button>
</Popover>
<Popover trigger="hover" position="left">
  <div slot="content">
    这是一段内容
  </div>
  <Button>悬浮左弹</Button>
</Popover>
<Popover trigger="hover" position="right">
  <div slot="content">
    这是一段内容
  </div>
  <Button>悬浮右弹</Button>
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