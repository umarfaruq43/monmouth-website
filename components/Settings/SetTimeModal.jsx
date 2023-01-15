import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Text,
    Flex,
    Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { CustomToast } from "../Alert";

function SetTimeModal({ isOpen, onOpen, onClose }) {
    const [sufix, setSufix] = useState("AM");
    const { success } = CustomToast();
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                closeOnOverlayClick={false}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <Box
                        bgColor={"brand.White"}
                        maxW="377px"
                        mx="auto"
                        // h="256px"
                        p={["12px", , "24px"]}
                    >
                        <Box p={["12px", , "24px"]}>
                            <Text
                                fontSize="14px"
                                fontWeight="500"
                                textTransform={"uppercase"}
                                mb="24px"
                            >
                                Enter time
                            </Text>
                            <Box>
                                <Flex gap="12px">
                                    <Box>
                                        <Input
                                            maxLength={2}
                                            max="2"
                                            w="96px"
                                            pl="18px"
                                            h="80px"
                                            fontSize={"56px"}
                                            className="sofia"
                                            _active={{}}
                                            _focus={{}}
                                            type="number"
                                        />
                                    </Box>
                                    <Text fontSize={"54px"}>:</Text>

                                    <Box>
                                        <Input
                                            maxLength={2}
                                            max="2"
                                            w="96px"
                                            pl="15px"
                                            h="80px"
                                            fontSize={"56px"}
                                            className="sofia"
                                            _active={{}}
                                            _focus={{}}
                                            type="number"
                                        />
                                    </Box>
                                    <Box>
                                        <Button
                                            _focus={{}}
                                            _active={{}}
                                            _hover={{}}
                                            borderBottomRadius="0"
                                            // border="1px"
                                            // borderColor="brand.grey_3"
                                            boxShadow={"md"}
                                            bgColor={
                                                sufix === "AM"
                                                    ? "brand.light_1"
                                                    : "brand.white"
                                            }
                                            color={
                                                sufix === "AM"
                                                    ? "brand.primary"
                                                    : "brand.grey_2"
                                            }
                                            onClick={() => setSufix("AM")}
                                        >
                                            AM
                                        </Button>
                                        <Button
                                            _focus={{}}
                                            _active={{}}
                                            _hover={{}}
                                            borderTopRadius="0"
                                            boxShadow={"md"}
                                            bgColor={
                                                sufix === "PM"
                                                    ? "brand.light_1"
                                                    : "brand.white"
                                            }
                                            color={
                                                sufix === "PM"
                                                    ? "brand.primary"
                                                    : "brand.grey_2"
                                            }
                                            onClick={() => setSufix("PM")}
                                        >
                                            PM
                                        </Button>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                        <Box textAlign={"right"} mt="24px">
                            <Button
                                _focus={{}}
                                _active={{}}
                                _hover={{}}
                                color={"brand.primary"}
                                bgColor={"transparent"}
                                onClick={onClose}
                            >
                                CANCLE
                            </Button>
                            <Button
                                _focus={{}}
                                _active={{}}
                                _hover={{}}
                                bgColor={"brand.primary"}
                                color={"white"}
                                px="32px"
                                py="10px"
                                ml="8px"
                                onClick={() => {
                                    success({
                                        title: "Cards Update Time changed successfully.",
                                    });
                                    onClose();
                                }}
                            >
                                Ok
                            </Button>
                        </Box>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    );
}

export default SetTimeModal;
