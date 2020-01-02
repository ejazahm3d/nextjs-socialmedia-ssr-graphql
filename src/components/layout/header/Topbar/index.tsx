import React, { useState } from "react";
import { Row, Col, Icon, Typography } from "antd";

import Search from "antd/lib/input/Search";
import CartIcons from "./CartIcons";
import Logo from "./Logo";

const Topbar: React.FC = () => {
  const [logoClicked, setLogoClicked] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: 15 }}>
      <Row>
        <Col span={5}>
          <Logo logoClicked={logoClicked} setLogoClicked={setLogoClicked} />
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
