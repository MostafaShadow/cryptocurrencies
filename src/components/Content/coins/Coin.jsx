import React from "react";
import { Typography } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
import styles from "./coins.module.css";
const Coin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin?.uuid}`}>
      <div className={styles.card_container}>
        <div className={styles.card_header}>
          <div className={styles.card_header_title}>
            <Typography.Text className="main_color">
              {coin?.rank}
            </Typography.Text>
            <Typography.Text className="main_color">
              {coin?.name}
            </Typography.Text>
          </div>
          <div>
            <img
              src={coin?.iconUrl}
              alt={coin?.name}
              className={styles.image_coin}
            />
          </div>
        </div>
        <hr />
        <div className={styles.card_content}>
          <Typography.Paragraph className="second_color">
            Price : {millify(coin?.price)}
          </Typography.Paragraph>
          <Typography.Paragraph className="second_color">
            Market Cap : {millify(coin?.marketCap)}
          </Typography.Paragraph>
          <Typography.Paragraph className="second_color">
            Daily Change: {millify(coin?.change)}
          </Typography.Paragraph>
        </div>
      </div>
    </Link>
  );
};

export default Coin;
