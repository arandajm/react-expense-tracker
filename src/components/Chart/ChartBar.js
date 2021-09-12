import React from "react";
import styles from "./ChartBar.module.css";

const ChartBar = ({ label, maxValue, value }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    // calculate the filled percentage
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}>{label}</div>
    </div>
  );
};

export default ChartBar;
