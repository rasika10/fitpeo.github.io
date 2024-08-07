// import * as React from "react";
// import { useTheme } from "@mui/material/styles";
// import { LineChart, axisClasses } from "@mui/x-charts";

// import Title from "./Title";

// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount: amount ?? null };
// }

// const data = [
//   createData("00:00", 0),
//   createData("03:00", 300),
//   createData("06:00", 600),
//   createData("09:00", 800),
//   createData("12:00", 1500),
//   createData("15:00", 2000),
//   createData("18:00", 2400),
//   createData("21:00", 2400),
//   createData("24:00"),
// ];

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <div style={{ width: "100%", flexGrow: 1, overflow: "hidden" }}>
//         <LineChart
//           dataset={data}
//           margin={{
//             top: 16,
//             right: 20,
//             left: 70,
//             bottom: 30,
//           }}
//           xAxis={[
//             {
//               scaleType: "point",
//               dataKey: "time",
//               tickNumber: 2,
//               tickLabelStyle: theme.typography.body2,
//             },
//           ]}
//           yAxis={[
//             {
//               label: "Sales ($)",
//               labelStyle: {
//                 ...theme.typography.body1,
//                 fill: theme.palette.text.primary,
//               },
//               tickLabelStyle: theme.typography.body2,
//               max: 2500,
//               tickNumber: 3,
//             },
//           ]}
//           series={[
//             {
//               dataKey: "amount",
//               showMark: false,
//               color: theme.palette.primary.light,
//             },
//           ]}
//           sx={{
//             [`.${axisClasses.root} line`]: {
//               stroke: theme.palette.text.secondary,
//             },
//             [`.${axisClasses.root} text`]: {
//               fill: theme.palette.text.secondary,
//             },
//             [`& .${axisClasses.left} .${axisClasses.label}`]: {
//               transform: "translateX(-25px)",
//             },
//           }}
//         />
//       </div>
//     </React.Fragment>
//   );
// }

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
