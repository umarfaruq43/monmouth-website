import Layout from "../Layout/Layout";
import {
    Box,
    Heading,
    Link,
    Text,
    Flex,
    Image,
    Spinner,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Dashboard from "../components/Dashboard/Dashboard";
import { useAuthContext } from "../Contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Login from "../components/auth/Login";

const Home = () => {
    const navigate = useRouter();
    const { user } = useAuthContext();
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
        <Layout title={"Monmouth Cards"}>
            {!loading ? (
                <Dashboard />
            ) : (
                <Flex minH="100vh" justify={"center"} align="center">
                    <Box textAlign={"center"}>
                        <Image src="/Logo.svg" alt="logo" />
                        <Spinner size="lg" mt="20px" />
                    </Box>
                </Flex>
            )}
        </Layout>
    );
};

export default Home;
