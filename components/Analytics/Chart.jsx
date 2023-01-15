import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Chart_com = () => {
    const chartRef = useRef();
    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                // label: "My First Dataset",
                data: [40, 15, 29, 29, 25, 45, 30, 20, 38, 47, 18, 35],
                backgroundColor: "#6454D6",
                borderRadius: 4,
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        hoverBackgroundColor: "#6454D6",
        layout: {
            padding: 30,
        },
        plugins: {
            legend: {
                display: false,
                position: "left",
                align: "start",

                labels: {
                    boxWidth: 10,
                },
            },
            title: {
                display: false,
            },
            tooltip: {
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
                    drawBorder: false,
                },
                ticks: {
                    color: "#A2A2A2",
                    padding: 20,
                   
                },
            },
            y: {
                position: "left",
                min: 0,
                max: 50,
                ticks: {
                    color: "#A2A2A2",
                    stepSize: 10,
                    padding: 20,
                    callback: function (value, index) {
                        return `${value}k`;
                    },
                },
                grid: {
                    display: true,
                    drawBorder: false,
                },
            },
        },
    };
    return (
        <div>
            <Bar options={options} data={data} ref={chartRef} />
        </div>
    );
};

export default Chart_com;
