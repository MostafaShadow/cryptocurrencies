import { Typography } from "antd";
import React from "react";
import logo from "images/logo.png";
import styles from "./styles.module.css";
import { MenuFoldOutlined } from "@ant-design/icons";
const Navbar = ({ openSideBar }) => {
  return (
    <nav className={styles.navbar_container}>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" className={styles.image_logo} />
        <Typography.Text className={styles.logo_name}>
          currencies
        </Typography.Text>
      </div>
      <button className="button_icon" onClick={openSideBar}>
        <MenuFoldOutlined style={{ color: "var(--mainColor)" }} />
      </button>
    </nav>
  );
};

export default Navbar;
