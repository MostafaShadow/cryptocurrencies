import { Typography } from "antd";
import { NewsList, Spinner } from "components";
import React from "react";
import { useGetNewsQuery } from "services/newsApi";

const NewsPage = ({ setCount }) => {
  const count = setCount ? 10 : 100;
  const { data, isLoading } = useGetNewsQuery(count);
  // news details
  const newsList = data?.value;

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
      <NewsList newsList={newsList && newsList} />
    </>
  );
};

export default NewsPage;
