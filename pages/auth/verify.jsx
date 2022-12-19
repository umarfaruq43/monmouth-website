import { Box } from "@chakra-ui/react";
import React from "react";
import Login from "../../components/auth/Login";
import Verify from "../../components/auth/Verify";
import Layout from "../../Layout/Layout";
const verify = () => {
    return (
        <Layout title="Verify  your account">
            <Verify />
        </Layout>
    );
};

export default verify;
