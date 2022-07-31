import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import React from "react";
import "index.css";
import { Spinner } from "components";

// charts register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = ({ loading, coinHistory, coinName, coinCurrentPrice }) => {
  const timePeriod = [];
  const price = [];
  // get time period
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    timePeriod.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  // get price
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    price.push(coinHistory?.data?.history[i].price);
  }

  if (loading) {
    return <Spinner center width="50px" height="50px" />;
  }
  return (
    <>
      <Row>
        <Col className="mt-15">
          <Typography.Title level={3} className="second_color">
            {coinHistory?.data?.change} %
          </Typography.Title>
          <Typography.Title level={4} className="second_color">
            Current {coinName} Price : $ {coinCurrentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line
        datasetIdKey="322"
        data={{
          labels: timePeriod,
          datasets: [
            {
              label: "Price In USD",
              data: price,
              borderColor: "#7a77ff",
              backgroundColor: "#7a77ff",
            },
          ],
        }}
      />
    </>
  );
};

export default LineChart;
