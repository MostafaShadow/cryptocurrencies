import React, { useState } from "react";
import { Col } from "antd";
import { Route, Routes } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Home, Coins, News, Sidebar, Navbar, CoinDetails } from "components";
import "index.css";
import styles from "app.module.css";

function App() {
  const [isSidebar, setIsSidebar] = useState(false);
  // open sidebar

  const openSideBar = () => {
    if (isSidebar) return;
    setIsSidebar(true);
  };
  // close sidbar
  const closeSidebar = () => {
    if (!isSidebar) return;
    setIsSidebar(false);
  };

  return (
    <div className="flex">
      <Col className="md_block hidden border-right ">
        <Sidebar />
      </Col>
      <Col className={styles.content_container} flex="auto">
        <div className={`${styles.nav_sticky} md_hidden block`}>
          <Navbar openSideBar={openSideBar} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coin/:coinId" element={<CoinDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Col>

      {isSidebar && (
        <div className={`${styles.sidebarSmallScreen} border-right`}>
          <Sidebar closeSidebar={closeSidebar} />
          <div style={{ padding: "10px 0px" }}>
            <button className="button_icon" onClick={closeSidebar}>
              <CloseOutlined className={styles.close} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
