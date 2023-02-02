import React from "react";
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Lorem,
    Flex,
    Image,
    Text,
    Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

const AnalyticModal = ({ isOpen, onOpen, onClose, values }) => {
    // console.log("values", values);
    return (
        <div>
            <Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent px="32px" pt="18px">
                        <ModalHeader borderBottomWidth={"1px"} pb="16px" px="0">
                            Transaction Details
                        </ModalHeader>
                        <ModalCloseButton
                            top="34px"
                            right="32px"
                            
                        />
                        <ModalBody p="0">
                            <Box py="24px">
                                <Flex
                                    h="76px"
                                    gap="28px"
                                    px="16px"
                                    py="14px"
                                    bgColor="brand.light_1"
                                >
                                    <Box borderRadius={"10px"} overflow="hidden">
                                        <Image
                                            src={values && values.image}
                                            objectFit={"cover"}
                                            alt=""
                                            maxW="48px"
                                            maxH="48px"
                                            w="48px"
                                            h="48px"
                                            
                                        />
                                    </Box>
                                    <Box>
                                        <Text
                                            fontSize="16px"
                                            fontWeight="600"
                                            className="sofia"
                                            maxW="262px"
                                            noOfLines={2}
                                        >
                                            {values && values.card_title}
                                        </Text>
                                    </Box>
                                </Flex>
                                <Box mt="24px">
                                    <Box>
                                        <Text
                                            fontSize="14px"
                                            fontWeight="400"
                                            className="sofia"
                                            color="brand.lighterGray"
                                        >
                                            Date Sold:{" "}
                                        </Text>
                                        <Text
                                            color="brand.black"
                                            fontSize="16px"
                                            fontWeight="600"
                                        >
                                            November 18th, 2022
                                        </Text>
                                    </Box>

                                    {/* Action House   */}

                                    <Box mt="16px">
                                        <Text
                                            fontSize="14px"
                                            fontWeight="400"
                                            className="sofia"
                                            color="brand.lighterGray"
                                        >
                                            Auction House:
                                        </Text>
                                        <Text
                                            color="brand.black"
                                            fontSize="16px"
                                            fontWeight="600"
                                        >
                                            {values && values.auction_house}
                                        </Text>
                                    </Box>

                                    {/* Action Type   */}

                                    <Box mt="16px">
                                        <Text
                                            fontSize="14px"
                                            fontWeight="400"
                                            className="sofia"
                                            color="brand.lighterGray"
                                        >
                                            Auction Type:
                                        </Text>
                                        <Text
                                            color="brand.black"
                                            fontSize="16px"
                                            fontWeight="600"
                                        >
                                            {values && values.auction_type}
                                        </Text>
                                    </Box>

                                    {/* Id   */}

                                    <Box mt="16px">
                                        <Text
                                            fontSize="14px"
                                            fontWeight="400"
                                            className="sofia"
                                            color="brand.lighterGray"
                                        >
                                            Card ID:
                                        </Text>
                                        <Text
                                            color="brand.black"
                                            fontSize="16px"
                                            fontWeight="600"
                                        >
                                            {values && values.id}
                                        </Text>
                                    </Box>

                                    {/* URL   */}

                                    <Box mt="16px">
                                        <Text
                                            fontSize="14px"
                                            fontWeight="400"
                                            className="sofia"
                                            color="brand.lighterGray"
                                        >
                                            Url:
                                        </Text>
                                        <Link
                                            as={NextLink}
                                            color="brand.primary"
                                            fontSize="16px"
                                            fontWeight="600"
                                            href={values && values.url}
                                            noOfLines={3}
                                        >
                                            {values && values.url}
                                        </Link>
                                    </Box>

                                    {/* Price   */}

                                    <Box mt="16px">
                                        <Text
                                            fontSize="14px"
                                            fontWeight="400"
                                            className="sofia"
                                            color="brand.lighterGray"
                                        >
                                            Price:
                                        </Text>
                                        <Text
                                            color="brand.black"
                                            fontSize="24px"
                                            fontWeight="600"
                                            className="sofia"
                                        >
                                            {values && values.price}
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </div>
    );
};

export default AnalyticModal;
