import {
    Box,
    Button,
    Flex,
    Switch,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import SetTimeModal from "./SetTimeModal";

const Notification = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <SetTimeModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Box mt="48px" id="notification">
                <Text
                    fontSize={"20px"}
                    color="brand.lightBlack"
                    fontWeight={700}
                >
                    Notification
                </Text>
                <Box mt="8px" py="24px">
                    {/* Email notification  */}
                    <Flex justify={"space-between"} align="center">
                        <Box>
                            <Text
                                fontSize={"16px"}
                                color="brand.black"
                                fontWeight={600}
                                mb="8px"
                            >
                                {" "}
                                Email Notifications
                            </Text>
                            <Text
                                fontSize={"14px"}
                                color="brand.lightGray"
                                fontWeight={600}
                                className="sofia"
                            >
                                {" "}
                                Send me a mail for update in price and important
                                information.
                            </Text>
                        </Box>
                        <Box>
                            <Switch />
                        </Box>
                    </Flex>

                    {/* Cards Update  */}
                    <Flex justify={"space-between"} align="center" mt="32px">
                        <Box>
                            <Text
                                fontSize={"16px"}
                                color="brand.black"
                                fontWeight={600}
                                mb="8px"
                            >
                                {" "}
                                Cards Update Time
                            </Text>
                            <Text
                                fontSize={"14px"}
                                color="brand.lightGray"
                                fontWeight={600}
                                className="sofia"
                                maxW="520px"
                            >
                                {" "}
                                Change the time the cards are automatically
                                updated to the database from your portfolio
                            </Text>
                        </Box>
                        <Box>
                            <Button
                                color="brand.white"
                                bgColor="brand.primary"
                                px="26px"
                                py="6px"
                                fontSize="14px"
                                _hover={{}}
                                _active={{}}
                                _focus={{}}
                                onClick={onOpen}
                            >
                                Change
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};

export default Notification;
