import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import AuthContext from "../Contexts/AuthContext";

import { ToastAlert } from "../Contexts/ToastAlert";
import "../styles/globals.css";
import theme from "../theme";

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <CSSReset />
            <ToastAlert>
                <AuthContext>
                    <Component {...pageProps} />
                </AuthContext>
            </ToastAlert>
        </ChakraProvider>
    );
}
