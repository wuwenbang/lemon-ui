<template>
  <templateDemos title="分栏间隔" :code="code">
    <div class="row-bg">
      <Row :gutter="10">
        <Col :span="8">
        <div class="content bg-purple"></div>
        </Col>
        <Col :span="8">
        <div class="content bg-purple-light"></div>
        </Col>
        <Col :span="8">
        <div class="content bg-purple"></div>
        </Col>
      </Row>
      <Row :gutter="10">
        <Col :span="6">
        <div class="content bg-purple"></div>
        </Col>
        <Col :span="6">
        <div class="content bg-purple-light"></div>
        </Col>
        <Col :span="6">
        <div class="content bg-purple"></div>
        </Col>
        <Col :span="6">
        <div class="content bg-purple-light"></div>
        </Col>
      </Row>
    </div>

  </templateDemos>

</template>

<script>
import Row from "../../../src/Row";
import Col from "../../../src/Col";
import templateDemos from "./template-demos";
export default {
  name: "button-simple-demos",
  components: {
    Row,
    Col,
    templateDemos,
  },
  data() {
    return {
      code: `
<div class="row-bg">
    <Row :gutter="20">
        <Col :span="8"><div class="content bg-purple"></div></Col>
        <Col :span="8"><div class="content bg-purple-light"></div></Col>
        <Col :span="8"><div class="content bg-purple"></div></Col>
    </Row>
    <Row :gutter="20">
        <Col :span="6"><div class="content bg-purple"></div></Col>
        <Col :span="6"><div class="content bg-purple-light"></div></Col>
        <Col :span="6"><div class="content bg-purple"></div></Col>
        <Col :span="6"><div class="content bg-purple-light"></div></Col>
    </Row>
</div>
<style scoped>
    .row {
        margin-bottom: 20px;
        height: 20px;
    }
    .row:last-child {
            margin-bottom: 0;
        }
    .col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .content {
        border-radius: 4px;
        min-height: 36px;
        width: 100%;
    }
    .row-bg {
        padding: 10px 0;
    }
</style>
`,
    };
  },
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  height: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.content {
  border-radius: 4px;
  min-height: 36px;
  width: 100%;
}
.row-bg {
  padding: 10px 0;
}
</style>