import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useToastContext } from "../Contexts/ToastAlert";

export default function Toast({ success, error, warning, message }) {
    const { toastType, setToastType } = useToastContext();
    return (
        <>
            {success ? (
                <Box color="white" p={3} bg="blue.500">
                    {message}
                </Box>
            ) : (
                ""
            )}

            {toastType === "error" ? (
                <Flex
                    justify={"space-between"}
                    align="center"
                    borderRadius={"8px"}
                    p={["3", null, "3"]}
                    bg="blue.500"
                    maxW={["460px"]}
                    position={"absolute"}
                    w={["92%", null, "100%"]}
                    transform={"auto"}
                    translateX="-50%"
                    left={["50%"]}
                    bgColor="brand.error"
                    border={"1px"}
                    borderColor="brand.accent"
                    color="brand.black"
                    fontSize={["12px", null, "16px"]}
                    fontWeight="500"
                >
                    <Text>
                        dsjskjslkd
                        {message}
                    </Text>
                    <Flex
                        align={"center"}
                        bgImg="/closeBg.svg"
                        bgPos={"center"}
                        bgSize="contain"
                        cursor={"pointer"}
                        bgRepeat="no-repeat"
                    >
                        <Icon
                            as={IoMdCloseCircleOutline}
                            w="20px"
                            h="20px"
                            color="brand.accent"
                        />
                    </Flex>
                </Flex>
            ) : (
                ""
            )}

            {success ? (
                <Box color="white" p={3} bg="blue.500">
                    {message}
                </Box>
            ) : (
                ""
            )}
        </>
    );
}
