import React from "react";
import { Row, Col, Icon, Typography } from "antd";
import Search from "antd/lib/input/Search";

const Topbar: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 15 }}>
      <Row>
        <Col span={6}>
          <Icon
            type="down-circle"
            title="Bathroom Tiles"
            style={{ fontSize: 60, textAlign: "start" }}
          />
        </Col>
        <Col offset={4} span={4}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            size="large"
          />
        </Col>
        <Col offset={4} span={4}>
          <Row>
            <Col span={6}>
              <Icon type="heart" style={{ fontSize: 35 }} />
              <Typography.Paragraph>WishList</Typography.Paragraph>
            </Col>

            <Col span={6}>
              <Icon type="contacts" style={{ fontSize: 35 }} />
              <Typography.Paragraph>Contact Us</Typography.Paragraph>
            </Col>

            <Col span={6}>
              <Icon type="user" style={{ fontSize: 35 }} />
              <Typography.Paragraph>Account</Typography.Paragraph>
            </Col>
            <Col span={6}>
              <Icon type="shopping-cart" style={{ fontSize: 35 }} title="sd" />
              <Typography.Paragraph>Basket</Typography.Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Topbar;
