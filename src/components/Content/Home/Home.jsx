import React from "react";
import { Typography } from "antd";
import { Coins, News, Stats } from "components";
// styles
import "index.css";
import { useGetCurrenciesQuery } from "services/currenciesApi";
const Home = () => {
  // crypto stats api
  const { data, isLoading } = useGetCurrenciesQuery(15);
  // crypto Stats Details => values
  const cryptoStatsDetails = data?.data?.stats;
  // crypto stats cards
  const cryptoStats = [
    { title: "total", value: cryptoStatsDetails?.total },
    { title: "total 24h volume", value: cryptoStatsDetails?.total24hVolume },
    { title: "total coins", value: cryptoStatsDetails?.totalCoins },
    { title: "total exchanges", value: cryptoStatsDetails?.totalExchanges },
    { title: "total market cap", value: cryptoStatsDetails?.totalMarketCap },
    { title: "total markets", value: cryptoStatsDetails?.totalMarkets },
  ];

  return (
    <>
      <Typography.Title className="title_header" level={4}>
        coins stats
      </Typography.Title>
      <Stats statsValues={cryptoStats} isLoading={isLoading} />
      <hr />
      <div className="mt-15">
        <Typography.Title className="title_header" level={4}>
          top 10 coins
        </Typography.Title>
      </div>

      <Coins setCount />
      <hr />
      <div className="mt-15">
        <Typography.Title className="title_header" level={4}>
          coins news
        </Typography.Title>
      </div>
      <News setCount />
      <hr />
    </>
  );
};

export default Home;
