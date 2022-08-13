import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useGetCurrenciesQuery } from "services/currenciesApi";
import { CoinsList, InputSearch, Spinner } from "components/index";
const CoinsPage = ({ setCount }) => {
  const count = setCount ? 10 : 100;
  const { data, isLoading } = useGetCurrenciesQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [coinsList, setCoinsList] = useState([]);
  // handle get data and serch
  useEffect(() => {
    const filterData = data?.data?.coins.filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });
    setCoinsList(filterData);
  }, [data, searchTerm]);

  if (isLoading) {
    return <Spinner center height="50px" width="50px" />;
  }

  return (
    <>
      {!setCount && (
        <>
          <Typography.Title className="title_header ">Coins</Typography.Title>
          <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </>
      )}
      <CoinsList coinsList={coinsList && coinsList} />
    </>
  );
};

export default CoinsPage;
