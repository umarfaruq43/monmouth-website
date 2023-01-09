import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { useAuthContext } from "../Contexts/AuthContext";
import Layout from "../Layout/Layout";

export const ProtectRoute = ({ children }) => {
    const router = useRouter();

    const { user, setUser } = useAuthContext();

    if (!user) {
        return (
            <Layout>
                Loading... <Button onClick={() => setUser(!user)}>login</Button>{" "}
            </Layout>
        );
    }

    console.log(router);

    return children;
};
