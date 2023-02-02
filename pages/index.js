import Layout from "../Layout/Layout";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Dashboard from "../components/Dashboard/Dashboard";
import { useAuthContext } from "../Contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Login from "../components/auth/Login";

const Home = () => {
    const navigate = useRouter();
    const { user } = useAuthContext();

    return (
        <Layout title={"Monmouth Cards"}>
            {/* <Dashboard /> */}
            <Login />
        </Layout>
    );
};

// Home.getInitialProps = async (context) => {
//    user
//     return { stars: json.stargazers_count };
// };

export default Home;
