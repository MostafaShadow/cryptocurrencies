import React from "react";
import { Circles } from "react-loader-spinner";
import "index.css";
const Spinner = ({ center, height, width }) => {
  const stylesApp = {
    display: "grid",
    height: "100%",
    placeItems: center && "center",
  };
  return (
    <div style={stylesApp}>
      <Circles
        height={height}
        width={width}
        color="var(--thirdBig)"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
};

export default Spinner;
