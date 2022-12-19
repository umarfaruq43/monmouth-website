import { Box } from "@chakra-ui/react";
import React from "react";
import Login from "../../components/auth/Login";
import ResetPassword from "../../components/auth/ResetPassword";
import Verify from "../../components/auth/Verify";
import Layout from "../../Layout/Layout";
const reset_password = () => {
    return (
        <Layout title="Reset your account">
            <ResetPassword />
        </Layout>
    );
};

export default reset_password;
