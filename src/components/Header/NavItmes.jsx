import React from "react";
import { BulbOutlined, DollarOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
const NavItmes = ({ closeSidebar }) => {
  const { pathname } = useLocation();
  // items navigation
  const navItems = [
    { label: "/", icon: <HomeOutlined />, name: "Home", id: "1" },
    {
      label: "/coins",
      icon: <DollarOutlined />,
      name: "Coins",
      id: "2",
    },
    { label: "/news", icon: <BulbOutlined />, name: "News", id: "3" },
  ];

  return (
    <Menu theme="dark" className={styles.menu_container}>
      {navItems &&
        navItems.map((item) => (
          <Menu.Item className={pathname === item?.label && styles.activeLink} icon={item.icon} key={item.id} onClick={closeSidebar} >
            <NavLink to={item?.label}>{item.name}</NavLink>
          </Menu.Item>
        ))}
    </Menu>
  );
};

export default NavItmes;
