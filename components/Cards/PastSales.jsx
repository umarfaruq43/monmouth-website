import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PastSalesTable from "./PastSalesTable";

const PastSales = () => {
    return (
        <Box>
            <Text fontWeight="700" my="8px" fontSize="24px" py="16px">
                {" "}
                List of Past Sales
            </Text>
            <PastSalesTable />
        </Box>
    );
};

export default PastSales;
