import React from "react";
import notfound from "images/notfound.png";
import { Typography } from "antd";
import { Link } from "react-router-dom";
const NotfoundPage = () => {
  return (
    <div style={{ maxWidth: "1000px", margin: "40px auto" }}>
      <div>
        <img
          src={notfound}
          alt="image_notfound"
          style={{ width: "100%", height: "240px" }}
        />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <Typography.Title
          level={4}
          style={{ textAlign: "center", color: "var(--mainColor)" }}
        >
          Sorry, this page isn't available.
        </Typography.Title>
        <Typography.Title
          level={4}
          style={{ textAlign: "center", color: "var(--mainColor)" }}
        >
          The link you followed may be broken , Go back to
        </Typography.Title>
        <Link
          style={{
            textDecoration: "none",
            color: "#2196f3",
            textAlign: "center",
          }}
          to="/"
        >
          <Typography.Title level={4} className="logo_name">
            currencies
          </Typography.Title>
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;
