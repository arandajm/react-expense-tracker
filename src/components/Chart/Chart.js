import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  // Arrays of values
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  // Get the max value
  const valueMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          {...dataPoint}
          key={dataPoint.label}
          maxValue={valueMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
