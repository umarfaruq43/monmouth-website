import Layout from "../Layout/Layout";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
    return (
        <Layout>
            <Box>
                <Heading>Hello This is the dashboard</Heading>
                <Text>
                    {" "}
                    When the APi is Being consumed you {`won't`} have access to
                    this place except you are Logged In.
                </Text>
                <Text>
                    Anyways You can click{" "}
                    <Link
                        as={NextLink}
                        href="/auth/login"
                        color="brand.primary"
                    >
                        {" "}
                        here
                    </Link>{" "}
                    to go to the login page
                </Text>
            </Box>
        </Layout>
    );
}
