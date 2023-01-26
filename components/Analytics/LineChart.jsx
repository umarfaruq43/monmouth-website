import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Input,
    Image,
    InputGroup,
    InputLeftElement,
    Button,
} from "@chakra-ui/react";

import React, { useState } from "react";
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
            enabled: true,
            backgroundColor: "#000",
            titleColor: "#fff",
            footerColor: "#fff",
            bodyColor: "#fff",
            displayColors: false,
            padding: {
                left: 17,
                right: 17,
                top: 9,
                bottom: 9,
            },

            callbacks: {
                label: function (tooltipItem, data) {
                    return `${
                        tooltipItem.dataset.data[tooltipItem.dataIndex]
                    } Cards Sold`;
                },
                // remove title
                title: function (tooltipItem, data) {
                    return null;
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
            data: [7, 13, 8, 16, 10, 13, 8, 12],
            borderColor: "#6454D6",

            pointBorderColor: "transparent",
            pointHoverBorderColor: "#6454D6",
            pointHoverBorderWidth: 3,
            borderJoinStyle: "round",
            pointBackgroundColor: "#6454D6",
            // pointRadius: 0,
            pointHoverRadius: 8,
            tension: 0.5,
            pointBoxShadow: "",
        },
    ],
};

export function LineChart() {
    const [active, setActive] = useState("Day");
    const [date, setDate] = useState(new Date("24/01/2023"));
    return (
        <Box
            // maxW="686px"
            w="100%"
            bgColor={"brand.white"}
            py="16px"
            px="24px"
            borderRadius={"8px"}
        >
            <Text fontSize={"20px"} mb="18px" fontWeight="600">
                Sales Statistics
            </Text>
            <Flex mb="20px" justify={"space-between"}>
                <Box>
                    <Input
                        type="date"
                        fontSize={"12px"}
                        maxW="160px"
                        maxH="30px"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Box>
                <Box gap="18px">
                    <Button
                        borderRadius={"none"}
                        p="10px"
                        fontSize={"12px"}
                        fontWeight={active === "year" ? "700" : "500"}
                        bgColor={
                            active === "year" ? "brand.light_1" : "transparent"
                        }
                        color={
                            active === "year"
                                ? "brand.primary"
                                : "brand.lightGray"
                        }
                        onClick={() => setActive("year")}
                        _hover={{}}
                        _focus={{}}
                        _active={{}}
                    >
                        YEAR
                    </Button>

                    <Button
                        borderRadius={"none"}
                        p="10px"
                        fontSize="12px"
                        fontWeight={active === "month" ? "700" : "500"}
                        bgColor={
                            active === "month" ? "brand.light_1" : "transparent"
                        }
                        color={
                            active === "month"
                                ? "brand.primary"
                                : "brand.lightGray"
                        }
                        onClick={() => setActive("month")}
                        _hover={{}}
                        _focus={{}}
                        _active={{}}
                    >
                        MONTH
                    </Button>

                    <Button
                        borderRadius={"none"}
                        p="10px"
                        fontSize={"12px"}
                        fontWeight={active === "week" ? "700" : "500"}
                        bgColor={
                            active === "week" ? "brand.light_1" : "transparent"
                        }
                        color={
                            active === "week"
                                ? "brand.primary"
                                : "brand.lightGray"
                        }
                        onClick={() => setActive("week")}
                        _hover={{}}
                        _focus={{}}
                        _active={{}}
                    >
                        WEEK
                    </Button>

                    <Button
                        borderRadius={"none"}
                        p="10px"
                        fontSize={"12px"}
                        fontWeight={active === "Day" ? "700" : "500"}
                        bgColor={
                            active === "Day" ? "brand.light_1" : "transparent"
                        }
                        color={
                            active === "Day"
                                ? "brand.primary"
                                : "brand.lightGray"
                        }
                        _hover={{}}
                        _focus={{}}
                        _active={{}}
                        onClick={() => setActive("Day")}
                    >
                        DAY
                    </Button>
                </Box>
            </Flex>
            <Line options={options} data={data} />
        </Box>
    );
}
