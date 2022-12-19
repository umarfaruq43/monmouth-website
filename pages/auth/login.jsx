import { Box } from "@chakra-ui/react";
import React from "react";
import Login from "../../components/auth/Login";
import Layout from "../../Layout/Layout";
const login = () => {
    return (
        <Layout title="Login to your account"  >
		
            <Login />
        </Layout>
    );
};

export default login;
