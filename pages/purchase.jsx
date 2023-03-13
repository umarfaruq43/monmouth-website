import { Box, Flex, Image, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Purchase from "../components/Purchase/Purchase";
import DashboardLayout from "../Layout/DashboardLayout";

const Purchases = () => {
    const navigate = useRouter();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const SecurePage = () => {
            setLoading(true);
            const token = localStorage.getItem("token");
            if (!token) {
                navigate.push("/auth/login");
            } else {
                setLoading(false);
            }
        };
        SecurePage();
    }, []); //eslint-disable-line

    return (
        <>
            {loading ? (
                <Flex minH="100vh" justify={"center"} align="center">
                    <Box textAlign={"center"}>
                        <Image src="/Logo.svg" alt="logo" />
                        <Spinner size="lg" mt="20px" />
                    </Box>
                </Flex>
            ) : (
                <DashboardLayout passedActive="/purchase">
                    <Box>
                        <Purchase />
                    </Box>
                </DashboardLayout>
            )}
        </>
    );
};

export default Purchases;
