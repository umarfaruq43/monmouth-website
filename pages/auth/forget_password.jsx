import React from "react";
import ForgetPassword from "../../components/auth/ForgetPassword";
import Layout from "../../Layout/Layout";

const forget_password = () => {
    return (
        <Layout title="Get your password">
            <ForgetPassword />{" "}
        </Layout>
    );
};

export default forget_password;
