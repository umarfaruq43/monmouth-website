import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    ChakraComponent,
} from "@chakra-ui/react";

import React from "react";

// import { useToastContext } from "../Contexts/ToastAlert";
// import InputForm from "../components/InputForm";
import NextLink from "next/link";

const FormScreen = ({ children, ...prop }) => {
    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
            <Box mx={"auto"} py={[12]} px={["2", null, 8]} {...prop} w="100%">
                <Link href="/" as={NextLink}>
                    <Box>
                        <Image
                            src="/Logo.svg"
                            alt="momentum logo"
                            mx="auto"
                            mb="40px"
                            w="217px"
                            h="100%"
                        />
                    </Box>
                </Link>

                <Box
                    rounded={"lg"}
                    boxShadow="0px 4px 40px 4px rgba(0, 0, 0, 0.04)"
                    px={[4, null, 8]}
                    py="50px"
                    w="100%"
                    bgColor={"brand.white"}
                    maxW={"460px"}
                    mx="auto"
                >
                    {children}
                </Box>
            </Box>
        </Flex>
    );
};

export default FormScreen;
