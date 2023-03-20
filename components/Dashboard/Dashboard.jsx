import {
    Box,
    Flex,
    Image,
    SimpleGrid,
    Text,
    Button,
    Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../Contexts/AuthContext";
import DashboardLayout from "../../Layout/DashboardLayout";
import { LineChart } from "../Analytics/LineChart";

import BasicTable from "../Tables/BasicTable";
import SortingTable from "../Tables/SortingTable";
import CardDetails from "./CardDetails";
import UploadCsv from "./UploadCsv";

const Dashboard = () => {
    const [TotalCardNo, setTotalCardNo] = useState("");
    const [pendingCardNo, setPendingCardNo] = useState("");
    const [soldCardNo, setSoldCardNo] = useState("");
    useEffect(() => {
        function getTotalCard(setTotalCard) {
            const userToken = localStorage.getItem("token");
            const headers = {
                Authorisation: "Bearer " + userToken,
                mode: "no-cors",
            };
            fetch(
                "https://monmouth.onrender.com/v1/card/count-cardsBy-status",
                {
                    method: "GET",
                    headers: headers,
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setTotalCard(data.data && data.data);
                    console.log(data);
                })
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error
                    );
                });
        }

        function getPendingCard(setPendingCard) {
            const userToken = localStorage.getItem("token");
            const headers = {
                Authorisation: "Bearer " + userToken,
                mode: "no-cors",
            };
            fetch(
                "https://monmouth.onrender.com/v1/card/count-cardsBy-status?cardStatus=pending",
                {
                    method: "GET",
                    headers: headers,
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setPendingCard(data && data.data);
                })
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error
                    );
                });
        }

        function getSoldCard(setSoldCard) {
            const userToken = localStorage.getItem("token");
            const headers = {
                Authorisation: "Bearer " + userToken,
                mode: "no-cors",
            };
            fetch(
                "https://monmouth.onrender.com/v1/card/count-cardsBy-status?cardStatus=sold",
                {
                    method: "GET",
                    headers: headers,
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    Object.keys(data.data).length === 0
                        ? setSoldCardNo(0)
                        : setSoldCardNo("solded", data && data);
                })
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error
                    );
                });
        }

        getTotalCard(setTotalCardNo);
        getPendingCard(setPendingCardNo);
        getSoldCard(setSoldCardNo);
    }, []);

    return (
        <DashboardLayout passedActive="/">
            <Box>
                <Flex justify="space-between" align="center">
                    <Text
                        fontWeight={"700"}
                        color="brand.black"
                        fontSize={"24px"}
                        mb="24px"
                    >
                        Dashboard
                    </Text>

                    {/* <Button
                        bgColor="brand.primary"
                        color="brand.white"
                        px="24px"
                        py="6px"
                        _hover={{ bg: "brand.primary" }}
                        _active={{ bg: "brand.primary" }}
                    >
                       
                        <UploadCsv />
                    </Button> */}
                </Flex>

                <Flex
                    gap="32px"
                    mb="32px"
                    align={"center"}
                    flexWrap="wrap"
                    justify={"space-between"}
                >
                    <Box w={["100%", "460px"]}>
                        <CardDetails
                            TotalCardNo={TotalCardNo}
                            pendingCardNo={pendingCardNo}
                            soldCardNo={soldCardNo}
                        />
                    </Box>
                    <Box w={["100%", "670px"]} flex={1}>
                        <LineChart />
                    </Box>
                </Flex>

                {/* Tables COmponents  */}
                <Box py="16px" px="24px" bgColor="brand.white">
                    <Text
                        pb="16px"
                        fontWeight="600"
                        fontSize={"20px"}
                        color="brand.black"
                    >
                        Recent Cards
                    </Text>
                    <Box>
                        <BasicTable />
                    </Box>
                    {/* <SortingTable /> */}
                </Box>
            </Box>
        </DashboardLayout>
    );
};

export default Dashboard;
