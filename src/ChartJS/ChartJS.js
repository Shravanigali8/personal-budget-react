import React from "react";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

function ChartJS({ chartData }) {
  console.log(chartData); 

  if (!chartData || !chartData.datasets) {
    return <p>Loading chart...</p>;
  }

  return (
    <div className="chart-container" style={{ width: 800, height: 350 }}>
      <Pie data={chartData} />
    </div>
  );
}

export default ChartJS;
