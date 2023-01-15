import { Box } from "@chakra-ui/react";
import React from "react";
import Analytics from "../components/Analytics/Analytics";

import DashboardLayout from "../Layout/DashboardLayout";

const analytics = () => {
    return (
        <DashboardLayout passedActive="/analytics">
            <Box>
                <Analytics />
            </Box>
        </DashboardLayout>
    );
};

export default analytics;
