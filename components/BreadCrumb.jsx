import {
    Box,
    Button,
    Text,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const BreadCrumb = ({ slug }) => {
    return (
        <Box
            bgColor="brand.light_1"
            p="16px"
            color="brand.secondary_2"
            borderRadius="10px"
            boxShadow="0px 20px 60px 10px rgba(237, 237, 246, 0.2)"
        >
            <Breadcrumb
                className="sofia"
                spacing="8px"
                separator={<FiChevronRight color="brand.secondary_2" />}
                color="brand.secondary_2"
                fontWeight="500"
            >
                <BreadcrumbItem>
                    <BreadcrumbLink href="/card">Cards</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/card">All Cards</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#" color="brand.black">
                        {slug}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Box>
    );
};

export default BreadCrumb;
