  
<template>
  <templateDemos title="基本用法" :code="code">
    <Tabs selected="item1">
      <TabsHead>
        <TabsItem name="item1"> Tab1</TabsItem>
        <TabsItem name="item2"> Tab2</TabsItem>
        <TabsItem name="item3"> Tab3</TabsItem>
        <TabsItem name="item4"> Tab4</TabsItem>
      </TabsHead>
      <TabsBody>
        <TabsPane name="item1"> Tab1 Content</TabsPane>
        <TabsPane name="item2"> Tab2 Content</TabsPane>
        <TabsPane name="item3"> Tab3 Content</TabsPane>
        <TabsPane name="item4"> Tab4 Content</TabsPane>
      </TabsBody>
    </Tabs>
  </templateDemos>

</template>

<script>
import templateDemos from "./template-demos";
import Tabs from "../../../src/Tabs";
import TabsHead from "../../../src/tabs-head";
import TabsItem from "../../../src/tabs-item";
import TabsBody from "../../../src/tabs-body";
import TabsPane from "../../../src/tabs-pane";
import Button from "../../../src/Button";
export default {
  name: "collapse-demos",
  components: {
    Tabs,
    TabsHead,
    TabsItem,
    TabsBody,
    TabsPane,
    templateDemos,
    Button,
  },
  data() {
    return {
      collapseSelected: ["item1"],
      code: `
 <Tabs selected="item1">
      <TabsHead>
        <TabsItem name="item1"> Tab1</TabsItem>
        <TabsItem name="item2"> Tab2</TabsItem>
        <TabsItem name="item3"> Tab3</TabsItem>
        <TabsItem name="item4"> Tab4</TabsItem>
      </TabsHead>
      <TabsBody>
        <TabsPane name="item1"> Tab1 Content</TabsPane>
        <TabsPane name="item2"> Tab2 Content</TabsPane>
        <TabsPane name="item3"> Tab3 Content</TabsPane>
        <TabsPane name="item4"> Tab4 Content</TabsPane>
      </TabsBody>
</Tabs>
`,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>