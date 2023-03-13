import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import AuthContext from "../Contexts/AuthContext";
import { ToastAlert } from "../Contexts/ToastAlert";
import "../styles/globals.css";
import theme from "../theme";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { CardProvider } from "../Contexts/CardContext";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();
        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteDone);
        router.events.on("routeChangeError", handleRouteDone);
        return () => {
            router.events.off("routeChangeStart", handleRouteStart);
            router.events.off("routeChangeComplete", handleRouteDone);
            router.events.off("routeChangeError", handleRouteDone);
        };
    }, []); //eslint-disable-line
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <ToastAlert>
                <CardProvider>
                    <AuthContext>
                        <Component {...pageProps} />
                    </AuthContext>
                </CardProvider>
            </ToastAlert>
        </ChakraProvider>
    );
}
