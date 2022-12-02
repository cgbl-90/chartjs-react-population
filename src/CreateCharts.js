import React from "react";
import { Line } from "react-chartjs-2";
import myData from "./data.json";

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

export default function CreateCharts() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Latin American Population from 1960 to 2021",
      },
    },
  };

  async function getData() {
    console.log(myData);
  }

  let labels = ["January", "February", "March", "April", "May", "June", "July"];

  let data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [2, 3, 5, 2, 3, 5, 2],
        borderColor: "rgb(255, 99, 132)",
      },
      {
        label: "Dataset 2",
        data: [3, 5, 2, 3, 2, 5, 5],
        borderColor: "rgb(53, 162, 235)",
      },
    ],
  };

  getData();
  return <Line options={options} data={data} />;
}
