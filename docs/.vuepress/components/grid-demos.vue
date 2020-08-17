<template>
  <templateDemos title="基本用法" :code="code">
    <div class="row-bg">
      <Row>
        <Col :span="24">
        <div class="content bg-color-dark">24</div>
        </Col>
      </Row>
      <Row>
        <Col :span="12">
        <div class="content bg-color">12</div>
        </Col>
        <Col :span="12">
        <div class="content bg-color-light">12</div>
        </Col>
      </Row>
      <Row>
        <Col :span="8">
        <div class="content bg-color">8</div>
        </Col>
        <Col :span="8">
        <div class="content bg-color-light">8</div>
        </Col>
        <Col :span="8">
        <div class="content bg-color">8</div>
        </Col>
      </Row>
      <Row>
        <Col :span="6">
        <div class="content bg-color">6</div>
        </Col>
        <Col :span="6">
        <div class="content bg-color-light">6</div>
        </Col>
        <Col :span="6">
        <div class="content bg-color">6</div>
        </Col>
        <Col :span="6">
        <div class="content bg-color-light">6</div>
        </Col>
      </Row>
      <Row>
        <Col :span="4">
        <div class="content bg-color">4</div>
        </Col>
        <Col :span="4">
        <div class="content bg-color-light">4</div>
        </Col>
        <Col :span="4">
        <div class="content bg-color">4</div>
        </Col>
        <Col :span="4">
        <div class="content bg-color-light">4</div>
        </Col>
        <Col :span="4">
        <div class="content bg-color">4</div>
        </Col>
        <Col :span="4">
        <div class="content bg-color-light">4</div>
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
  <Row>
    <Col :span="24">
    <div class="content bg-color-dark"></div>
    </Col>
  </Row>
  <Row>
    <Col :span="12">
    <div class="content bg-color"></div>
    </Col>
    <Col :span="12">
    <div class="content bg-color-light"></div>
    </Col>
  </Row>
  <Row>
    <Col :span="8">
    <div class="content bg-color"></div>
    </Col>
    <Col :span="8">
    <div class="content bg-color-light"></div>
    </Col>
    <Col :span="8">
    <div class="content bg-color"></div>
    </Col>
  </Row>
  <Row>
    <Col :span="6">
    <div class="content bg-color"></div>
    </Col>
    <Col :span="6">
    <div class="content bg-color-light"></div>
    </Col>
    <Col :span="6">
    <div class="content bg-color"></div>
    </Col>
    <Col :span="6">
    <div class="content bg-color-light"></div>
    </Col>
  </Row>
  <Row>
    <Col :span="4">
    <div class="content bg-color"></div>
    </Col>
    <Col :span="4">
    <div class="content bg-color-light"></div>
    </Col>
    <Col :span="4">
    <div class="content bg-color"></div>
    </Col>
    <Col :span="4">
    <div class="content bg-color-light"></div>
    </Col>
    <Col :span="4">
    <div class="content bg-color"></div>
    </Col>
    <Col :span="4">
    <div class="content bg-color-light"></div>
    </Col>
  </Row>
</div>
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
.bg-color-dark {
  background: hsl(150, 50%, 50%);
}
.bg-color {
  background: hsl(150, 50%, 60%);
}
.bg-color-light {
  background: hsl(150, 50%, 75%);
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
.bg-color-dark {
  background: hsl(150, 50%, 50%);
}
.bg-color {
  background: hsl(150, 50%, 60%);
}
.bg-color-light {
  background: hsl(150, 50%, 75%);
}
.content {
  border-radius: 4px;
  min-height: 36px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row-bg {
  padding: 10px 0;
}
</style>