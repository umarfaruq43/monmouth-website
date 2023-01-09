import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const Layout = ({ children, title, ...props }) => {
    return (
        <Box>
            <Head>
                <title> {title ? title : "Monmouth"} </title>
                <meta
                    name="description"
                    content="Monmouth card reading website"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box {...props}>{children}</Box>
        </Box>
    );
};

export default Layout;
