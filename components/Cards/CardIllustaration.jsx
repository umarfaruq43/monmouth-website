import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Amazon from "./Amazon";
import EbayForm from "./EbayForm";
import Shopify from "./Shopify";
import Walmart from "./Walmart";

const CardIllustaration = ({ cardDetails }) => {
    const img = cardDetails.images && cardDetails.images.split(",");
    console.log("cardDetails", cardDetails);
    return (
        <Box>
            <Flex flexDir={["column", , "row"]} gap="26px">
                {/* Image Sub component  */}
                <Box>
                    <Flex gap="16px">
                        <Flex flexDir="column" justify="center" gap="16px">
                            <Image
                                src={img && img[0]}
                                alt="card"
                                w="100%"
                                h="100%"
                                maxW="56px"
                                maxH="56px"
                                display="block"
                                objectFit={"cover"}
                            />

                            <Image
                                src={img && img[1]}
                                alt="card"
                                w="100%"
                                h="100%"
                                maxW="56px"
                                maxH="56px"
                                display="block"
                                objectFit={"cover"}
                            />
                        </Flex>
                        <Box>
                            <Image
                                src={img && img[0]}
                                alt="card"
                                w="100%"
                                h="100%"
                                maxW="224px"
                                maxH="280px"
                                objectFit={"cover"}
                            />
                        </Box>
                    </Flex>
                </Box>
                <Box flex="1">
                    <Flex gap="24px">
                        <Text
                            maxW="460px"
                            fontWeight="600"
                            fontSize="24px"
                            // className="sofia"
                            noOfLines={2}
                        >
                            {cardDetails && cardDetails.groupName}
                        </Text>
                        <Box>
                            {cardDetails.status === "pending" ? (
                                <Button
                                    color="brand.grey_1"
                                    _readOnly={true}
                                    px="31px"
                                    py="8px"
                                >
                                    {cardDetails && cardDetails.status}
                                </Button>
                            ) : (
                                ""
                            )}

                            {cardDetails.status === "sold" ? (
                                <Button
                                    color="brand.success"
                                    bgColor="brand.lightSuccess"
                                    _readOnly={true}
                                    px="31px"
                                    py="8px"
                                >
                                    Sold
                                </Button>
                            ) : (
                                ""
                            )}

                            {cardDetails.status === "listed for sale" ? (
                                <Button
                                    color="brand.success"
                                    bgColor="brand.lightSuccess"
                                    _readOnly={true}
                                    px="31px"
                                    py="8px"
                                >
                                    listed for sale
                                </Button>
                            ) : (
                                ""
                            )}
                        </Box>
                    </Flex>
                    {/* Card Shop Info  */}
                    <Flex
                        // align={"center"}
                        mt="24px"
                        justifyContent="space-between"
                        w="100%"
                        flexWrap={"wrap"}
                        gap="20px"
                    >
                        <EbayForm currentCardDetails={cardDetails} />

                        <Box
                            border="1px"
                            h="80px"
                            borderColor="brand.grey_3"
                            display={["none", , "block"]}
                        ></Box>

                        <Amazon currentCardDetails={cardDetails} />

                        <Box
                            border="1px"
                            h="80px"
                            borderColor="brand.grey_3"
                            display={["none", , "block"]}
                        ></Box>

                        <Shopify currentCardDetails={cardDetails} />

                        <Box
                            border="1px"
                            h="80px"
                            borderColor="brand.grey_3"
                            display={["none", , "block"]}
                        ></Box>
                        <Walmart currentCardDetails={cardDetails} />
                    </Flex>
                </Box>
            </Flex>
            <Box mt="32px">
                {true ? (
                    <Button
                        py="20px"
                        px="60px"
                        fontSize={"18px"}
                        bgColor="brand.primary"
                        color="brand.white"
                        _active={{ bgColor: "brand.primary" }}
                        _hover={{ bgColor: "brand.primary" }}
                    >
                        Move to Marketplace
                    </Button>
                ) : (
                    <Button
                        py="20px"
                        px="60px"
                        fontSize={"18px"}
                        bgColor="brand.primary"
                        color="brand.white"
                        _active={{ bgColor: "brand.primary" }}
                        _hover={{ bgColor: "brand.primary" }}
                    >
                        Unsell Card
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default CardIllustaration;
