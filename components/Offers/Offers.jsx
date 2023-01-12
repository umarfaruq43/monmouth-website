import {
    Box,
    Button,
    Flex,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import OfferDetails from "./OfferDetails";

const Offers = () => {
    const [filter, setFilter] = useState("All Offers");
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <Flex align="center" mb="24px" justify="space-between">
                <Text fontWeight={"700"} color="brand.black" fontSize={"24px"}>
                    Offers
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
                                        All Offers
                                    </MenuItem>
                                    <MenuItem
                                        minH="40px"
                                        onClick={() =>
                                            setFilter("Paid & Shipped")
                                        }
                                    >
                                        Accepted
                                    </MenuItem>

                                    <MenuItem
                                        minH="40px"
                                        onClick={() =>
                                            setFilter(
                                                "Paid & Awaiting Shipment"
                                            )
                                        }
                                    >
                                        Countered
                                    </MenuItem>

                                    <MenuItem
                                        minH="40px"
                                        onClick={() => setFilter("Unpaid")}
                                    >
                                        Rejected
                                    </MenuItem>

                                    <MenuItem
                                        minH="40px"
                                        onClick={() =>
                                            setFilter("Offer Awaiting Review")
                                        }
                                    >
                                        Awaiting Response
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Flex>
                    <Input w="210px" type="date" name="" id="" />
                </Flex>
            </Flex>

            <Box mt="24px">
                {obj.map((offer, i) => {
                    return <OfferDetails key={i} offer={offer} />;
                })}
            </Box>
        </Box>
    );
};

export default Offers;

const obj = [
    {
        name: "Smith George",
        image: "/card.svg",
        type: "eBay",
        date: "9:30 am, 10 Dec, 2022",
        text: "Smith George has requested to buy 2021 Elite #19 Isaiah Stewart Asia Hyper Gold SGC 10",
        price: "25.67",
        offer: "24.50",
        accepted: false,
        rejected: false,
        countered: false,
        counterPrice: "",
        status: "waiting",
    },

    {
        name: "Wilson Hilary",
        image: "/card.svg",
        type: "amazon",
        date: "9:30 am, 10 Dec, 2022",
        text: "Smith George has requested to buy 2021 Elite #19 Isaiah Stewart Asia Hyper Gold SGC 10",
        price: "25.67",
        offer: "25.50",
        accepted: true,
        rejected: false,
        countered: false,
        counterPrice: "",
        status: "accepted",
    },

    {
        name: "Richard Wesley",
        image: "/card.svg",
        type: "shopify",
        date: "9:30 am, 10 Dec, 2022",
        text: "Smith George has requested to buy 2021 Elite #19 Isaiah Stewart Asia Hyper Gold SGC 10",
        price: "25.67",
        offer: "25.50",
        accepted: false,
        rejected: false,
        countered: false,
        counterPrice: "",
        status: "waiting",
    },
    {
        name: "Jaden South",
        image: "/card.svg",
        type: "amazon",
        date: "9:30 am, 10 Dec, 2022",
        text: "Jaden South has requested to buy 2003 Upper Deck #13 LeBron James Phenomenal Beginnings PSA 10",
        price: "25.67",
        offer: "25.50",
        accepted: false,
        rejected: true,
        countered: false,
        counterPrice: "",
        status: "rejected",
    },

    {
        name: "Smith George",
        image: "/card.svg",
        type: "eBay",
        date: "9:30 am, 10 Dec, 2022",
        text: "Smith George has requested to buy 1999 Pokemon Base Set #12 Ninetales Holo SGC 7",
        price: "25.67",
        offer: "25.50",
        accepted: false,
        rejected: false,
        countered: true,
        counterPrice: "25.00",
        status: "countered",
    },
];
