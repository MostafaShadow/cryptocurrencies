import React from "react";
import Masonry from "react-masonry-css";
import News from "./News";
const NewsList = ({ newsList }) => {
  // break point Columns responseve
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {newsList &&
        newsList.map((news, idx) => <News news={news && news} idx={idx} />)}
    </Masonry>
  );
};

export default NewsList;
