import React from "react";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="2" onClick={() => router.push("/")}>
          Home
          {/* <Link href="/">Home</Link> */}
        </Menu.Item>
        <Menu.Item key="feed" onClick={() => router.push("/feed")}>
          Feed
        </Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
