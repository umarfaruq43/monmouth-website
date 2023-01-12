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
import { useState } from "react";

const OfferdrawerCard = ({ offer }) => {
    const [counterOffer, setCounterOffer] = useState(false);
    const [counterOfferValue, setCounterOfferValue] = useState("");
    // const [counterPrice, setCounterPrice] = useState("");

    const enableCounterOffer = (e) => {
        setCounterOffer(true);
    };

    const disableCounterOffer = () => {
        setCounterOffer(false);
    };
    const savecounterOffer = () => {
        offer.counterPrice = counterOfferValue;
        setCounterOffer(false);
    };
    return (
        <Box as="form" mt="24px">
            <Flex gap="24px">
                <Box>
                    <Image
                        src={offer && offer.image}
                        borderRadius={"4px"}
                        w="64px"
                        h="64px"
                        maxW="64px"
                        maxH="64px"
                        objectFit="cover"
                        alt=""
                    />
                </Box>
                <Box flex="1">
                    <Flex align="center" justify={"space-between"}>
                        <Text fontWeight="600" fontSize="16px">
                            {offer && offer.name}
                        </Text>
                        <Flex align="center">
                            <Box
                                w="7px"
                                h="7px"
                                p="0"
                                // display={"inline-block"}
                                borderRadius={"full"}
                                bgColor="brand.accent"
                                mr="10px"
                            ></Box>
                            <Text className="sofia">
                                {" "}
                                {offer && offer.type}{" "}
                            </Text>
                        </Flex>
                    </Flex>
                    <Text
                        mt="16px"
                        noOfLines={2}
                        fontWeight="400"
                        fontSize="16px"
                        className="sofia"
                        color="brand.lightBlack"
                    >
                        {offer && offer.sms}
                    </Text>

                    {/* Pricing section  */}

                    <Flex mt="24px" gap="40px">
                        {/* Price  */}
                        <Box>
                            <Text
                                color="brand.lightGray"
                                className="sofia"
                                fontSize="14px"
                            >
                                Price:
                            </Text>
                            <Text
                                color="brand.lightBlack"
                                className="sofia"
                                fontWeight="600"
                                fontSize="20px"
                                mt="18px"
                            >
                                ${offer && offer.price}
                            </Text>
                        </Box>

                        {/* Offers */}
                        <Box>
                            <Text
                                color="brand.lightGray"
                                className="sofia"
                                fontSize="14px"
                            >
                                Offer:
                            </Text>
                            <Text
                                color="brand.primary"
                                className="sofia"
                                fontWeight="600"
                                fontSize="20px"
                                mt="18px"
                            >
                                {" "}
                                ${offer && offer.offer}
                            </Text>
                        </Box>

                        {/* Counter Offer */}

                        {counterOffer ? (
                            <Box>
                                <Text
                                    color="brand.lightGray"
                                    className="sofia"
                                    mb="8px"
                                    fontSize={"14px"}
                                >
                                    Counter Price
                                </Text>
                                <Input
                                    color="brand.primary"
                                    className="sofia"
                                    fontWeight="600"
                                    fontSize="20px"
                                    px="8px"
                                    type="number"
                                    maxW="90px"
                                    borderRadius={"none"}
                                    onChange={(e) =>
                                        setCounterOfferValue(e.target.value)
                                    }
                                />
                            </Box>
                        ) : (
                            <Box>
                                {offer.counterPrice === "" ? (
                                    ""
                                ) : (
                                    <Box>
                                        <Text
                                            color="brand.lightGray"
                                            className="sofia"
                                            mb="8px"
                                            fontSize={"14px"}
                                        >
                                            Counter Price
                                        </Text>

                                        <Text
                                            color="brand.primary"
                                            className="sofia"
                                            fontWeight="600"
                                            fontSize="20px"
                                            mt="18px"
                                        >
                                            ${offer && offer.counterPrice}
                                        </Text>
                                    </Box>
                                )}
                            </Box>
                        )}
                    </Flex>

                    {counterOffer ? (
                        <Flex gap="16px" mt="32px">
                            <Button
                                color="brand.primary"
                                bgColor="brand.softGray"
                                px="26px"
                                py="6px"
                                fontSize="14px"
                                _hover={{}}
                                _active={{}}
                                _focus={{}}
                                onClick={disableCounterOffer}
                            >
                                Cancle
                            </Button>

                            <Button
                                color="brand.white"
                                bgColor="brand.primary"
                                px="26px"
                                py="6px"
                                fontSize="14px"
                                _hover={{}}
                                _active={{}}
                                _focus={{}}
                                onClick={savecounterOffer}
                            >
                                Save
                            </Button>
                        </Flex>
                    ) : (
                        <Flex mt="32px" gap="10px">
                            <Button
                                color="brand.accent"
                                bgColor="brand.error_1"
                                px="26px"
                                py="6px"
                                fontSize="14px"
                                _hover={{}}
                                _active={{}}
                                _focus={{}}
                            >
                                Reject
                            </Button>

                            <Button
                                color="brand.success"
                                bgColor="brand.success_1"
                                px="26px"
                                py="6px"
                                fontSize="14px"
                                _hover={{}}
                                _active={{}}
                                _focus={{}}
                            >
                                Accept
                            </Button>

                            <Button
                                color="brand.primary"
                                bgColor="brand.light_1"
                                px="16px"
                                py="6px"
                                fontSize="14px"
                                _hover={{}}
                                _active={{}}
                                _focus={{}}
                                onClick={enableCounterOffer}
                            >
                                Counter Offer
                            </Button>
                        </Flex>
                    )}
                </Box>
            </Flex>
        </Box>
    );
};

export default OfferdrawerCard;
