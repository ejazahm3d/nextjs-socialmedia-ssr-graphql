import React from "react";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header: React.FC = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
    </>
  );
};

export default Header;
