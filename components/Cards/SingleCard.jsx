import { Box, Button, Text, Flex } from "@chakra-ui/react";
import React from "react";

import { FiChevronRight } from "react-icons/fi";
import Layout from "../../Layout/Layout";
import BreadCrumb from "../BreadCrumb";
import CardDetails from "./CardDetails";
import CardIllustaration from "./CardIllustaration";
import PastSales from "./PastSales";

const SingleCard = ({ currentCard }) => {
    
    console.log("currentCard", currentCard);
    return (
        <Box>
            <Box mb="24px">
                <Text fontWeight={"700"} color="brand.black" fontSize={"24px"}>
                    Cards
                </Text>
            </Box>

            <Box p={["12px", , "24px"]} bgColor="brand.white">
                <BreadCrumb slug={currentCard && currentCard.groupName} />
                <Box py="33px">
                    <CardIllustaration
                        cardDetails={currentCard && currentCard}
                    />
                </Box>
                <Box mt="33px">
                    <CardDetails
                        currentCardDetails={currentCard && currentCard}
                    />
                </Box>

                <Box mt="33px">
                    <PastSales cardDetails={currentCard && currentCard} />
                </Box>
            </Box>
        </Box>
    );
};

export default SingleCard;
