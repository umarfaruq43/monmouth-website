import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Layout from "../Layout/Layout";

const dashboard = () => {
    return (
        <Layout title={"Monmouth Cards"}>
            <Dashboard />
        </Layout>
    );
};

Dashboard.getInitialProps = async (props) => {
    console.info("##### Congratulations! You are authorized! ######", props);
    return {};
};

export default withPrivateRoute(Dashboard);;
