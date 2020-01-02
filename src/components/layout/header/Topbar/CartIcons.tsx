import React from "react";
import { Row, Col, Icon, Typography } from "antd";

const CartIcons = () => {
  return (
    <div>
      <Row>
        <Col span={6}>
          <Icon type="heart" style={{ fontSize: 23 }} />
          <Typography.Paragraph>WishList</Typography.Paragraph>
        </Col>

        <Col span={6}>
          <Icon type="contacts" style={{ fontSize: 23 }} />
          <Typography.Paragraph>Contact Us</Typography.Paragraph>
        </Col>

        <Col span={6}>
          <Icon type="user" style={{ fontSize: 23 }} />
          <Typography.Paragraph>Account</Typography.Paragraph>
        </Col>
        <Col span={6}>
          <Icon type="shopping-cart" style={{ fontSize: 23 }} title="sd" />
          <Typography.Paragraph>Basket</Typography.Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default CartIcons;
