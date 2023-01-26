import React, { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import {
    Box,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    Text,
    Button,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const Chart_com = () => {
    const chartRef = useRef();
    const data = {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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

        hoverBackgroundColor: "#6454D6",

        plugins: {
            legend: false,
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
                },
                ticks: {
                    color: "#A2A2A2",
                },
            },
            y: {
                position: "left",
                min: 0,
                max: 50,
                ticks: {
                    color: "#A2A2A2",
                    stepSize: 10,

                    callback: function (value, index) {
                        return `${value}k`;
                    },
                },
                padding: 10,
                stepSize: 5,
                grid: {
                    display: true,
                    drawBorder: false,
                },
            },
        },
    };

    const [filter, setFilter] = useState("Monthly");
    return (
        <Box maxW={""} w="100%" p="24px" bgColor={"brand.white"}>
            <Flex mb="16px" justify={"space-between"}>
                <Box>
                    <Text
                        fontSize={"16px"}
                        className="sofia"
                        fontWeight={"400"}
                        color="brand.lightGray"
                    >
                        Revenue
                    </Text>
                    <Text
                        mt="8px"
                        fontSize={"32px"}
                        fontWeight={700}
                        color="brand.black"
                    >
                        $45,325.00
                    </Text>
                </Box>

                <Box>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<FaChevronDown />}
                            w="120px"
                            textAlign="left"
                            bg="transparent"
                            fontWeight="500"
                            fontSize={"14px"}
                            _hover={{ bg: "transparent" }}
                            _active={{ bg: "transparent" }}
                            border="1px"
                            borderColor="brand.light_2"
                        >
                            {filter}
                        </MenuButton>
                        <MenuList maxW="210px">
                            <MenuItem
                                minH="48px"
                                onClick={() => setFilter("Month")}
                            >
                                Month
                            </MenuItem>
                            <MenuItem
                                minH="40px"
                                onClick={() => setFilter("week")}
                            >
                                Week
                            </MenuItem>

                            <MenuItem
                                minH="40px"
                                onClick={() => setFilter("day")}
                            >
                                Day
                            </MenuItem>
                            <MenuItem
                                minH="40px"
                                onClick={() => setFilter("year")}
                            >
                                Year
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            <Bar options={options} data={data} ref={chartRef} />
        </Box>
    );
};

export default Chart_com;
