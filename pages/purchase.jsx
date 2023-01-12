import { Box } from "@chakra-ui/react";
import React from "react";
import Purchase from "../components/Purchase/Purchase";
import DashboardLayout from "../Layout/DashboardLayout";

const purchase = () => {
    return (
        <DashboardLayout passedActive="/purchase">
            <Box>
                <Purchase />
            </Box>
        </DashboardLayout>
    );
};

export default purchase;
