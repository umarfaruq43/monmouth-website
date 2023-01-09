import Layout from "../Layout/Layout";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Dashboard from "../components/Dashboard/Dashboard";
import { useAuthContext } from "../Contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ProtectRoute } from "../components/ProtectedPage";

const Home = () => {
    const navigate = useRouter();
    const { user } = useAuthContext();

    return (
        <Layout>
            <Dashboard />
        </Layout>
    );
};

// Home.getInitialProps = async (context) => {
//    user
//     return { stars: json.stargazers_count };
// };

export default Home;
