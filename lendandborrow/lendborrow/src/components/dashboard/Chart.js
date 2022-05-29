import React from "react";
import BarChart from "react-bar-chart";

const data = [
  { text: "Man", value: 500 },
  { text: "Woman", value: 300 },
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

function Chart() {
  return (
    <BarChart
      ylabel="Quantity"
      width={200}
      height={200}
      margin={margin}
      data={data}
      //   onBarClick={this.handleBarClick}
    />
  );
}

export default Chart;
