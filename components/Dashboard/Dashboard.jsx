import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import BasicTable from "../Tables/BasicTable";
import SortingTable from "../Tables/SortingTable";
import CardDetails from "./CardDetails";

const Dashboard = () => {
    return (
        <DashboardLayout passedActive="/">
            <Box>
                <Text
                    fontWeight={"700"}
                    color="brand.black"
                    fontSize={"24px"}
                    mb="24px"
                >
                    Dashboard
                </Text>

                <Flex gap="30px" mb="32px">
                    <Box w={["100%", "460px"]}>
                        <CardDetails />
                    </Box>
                    <Box w={["100%", "670px"]} flex={1}>
                        <Image src="/chart.svg" alt="" w={"100%"} />
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
