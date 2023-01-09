import { Box } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Cards/Card";
import SingleCard from "../components/Cards/SingleCard";
import DashboardLayout from "../Layout/DashboardLayout";

const card = () => {
    return (
        <DashboardLayout passedActive="/card">
            <Box>
                <Card />
                {/* <SingleCard /> */}
            </Box>
        </DashboardLayout>
    );
};

export default card;
