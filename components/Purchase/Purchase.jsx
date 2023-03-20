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
import React, { useEffect, useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import PurchaseTable from "../Tables/PurchaseTable";
import { purchase_details } from "../purchaseData";
import Offerdrawer from "../Offers/Offerdrawer";
const Purchase = () => {
    const [loading, setLoading] = useState(false);
    const [purchaseDetails, setPurchaseDetails] = useState([]);

    useEffect(() => {
        const fetchShopifyOrders = () => {
            // Set the API endpoint URL
            const url = `https://monmouth.onrender.com/v1/card/get-shopify-orders`;

            // Get the user bearer token
            const userToken = localStorage.getItem("token");

            // Set the headers with the user token
            const headers = {
                Authorisation: "Bearer " + userToken,
                mode: "no-cors",
                "X-Shopify-Access-Token":
                    "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",
            };
            // set fetching true
            setLoading(true);
            console.log(" fetching");

            // Fetch the data with the headers
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false);
                    console.log("Done fetching");

                    console.log("Purchases", data && data);
                    setPurchaseDetails(data && data.data);
                })
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error
                    );
                    setLoading(false);
                });
        };

        const fetchEbayOrders = () => {
            // Set the API endpoint URL
            const url = `https://monmouth.onrender.com/v1/card/get-ebay-orders`;

            // Get the user bearer token
            const userToken = localStorage.getItem("token");

            // Set the headers with the user token
            const headers = {
                Authorisation: "Bearer " + userToken,
                mode: "no-cors",
                "X-Shopify-Access-Token":
                    "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",
            };
            // set fetching true
            setLoading(true);
            console.log(" fetching");

            // Fetch the data with the headers
            fetch(url, {
                method: "GET",
                headers: headers,
            })
                .then((res) => res.json())
                .then((data) => {
                    setLoading(false);
                    console.log("Done fetching");

                    console.log("Purchases", data && data);
                    setPurchaseDetails(data && data.data);
                })
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error
                    );
                    setLoading(false);
                });
        };

        fetchShopifyOrders();
        fetchEbayOrders();
    }, []);

    const [filter, setFilter] = useState("All Purchases");

    let allPurchases = purchase_details;
    let success = purchase_details.filter((item) => item.status === "success");

    // let delay = purchase_details.filter((item) => item.status === "delay");

    // let unpaid = purchase_details.filter((item) => item.status === "unpaid");

    // let pending = purchase_details.filter((item) => item.status === "pending");

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
                {loading
                    ? "Loading data...."
                    : purchaseDetails && (
                          <PurchaseTable purchase_details={purchaseDetails} />
                      )}

                {/* {filter === "All Purchases" ? (
                    <PurchaseTable purchase_details={purchase_details} />
                ) : (
                    ""
                )} */}
                {/* 
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
                )} */}
            </Box>
        </Box>
    );
};

export default Purchase;
