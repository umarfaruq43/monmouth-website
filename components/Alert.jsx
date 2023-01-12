import {
    Box,
    Flex,
    useToast,
    Icon,
    Text,
    CloseButton,
    Image,
} from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import {
    IoIosCloseCircle,
    IoIosWarning,
    IoMdCheckmarkCircle,
} from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";

export const CustomToast = () => {
    const toast = useToast();

    // types are: "success", "info", "warning", "error"

    const success = ({ title, message, closeAble = "true" }) => {
        toast({
            position: "top",
            render: () => (
                <Box
                    w="100%"
                    mt="20px"
                    py={4}
                    px={([2, 2, 2], [2, 4, 8])}
                    boxShadow="0px 6px 12px rgba(24, 39, 75, 0.12) "
                    bg="brand.success_1"
                    border="1px"
                    borderColor="brand.success"
                    borderRadius={"8px"}
                    // maxW={closeAble ? "556px" : "406.15px"}
                >
                    <Flex gap={["12px", "18px"]} w="100%" align={"center"}>
                        <Box maxW={"624px"} w="654px">
                            <Text
                                fontWeight={"600"}
                                // fontSize={[ "sm" : "lg"]}
                                color="success_500"
                                mb="1"
                                zIndex={"overlay"}
                            >
                                {title}
                            </Text>
                        </Box>

                        <Box>
                            <Icon
                                as={IoMdCheckmarkCircle}
                                w="22px"
                                h="22px"
                                color="brand.success"
                                onClick={() => toast.closeAll()}
                            />
                        </Box>
                    </Flex>
                </Box>
            ),
        });
    };

    const error = ({ title, message, closeAble = "true" }) => {
        toast({
            position: "top",
            render: () => (
                <Box
                    w="100%"
                    py={4}
                    px={closeAble ? [2, 2, 2] : [2, 4, 8]}
                    boxShadow="0px 6px 12px rgba(24, 39, 75, 0.12) "
                    bg="white"
                    // maxW={closeAble ? "556px" : "406.15px"}
                >
                    <Flex gap={closeAble ? "12px" : "18px"}>
                        <Box p="2px">
                            <Icon
                                as={IoIosCloseCircle}
                                w="22px"
                                h="22px"
                                color="error_500"
                            />
                        </Box>

                        <Box maxW={"410px"}>
                            <Text
                                fontWeight={"600"}
                                fontSize={closeAble ? "sm" : "lg"}
                                color="error_500"
                                mb="1"
                            >
                                {title}
                            </Text>
                            <Text
                                color="gray_500"
                                fontWeight={"400"}
                                flex={1}
                                fontSize="sm"
                                lineHeight={"160%"}
                            >
                                {message}
                            </Text>
                        </Box>

                        {closeAble ? (
                            <Box>
                                <CloseButton onClick={() => toast.closeAll()} />
                            </Box>
                        ) : (
                            ""
                        )}
                    </Flex>
                </Box>
            ),
        });
    };

    const info = ({ title, message, closeAble = "true" }) => {
        toast({
            position: "top",
            render: () => (
                <Box
                    w="100%"
                    py={4}
                    px={closeAble ? [2, 2, 2] : [2, 4, 8]}
                    boxShadow="0px 6px 12px rgba(24, 39, 75, 0.12) "
                    bg="white"
                    // maxW={closeAble ? "556px" : "406.15px"}
                >
                    <Flex gap={closeAble ? "12px" : "18px"}>
                        <Box p="2px">
                            <Icon
                                as={AiFillInfoCircle}
                                w="22px"
                                h="22px"
                                color="info_500"
                            />
                        </Box>

                        <Box maxW={"410px"}>
                            <Text
                                fontWeight={"600"}
                                fontSize={closeAble ? "sm" : "lg"}
                                color="info_500"
                                mb="1"
                            >
                                {title}
                            </Text>
                            <Text
                                color="gray_500"
                                fontWeight={"400"}
                                flex={1}
                                fontSize="sm"
                                lineHeight={"160%"}
                            >
                                {message}
                            </Text>
                        </Box>

                        {closeAble ? (
                            <Box>
                                <CloseButton onClick={() => toast.closeAll()} />
                            </Box>
                        ) : (
                            ""
                        )}
                    </Flex>
                </Box>
            ),
        });
    };
    const warning = ({ title, message, closeAble = "true" }) => {
        toast({
            position: "top",
            render: () => (
                <Box
                    w="100%"
                    py={4}
                    px={closeAble ? [2, 2, 2] : [2, 4, 8]}
                    boxShadow="0px 6px 12px rgba(24, 39, 75, 0.12) "
                    bg="white"
                    // maxW={closeAble ? "556px" : "406.15px"}
                >
                    <Flex gap={closeAble ? "12px" : "18px"}>
                        <Box p="2px">
                            <Icon
                                as={IoIosWarning}
                                w="22px"
                                h="22px"
                                color="warning_500"
                            />
                        </Box>

                        <Box maxW={"410px"}>
                            <Text
                                fontWeight={"600"}
                                fontSize={closeAble ? "sm" : "lg"}
                                color="warning_500"
                                mb="1"
                            >
                                {title}
                            </Text>
                            <Text
                                color="gray_500"
                                fontWeight={"400"}
                                flex={1}
                                fontSize="sm"
                                lineHeight={"160%"}
                            >
                                {message}
                            </Text>
                        </Box>

                        {closeAble ? (
                            <Box>
                                <CloseButton onClick={() => toast.closeAll()} />
                            </Box>
                        ) : (
                            ""
                        )}
                    </Flex>
                </Box>
            ),
        });
    };

    return { success, error, info, warning };
};
