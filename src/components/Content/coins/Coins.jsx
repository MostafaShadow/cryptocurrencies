import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useGetCurrenciesQuery } from "services/currenciesApi";
import { Link } from "react-router-dom";
import millify from "millify";
import { Spinner } from "components";
import { CloseOutlined } from "@ant-design/icons";
import Masonry from "react-masonry-css";

import styles from "./coins.module.css";
const Coins = ({ setCount }) => {
  const count = setCount ? 10 : 100;
  const { data, isLoading } = useGetCurrenciesQuery(count);
  const [searchTerms, setSearchTerms] = useState("");
  const [coinsList, setCoinsList] = useState([]);
  // handle get data and serch
  useEffect(() => {
    const filterData = data?.data?.coins.filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerms.toLocaleLowerCase());
    });
    setCoinsList(filterData);
  }, [data, searchTerms]);
  const onChange = (e) => {
    setSearchTerms(e.target.value);
  };
  // remove search value
  const removeInputValue = () => {
    setSearchTerms("");
  };
  // break point Columns responseve
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (isLoading) {
    return <Spinner center height="50px" width="50px" />;
  }

  return (
    <>
      {!setCount && (
        <>
          <Typography.Title className="title_header ">Coins</Typography.Title>

          <div className={styles.input_container}>
            <input value={searchTerms} onChange={onChange} />
            <button className="button_icon" onClick={removeInputValue}>
              <CloseOutlined className={styles.icon_close} />
            </button>
          </div>
        </>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {coinsList &&
          coinsList.map((coin) => (
            <Link to={`/coin/${coin?.uuid}`} key={coin?.uuid}>
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
          ))}
      </Masonry>
    </>
  );
};

export default Coins;
