
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: [
    "5",
    "9",
    "11",
    "15",
    "56",
    "12",
    "7",
    "5",
    "9",
    "11",
    "15",
    "56",
    "12",
    "7",
    "56",
    "12",
    "5",
    "5",
    "78",
    "8",
    "4",
    "1",
    "15",

    "12",
    "5",
    "5",
    "78",
  ],
  datasets: [
    {
      label: "weekly Activity",
      data: [
        5000, 6000, 7000, 10000, 8000, 4000, 15000, 500, 10000, 15000, 5000,
        5000, 15000, 5000, 12000, 15000, 1400, 12500, 500, 10000, 15000, 2000,
        5000, 10000, 4000, 15000, 2000, 5000, 2000, 15000, 500, 10000, 15000,
        2000, 5000,
      ],
      backgroundColor: "#7394FF",
      borderRadius: 50, // Rounded edges

      barThickness: 12,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `Sales: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      beginAtZero: false,
      grid: {
        display: false, // Remove y-axis grid lines
      },
      ticks: {
        autoSkip: true,
      },
    },

    y: {
      beginAtZero: true,

      ticks: {
        callback: function (value) {
          if (value === 0) return "0";
          if (value === 5000) return "5k";
          if (value === 10000) return "10k";
          if (value === 15000) return "15k";

          return "";
        },
      },
    },
  },
};

const ChartB = () => (
  <div style={{ width: "100%", height: "90%" }}>
    <Bar data={data} options={options} style={{ width: "95% !important" }} />
  </div>
);

export default ChartB;
