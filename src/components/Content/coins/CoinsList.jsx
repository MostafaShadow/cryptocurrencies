import React from "react";
import Masonry from "react-masonry-css";
import Coin from "./Coin";
const CoinsList = ({ coinsList }) => {
  // break point Columns responseve
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {coinsList &&
        coinsList.map((coin) => (
          <div style={{ backgroundColor: "inherit" }} key={coin?.uuid}>
            <Coin coin={coin && coin} />
          </div>
        ))}
    </Masonry>
  );
};

export default CoinsList;
