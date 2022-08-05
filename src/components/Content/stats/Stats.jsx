import React from "react";
import { Typography } from "antd";
import millify from "millify";
import { Spinner } from "components";
import Masonry from "react-masonry-css";

import styles from "./stats.module.css";
const Stats = ({ statsValues, isLoading }) => {
  // break point Columns responseve
  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 2,
    500: 1,
  };
  // check data isLoading
  if (isLoading) {
    return <Spinner center height="50" width="50" />;
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {statsValues &&
        statsValues.map((item, idx) => (
          <div key={idx} className={styles.cryptoStats_card}>
            <Typography.Text className={styles.title} level={5}>
              {item?.title}
            </Typography.Text>
            <Typography.Text className={styles.value} level={5}>
              {item?.value && millify(item?.value)}
            </Typography.Text>
          </div>
        ))}
    </Masonry>
  );
};

export default Stats;
