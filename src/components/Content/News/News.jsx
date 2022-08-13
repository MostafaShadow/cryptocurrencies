import React from "react";
import defaultImage from "images/crypto_image.jpeg";
import { Avatar, Typography } from "antd";
import styles from "./news.module.css";
const News = ({ news, idx }) => {
  return (
    <div key={idx} className={styles.card_container}>
      <a href={news?.url} target="_blank" rel="noreferrer">
        <div className={styles.card_header}>
          <div>
            <Avatar
              src={news?.provider[0]?.image?.thumbnail?.contentUrl}
              size="small"
              className={styles.image_News}
            />
          </div>
          <div className={styles.card_header_title}>
            <Typography.Text className="main_color">
              {news?.category ? news?.category : "Unknown"}
            </Typography.Text>
          </div>
        </div>
        <div className={styles.card_content}>
          <div className={styles.card_disc}>
            <Typography.Text className="second_color">
              {news?.description}
            </Typography.Text>
          </div>
          <div className={styles.card_content_image}>
            <img
              src={news?.image?.thumbnail?.contentUrl || defaultImage}
              alt="imageNews"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default News;
