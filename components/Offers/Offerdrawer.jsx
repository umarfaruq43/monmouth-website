import React, { useState } from "react";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Button,
    Text,
    Stack,
    Icon,
    Flex,
    useDisclosure,
    Image,
    Link,
    Input,
} from "@chakra-ui/react";
import NextLink from "next/link";
import OfferdrawerCard from "./OfferdrawerCard";

const Offerdrawer = ({ isOpen, onOpen, onClose }) => {
    return (
        <Box>
            <>
                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    overflow="hidden"
                    bg="red"
                >
                    <DrawerOverlay />
                    <DrawerContent px="12px" maxW="500px">
                        <DrawerCloseButton top="55px" />
                        <DrawerHeader color="brand.black" fontSize={"25px"}>
                            Offers
                        </DrawerHeader>

                        <DrawerBody>
                            {offers.map((offer, i) => {
                                return (
                                    <OfferdrawerCard key={i} offer={offer} />
                                );
                            })}
                        </DrawerBody>

                        {/* <DrawerFooter>
                            <Box bgcolor="red" textAlign="center">
                                <Link
                                    display="block"
                                    as={NextLink}
                                    href="/offer"
                                    color="brand.primary"
                                    textAlign={"center"}
                                >
                                    {" "}
                                    View more..{" "}
                                </Link>
                            </Box>
                        </DrawerFooter> */}
                    </DrawerContent>
                </Drawer>
            </>
        </Box>
    );
};

export default Offerdrawer;

const offers = [
    {
        image: "/card.png",
        name: "Smith George",
        type: "ebay",
        sms: "Smith George has requested to buy 2021 Elite #19 Isaiah Stewart Asia Hyper Gold SGC 10",
        price: 23.58,
        offer: 10.11,
        counterPrice: "",
    },

    {
        image: "/card.png",
        name: "Wilson Hilary",
        type: "Amazon",
        sms: "Wilson Hilary has requested to buy 2003 Upper Deck #13 LeBron James Phenomenal Beginnings PSA 10",
        price: 23.58,
        offer: 10.11,
        counterPrice: "20.67",
    },
];
