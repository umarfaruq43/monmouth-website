import { Box } from "@chakra-ui/react";
import React from "react";
import Settings from "../components/Settings/Settings";
import DashboardLayout from "../Layout/DashboardLayout";

const settings = () => {
    return (
        <DashboardLayout passedActive="/settings">
            <Box>
                <Settings />
            </Box>
        </DashboardLayout>
    );
};

export default settings;
