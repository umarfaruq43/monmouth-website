import { Box } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Cards/Card";
import SingleCard from "../components/Cards/SingleCard";
import Offers from "../components/Offers/Offers";
import DashboardLayout from "../Layout/DashboardLayout";

const card = () => {
    return (
        <DashboardLayout passedActive="/offers">
            <Box>
                <Offers />
            </Box>
        </DashboardLayout>
    );
};

export default card;
