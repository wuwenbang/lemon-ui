<template>
  <templateDemos title="常见页面布局" :code="code">
    <h5>上下布局</h5>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
    </Layout>

    <h5>上中下布局</h5>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <h5>左右布局</h5>
    <Layout>
      <Sider style="width:100px">Sider</Sider>
      <Content>Content</Content>
    </Layout>
    <h5>左中右布局</h5>
    <Layout>
      <Sider style="width:100px">Sider</Sider>
      <Layout>
        <Content>Content</Content>
        <Sider style="width:100px">Sider</Sider>
      </Layout>
    </Layout>

    <h5>组合布局1</h5>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider style="width:100px">Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
    <h5>组合布局2</h5>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider style="width:100px">Sider</Sider>
        <Layout>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
    <h5>组合布局3</h5>
    <Layout>
      <Sider style="width:100px">Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </templateDemos>

</template>

<script>
import templateDemos from "./template-demos";
import Layout from "../../../src/Layout";
import Header from "../../../src/Header";
import Content from "../../../src/Content";
import Sider from "../../../src/Sider";
import Footer from "../../../src/Footer";
export default {
  name: "button-simple-demos",
  components: {
    Layout,
    Header,
    Content,
    Sider,
    Footer,
    templateDemos,
  },
  data() {
    return {
      code: `
<h5>上下布局</h5>
<Layout>
    <Header>Header</Header>
    <Content>Content</Content>
</Layout>

<h5>上中下布局</h5>
<Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
</Layout>

<h5>左右布局</h5>
<Layout>
    <Sider style="width:100px">Sider</Sider>
    <Content>Content</Content>
</Layout>
<h5>左中右布局</h5>
<Layout>
    <Sider style="width:100px">Sider</Sider>
    <Layout>
    <Content>Content</Content>
    <Sider style="width:100px">Sider</Sider>
    </Layout>
</Layout>

<h5>组合布局1</h5>
<Layout>
    <Header>Header</Header>
    <Layout>
    <Sider style="width:100px">Sider</Sider>
    <Content>Content</Content>
    </Layout>
</Layout>
<h5>组合布局2</h5>

<Layout>
    <Header>Header</Header>
    <Layout>
    <Sider style="width:100px">Sider</Sider>
    <Layout>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
    </Layout>
</Layout>
<h5>组合布局3</h5>
<Layout>
    <Sider style="width:100px">Sider</Sider>
    <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
    </Layout>
</Layout>

<style lang="scss" scoped>
.header,
.footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.sider {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  /* width: 100px; */
}
.content {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .container {
  margin-bottom: 40px;
}
.container:nth-child(5) .aside,
.container:nth-child(6) .aside {
  line-height: 260px;
}
</style>
`,
    };
  },
};
</script>

<style lang="scss" scoped>
.header,
.footer {
  background-color: hsl(150, 50%, 50%);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.sider {
  background-color: hsl(150, 50%, 65%);
  color: #333;
  text-align: center;
  line-height: 200px;
  /* width: 100px; */
}
.content {
  background-color: hsl(150, 50%, 80%);
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .container {
  margin-bottom: 40px;
}
.container:nth-child(5) .aside,
.container:nth-child(6) .aside {
  line-height: 260px;
}
</style>