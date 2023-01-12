import React from "react";

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
    Flex,
    Image,
    Text,
    Icon,
} from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { format } from "date-fns";
import { CustomToast } from "./Alert";
const OrderDetailsModal = ({ isOpen, onOpen, onClose, details }) => {
    const { success } = CustomToast();

    const month = format(new Date(details && details.date), "MMM");
    const fullMonth = format(new Date(details && details.date), "MMMMMM");
    const time = format(new Date(details && details.date), "p");
    const year = format(new Date(details && details.date), "yyy");
    const day = format(new Date(details && details.date), "dd");
    const fullDay = format(new Date(details && details.date), "do");

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                <ModalOverlay />
                <Box px="16px">
                    <ModalContent py="32px">
                        <ModalHeader>Order Details</ModalHeader>
                        <ModalCloseButton mt="30px" />
                        <ModalBody>
                            <Box py="16px" pl="16px" bgColor="brand.light_1">
                                <Flex align="center">
                                    <Flex maxW="361px" gap="16px">
                                        <Image
                                            src={details && details.image}
                                            alt={`${
                                                details && details.title
                                            } image`}
                                            maxH="48px"
                                            minH="48px"
                                            w="100%"
                                            h="100%"
                                            maxW="48px"
                                            borderRadius={"10px"}
                                            objectFit="cover"
                                        />

                                        <Text
                                            fontWeight="600"
                                            fontSize="18px"
                                            className="sofia"
                                            noOfLines={2}
                                        >
                                            {/* {details && details.card_title} */}
                                            2021 Elite #19 Isaiah Stewart Asia
                                            Hyper Gold SGC 10
                                        </Text>
                                    </Flex>
                                    <Flex align="center" gap="9px">
                                        <Icon
                                            as={AiOutlineClockCircle}
                                            fontSize="18px"
                                            color="brand.lightBlack"
                                        />
                                        <Text
                                            fontWeight="600"
                                            fontSize="18px"
                                            color="brand.lightBlack"
                                            className="sofia"
                                        >
                                            {/* 9:30am, 10 Dec, 2022 */}
                                            {`${time}, ${day}, ${month}, ${year}`}
                                        </Text>
                                    </Flex>
                                </Flex>
                                <Text
                                    color="brand.lightGray"
                                    fontWeight="700"
                                    className="sofia"
                                    fontSize="16px"
                                    mt="17px"
                                >
                                    Order ID: {details && details.id}
                                </Text>
                            </Box>
                            <Box mt="16px">
                                <Flex
                                    gap="32px"
                                    justify="space-between"
                                    py="5px"
                                >
                                    <Text
                                        color="brand.lightGray"
                                        fontWeight="500"
                                        className="sofia"
                                        fontSize="16px"
                                    >
                                        Date Sold:
                                    </Text>
                                    <Text
                                        color="brand.black"
                                        fontWeight="600"
                                        className="sofia"
                                        fontSize="16px"
                                    >
                                        {fullMonth} {fullDay}, {year}
                                    </Text>
                                </Flex>

                                {/* **************************** */}

                                <Flex
                                    gap="32px"
                                    justify="space-between"
                                    py="5px"
                                    mt="25px"
                                >
                                    <Text
                                        color="brand.lightGray"
                                        fontWeight="500"
                                        className="sofia"
                                        fontSize="16px"
                                    >
                                        Customer name:
                                    </Text>
                                    <Text
                                        color="brand.black"
                                        fontWeight="600"
                                        className="sofia"
                                        fontSize="16px"
                                    >
                                        {details && details.name}
                                    </Text>
                                </Flex>
                                {/* ************************ */}
                                <Flex
                                    gap="32px"
                                    justify="space-between"
                                    py="5px"
                                    mt="25px"
                                >
                                    <Text
                                        color="brand.lightGray"
                                        fontWeight="500"
                                        className="sofia"
                                        fontSize="16px"
                                    >
                                        Item Status:
                                    </Text>
                                    <Box>
                                        {details &&
                                        details.status === "delay" ? (
                                            <Flex
                                                fontWeight={"600"}
                                                color="brand.black"
                                                bgColor="brand.light_1"
                                                px="6px"
                                                py="8px"
                                                w="100%"
                                                maxW="200px"
                                                borderRadius="5px"
                                                className="sofia"
                                                mx="auto"
                                                align="center"
                                                justify="center"
                                            >
                                                <Box
                                                    w="7px"
                                                    h="7px"
                                                    display={"inline-block"}
                                                    bgColor="brand.primary"
                                                    borderRadius={"full"}
                                                    mr="10px"
                                                ></Box>
                                                <Text className="sofia">
                                                    Offer Awaiting Review
                                                </Text>
                                            </Flex>
                                        ) : (
                                            ""
                                        )}
                                        {details &&
                                        details.status === "success" ? (
                                            <Flex
                                                fontWeight={"600"}
                                                color="brand.black"
                                                bgColor="brand.dimSuccess"
                                                px="6px"
                                                py="8px"
                                                w="100%"
                                                maxW="200px"
                                                borderRadius="5px"
                                                className="sofia"
                                                mx="auto"
                                                align="center"
                                                justify="center"
                                            >
                                                <Box
                                                    w="7px"
                                                    h="7px"
                                                    display={"inline-block"}
                                                    borderRadius={"full"}
                                                    bgColor="brand.success"
                                                    mr="10px"
                                                ></Box>
                                                <Text className="sofia">
                                                    Paid & Shipped{" "}
                                                </Text>
                                            </Flex>
                                        ) : (
                                            ""
                                        )}
                                        {details &&
                                        details.status === "unpaid" ? (
                                            <Flex
                                                fontWeight={"600"}
                                                color="brand.black"
                                                bgColor="brand.fadeError"
                                                px="6px"
                                                py="8px"
                                                w="100%"
                                                maxW="200px"
                                                borderRadius="5px"
                                                className="sofia"
                                                mx="auto"
                                                align="center"
                                                justify="center"
                                            >
                                                <Box
                                                    w="7px"
                                                    h="7px"
                                                    display={"inline-block"}
                                                    borderRadius={"full"}
                                                    bgColor="brand.accent"
                                                    mr="10px"
                                                ></Box>
                                                <Text className="sofia">
                                                    Unpaid{" "}
                                                </Text>
                                            </Flex>
                                        ) : (
                                            ""
                                        )}

                                        {details &&
                                        details.status === "pending" ? (
                                            <Flex
                                                fontWeight={"600"}
                                                color="brand.black"
                                                bgColor="brand.warningFade"
                                                px="6px"
                                                py="8px"
                                                w="100%"
                                                maxW="200px"
                                                borderRadius="5px"
                                                className="sofia"
                                                mx="auto"
                                                align="center"
                                                justify="center"
                                            >
                                                <Box
                                                    w="7px"
                                                    h="7px"
                                                    // display={"inline-block"}
                                                    borderRadius={"full"}
                                                    bgColor="brand.warning"
                                                    mr="10px"
                                                ></Box>
                                                <Text className="sofia">
                                                    Paid & Awaiting Shipment{" "}
                                                </Text>
                                            </Flex>
                                        ) : (
                                            ""
                                        )}
                                    </Box>
                                </Flex>

                                {/* ********************** */}
                                <Flex
                                    gap="32px"
                                    justify="space-between"
                                    py="5px"
                                    mt="25px"
                                >
                                    <Text
                                        color="brand.lightGray"
                                        fontWeight="500"
                                        className="sofia"
                                        fontSize="16px"
                                    >
                                        Price:
                                    </Text>
                                    <Text
                                        color="brand.success"
                                        fontWeight="700"
                                        className="sofia"
                                        fontSize="24px"
                                    >
                                        {details && details.price}
                                    </Text>
                                </Flex>
                            </Box>

                            <Box mt="32px">
                                <Button
                                    size="lg"
                                    w="100%"
                                    bgColor={"brand.primary"}
                                    color="white"
                                    _hover={{ bg: "brand.primary" }}
                                    _focus={{ bg: "brand.primary" }}
                                    _active={{ bg: "brand.primary" }}
                                    onClick={() => {
                                        onClose();
                                        success({ message: "Card Unsold" });
                                    }}
                                >
                                    {" "}
                                    Unsell Card
                                </Button>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Box>
            </Modal>
        </>
    );
};

export default OrderDetailsModal;
