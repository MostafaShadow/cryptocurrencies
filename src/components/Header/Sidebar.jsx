import React from "react";
import { Typography } from "antd";
import logo from "images/logo.png";
import { NavItmes } from "components";
// styles
import "index.css";
import styles from "./styles.module.css";
const Sidebar = ({ closeSidebar }) => {
  return (
    <div className={styles.sidebar_container}>
      <header className={styles.logo_container} style={{ padding: "5px 10px" }}>
        <img src={logo} alt="logo" className={styles.image_logo} />
        <Typography.Text className={styles.logo_name}>
          currencies
        </Typography.Text>
      </header>
      <NavItmes closeSidebar={closeSidebar} />
    </div>
  );
};

export default Sidebar;
