import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { Layout, Menu } from "antd";

const { Content } = Layout;

const Header: React.FC = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
    </>
  );
};

export default Header;
