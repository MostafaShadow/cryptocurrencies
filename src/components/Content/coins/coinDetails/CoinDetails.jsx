import { Select, Typography } from "antd";
import { Stats } from "components";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCoinQuery,
  useGetCoinHistoryQuery,
} from "services/currenciesApi";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import { DollarOutlined } from "@ant-design/icons";
import { LineChart } from "components";
import styles from "./coinDetails.module.css";
const CoinDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("24h");
  // coin Details
  const { data, isLoading } = useGetCoinQuery(coinId);
  const coin = data?.data?.coin;
  // coin History
  const { data: coinHistory, isLoading: loading } = useGetCoinHistoryQuery({
    coinId,
    timePeriod,
  });
  const times = ["24h", "7d", "30d", "1y", "3y", "5y"];
  const valueStatistics = [
    {
      title: "price",
      value: coin?.price && millify(coin?.price),
    },
    { title: "rank", value: coin?.rank },
    {
      title: "24h volume",
      value: coin?.volume && millify(coin?.volume),
    },
    {
      title: "market cap",
      value: coin?.marketCap && millify(coin?.marketCap),
    },
    {
      title: "all time high",
      value: coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price),
    },
  ];
  const otherStatistics = [
    {
      title: "number of markets",
      value: coin?.numberOfMarkets,
    },
    {
      title: "number of exchanges",
      value: coin?.numberOfExchanges,
    },
    {
      title: "total supply",
      value: coin?.supply?.total && millify(coin?.supply?.total),
    },
    {
      title: "circulating supply",
      value: coin?.supply?.circulating && millify(coin?.supply?.circulating),
    },
  ];

  // change time period
  const changeTimePeriod = (value) => {
    setTimePeriod(value);
  };
  return (
    <>
      <header className={styles.header_container}>
        <Typography.Title className="main_color" level={2}>
          {coin?.name}
        </Typography.Title>
        <div>
          <DollarOutlined className={styles.icon} />
        </div>
      </header>
      <div>
        <Select
          defaultValue="24h"
          className={styles.select}
          placeholder="Time Period"
          size="large"
          onChange={(value) => changeTimePeriod(value)}
        >
          {times.map((time, idx) => (
            <Select.Option value={time} key={idx}>
              {time}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div className="mt-15">
        <LineChart
          loading={loading && loading}
          coinHistory={coinHistory}
          coinCurrentPrice={coin?.price}
          coinName={coin?.name}
        />
      </div>
      <div className="mt-15">
        <Typography.Title level={5} className="second_color">
          Statistics
        </Typography.Title>
      </div>
      <Stats
        statsValues={valueStatistics && valueStatistics}
        isLoading={isLoading}
      />
      <hr />
      <div className="mt-15">
        <Typography.Title level={5} className="second_color">
          Other Statistics
        </Typography.Title>
      </div>
      <Stats
        statsValues={otherStatistics && otherStatistics}
        isLoading={isLoading}
      />
      <hr />
      <div className="mt-15">
        <Typography.Title level={5} className="main_color">
          what is {coin?.name} ?
        </Typography.Title>
      </div>
      <div className={styles.info_container}>
        <Typography.Paragraph className="main_color">
          {coin?.description && HTMLReactParser(coin?.description)}
        </Typography.Paragraph>
      </div>
      <hr />
    </>
  );
};

export default CoinDetails;
