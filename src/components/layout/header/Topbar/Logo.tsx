import React from "react";
import { Icon } from "antd";

interface Props {
  logoClicked: boolean;
  setLogoClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo: React.FC<Props> = ({ logoClicked, setLogoClicked }) => {
  return (
    <Icon
      type="down-circle"
      spin={logoClicked}
      onClick={() => setLogoClicked(!logoClicked)}
      title="Bathroom Tiles"
      style={{ fontSize: 60, textAlign: "start" }}
    />
  );
};

export default Logo;
