// import React from 'react'

// const LineChart = () => {
//   return (
//     <div>LineChart</div>
//   )
// }

// export default LineChart

import React from "react";
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
// import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: false,
        tooltip: {
            xAlign: "bottom",
            enabled: true,
            backgroundColor: "#FFF",
            titleColor: "#121212",
            footerColor: "#121212",
            bodyColor: "0px 2px 16px rgba(13, 10, 44, 0.12)",
            displayColors: false,
            padding: {
                left: 17,
                right: 17,
                top: 9,
                bottom: 9,
            },
            callbacks: {
                label: function (tooltipItem, data) {
                    return tooltipItem.dataset.data[tooltipItem.dataIndex];
                },
                // remove title
                title: function (tooltipItem, data) {
                    return;
                },
            },
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            min: 0,
            max: 20,
            ticks: {
                color: "#A2A2A2",
                padding: 10,
                stepSize: 5,
            },
            borderDash: [10],
            grid: {
                borderDash: [10],
            },
        },
    },
};

const labels = ["4", "5", "6", "7", "8", "9", "10"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: [7, 13, 8, 15, 10, 13, 8, 12],
            borderColor: "#6454D6",
            backgroundColor: "transparent",
            pointBorderColor: "#6454D6",
            pointBorderWidth: 3,
            borderJoinStyle: "round",
            pointBackgroundColor: "transparent",
            pointRadius: 8,
            tension: 0.3,
        },
    ],
};

export function LineChart() {
    return <Line options={options} data={data} />;
}
