import { Box, Button, Text, Flex } from "@chakra-ui/react";
import React from "react";

import { FiChevronRight } from "react-icons/fi";
import Layout from "../../Layout/Layout";
import BreadCrumb from "../BreadCrumb";
import CardDetails from "./CardDetails";
import CardIllustaration from "./CardIllustaration";
import PastSales from "./PastSales";

const SingleCard = ({ currentCard }) => {
    return (
        <Box>
            <Box mb="24px">
                <Text fontWeight={"700"} color="brand.black" fontSize={"24px"}>
                    Cards
                </Text>
            </Box>

            <Box p={["12px", , "24px"]} bgColor="brand.white">
                <BreadCrumb slug={currentCard && currentCard.title} />
                <Box py="33px">
                    <CardIllustaration />
                </Box>
                <Box mt="33px">
                    <CardDetails />
                </Box>

                <Box mt="33px">
                    <PastSales />
                </Box>
            </Box>
        </Box>
    );
};

export default SingleCard;
