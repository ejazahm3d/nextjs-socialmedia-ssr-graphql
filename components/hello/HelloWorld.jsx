import React from "react";
import "./hello.module.less";
import { Row, Col, Button, message } from "antd";

const HelloWorld = () => {
  return (
    <div>
      <Row type="flex" justify="space-between">
        <Col span={2}>
          <Button onClick={() => message.success("Hello")} type="primary">
            THIS SHOULD BE RED ON HOVER
          </Button>
        </Col>
        <Col span={2}>
          <button className="hello" onClick={() => alert("HELLLLOOO")}>
            THIS SHOULD BE RED ON HOVER
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default HelloWorld;
