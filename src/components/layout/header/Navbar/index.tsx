import React from "react";
import { Menu } from "antd";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <header>
      <nav>
        <Menu theme="light" mode="horizontal" style={{ textAlign: "center" }}>
          <Menu.Item key="2" onClick={() => router.push("/")}>
            Home
          </Menu.Item>
          <Menu.Item key="feed" onClick={() => router.push("/feed")}>
            Feed
          </Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </nav>
    </header>
  );
};

export default NavBar;
