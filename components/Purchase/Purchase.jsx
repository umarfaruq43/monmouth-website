import {
    Box,
    Button,
    Flex,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import PurchaseTable from "../Tables/PurchaseTable";
import { purchase_details } from "../purchaseData";
import Offerdrawer from "../Offers/Offerdrawer";
const Purchase = () => {
    const [filter, setFilter] = useState("All Purchases");
    

    let allPurchases = purchase_details;
    let success = purchase_details.filter((item) => item.status === "success");

    let delay = purchase_details.filter((item) => item.status === "delay");

    let unpaid = purchase_details.filter((item) => item.status === "unpaid");

    let pending = purchase_details.filter((item) => item.status === "pending");

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <Offerdrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            {/* *** The Header Start *** */}
            <Flex align="center" mb="24px" justify="space-between">
                <Text fontWeight={"700"} color="brand.black" fontSize={"24px"}>
                    Purchases
                </Text>

                <Flex gap="24px">
                    <Flex align="center">
                        <Text
                            fontSize={["14px"]}
                            mr="8px"
                            fontWeight="600"
                            gap="8px"
                        >
                            Filter:
                        </Text>
                        <Box>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={<FaChevronDown />}
                                    w="220px"
                                    textAlign="left"
                                    bg="transparent"
                                    fontWeight="500"
                                    fontSize={"14px"}
                                    _hover={{ bg: "transparent" }}
                                    _active={{ bg: "transparent" }}
                                    border="1px"
                                    borderColor="brand.light_2"
                                >
                                    {filter}
                                </MenuButton>
                                <MenuList maxW="210px">
                                    <MenuItem
                                        minH="48px"
                                        onClick={() =>
                                            setFilter("All Purchases")
                                        }
                                    >
                                        All Purchases
                                    </MenuItem>
                                    <MenuItem
                                        minH="40px"
                                        onClick={() =>
                                            setFilter("Paid & Shipped")
                                        }
                                    >
                                        Paid & Shipped
                                    </MenuItem>

                                    <MenuItem
                                        minH="40px"
                                        onClick={() =>
                                            setFilter(
                                                "Paid & Awaiting Shipment"
                                            )
                                        }
                                    >
                                        Paid & Awaiting Shipment
                                    </MenuItem>

                                    <MenuItem
                                        minH="40px"
                                        onClick={() => setFilter("Unpaid")}
                                    >
                                        Unpaid
                                    </MenuItem>

                                    <MenuItem
                                        minH="40px"
                                        onClick={() =>
                                            setFilter("Offer Awaiting Review")
                                        }
                                    >
                                        Offer Awaiting Review
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Flex>
                    <Button
                        bgColor="brand.primary"
                        color="brand.white"
                        px="24px"
                        py="6px"
                        _hover={{ bg: "brand.primary" }}
                        _active={{ bg: "brand.primary" }}
                        onClick={onOpen}
                    >
                        View Offers
                    </Button>
                </Flex>
            </Flex>
            {/* *** The Header End *** */}
            <Box>
                {filter === "All Purchases" ? (
                    <PurchaseTable purchase_details={allPurchases} />
                ) : (
                    ""
                )}

                {filter == "Paid & Shipped" ? (
                    <PurchaseTable purchase_details={success} />
                ) : (
                    ""
                )}

                {filter === "Offer Awaiting Review" ? (
                    <PurchaseTable purchase_details={delay} />
                ) : (
                    ""
                )}

                {filter === "Unpaid" ? (
                    <PurchaseTable purchase_details={unpaid} />
                ) : (
                    ""
                )}

                {filter === "Paid & Awaiting Shipment" ? (
                    <PurchaseTable purchase_details={pending} />
                ) : (
                    ""
                )}
            </Box>
        </Box>
    );
};

export default Purchase;
