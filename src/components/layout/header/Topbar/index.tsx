import React, { useState } from "react";
import { Row, Col } from "antd";

import CartIcons from "./CartIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Topbar: React.FC = () => {
  const [logoClicked, setLogoClicked] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: 15 }}>
      <Row>
        <Col span={5}>
          <Logo logoClicked={logoClicked} setLogoClicked={setLogoClicked} />
        </Col>
        <Col offset={4} span={5}>
          <SearchBar />
        </Col>
        <Col offset={4} span={5}>
          <CartIcons />
        </Col>
      </Row>
    </div>
  );
};

export default Topbar;
