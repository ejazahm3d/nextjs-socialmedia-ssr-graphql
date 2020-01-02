import React, { useState } from "react";
import { Row, Col, Icon, Typography } from "antd";
import Search from "antd/lib/input/Search";
import CartIcons from "./CartIcons";

const Topbar: React.FC = () => {
  const [logoClicked, setLogoClicked] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: 15 }}>
      <Row>
        <Col span={5}>
          <Icon
            type="down-circle"
            spin={logoClicked}
            onClick={() => setLogoClicked(!logoClicked)}
            title="Bathroom Tiles"
            style={{ fontSize: 60, textAlign: "start" }}
          />
        </Col>
        <Col offset={4} span={5}>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            size="large"
          />
        </Col>
        <Col offset={4} span={5}>
          <CartIcons />
        </Col>
      </Row>
    </div>
  );
};

export default Topbar;
