import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import TransactionTable from "../Tables/TransactionTable";
import { transactionData } from "../transactionData";
import Chart_com from "./Chart";
import { LineChart } from "./LineChart";

const Analytics = () => {
    return (
        <Box>
            <Flex my="20px" py="30px">
                <Box w="100%">
                    <LineChart />
                </Box>

                <Box w="100%">
                    <Chart_com />
                </Box>
            </Flex>

            <Text
                fontWeight={"700"}
                mb="32px"
                color="brand.black"
                fontSize={"24px"}
            >
                Offers
            </Text>

            <Box bg="brand.white" px="24px" py="16px">
                <Text
                    fontWeight={"700"}
                    mb="16px"
                    color="brand.black"
                    fontSize={"24px"}
                >
                    Transactions
                </Text>
                {/* <TransactionTable transactionData={transactionData} /> */}
            </Box>
        </Box>
    );
};

export default Analytics;
