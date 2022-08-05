import { Avatar, Typography } from "antd";
import { Spinner } from "components";
import React from "react";
import { useGetNewsQuery } from "services/newsApi";
import defaultImage from "images/crypto_image.jpeg";
import Masonry from "react-masonry-css";
import styles from "./news.module.css";
const News = ({ setCount }) => {
  const count = setCount ? 10 : 100;
  const { data, isLoading } = useGetNewsQuery(count);
  // news details
  const newsList = data?.value;

  // break point Columns responseve
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1,
  };
  // loading ? get spinner
  if (isLoading) {
    return <Spinner center width="50px" height="50px" />;
  }
  return (
    <>
      {!setCount && (
        <Typography.Title
          className="title_header "
          style={{ marginBottom: "-2px" }}
        >
          News
        </Typography.Title>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {newsList &&
          newsList.map((news, idx) => (
            <div key={idx} className={styles.card_container}>
              <a href={news.url} alt="news" target="_blank" rel="noreferrer">
                <div className={styles.card_header}>
                  <div>
                    <Avatar
                      src={news.provider[0]?.image?.thumbnail?.contentUrl}
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
          ))}
      </Masonry>
    </>
  );
};

export default News;
