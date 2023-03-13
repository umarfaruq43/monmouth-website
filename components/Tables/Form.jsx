import {
    Box,
    Button,
    Flex,
    Icon,
    Input,
    InputGroup,
    InputLeftAddon,
    SimpleGrid,
    Spinner,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";

const Form = () => {
    const initial = {
        ebay: "77.00",
        amazon: "43.14",
        shopify: "46.00",
        walmart: "84.19",
        my_slabs: "51.01",
        alt: "88.16",
        becett: "45.55",
    };

    const [marketPrice, setMarketPrice] = useState(initial);
    const [isLoading, setIsLoading] = useState(false);
    const { ebay, amazon, shopify, walmart, my_slabs, alt, becett } =
        marketPrice;
    // console.log(ebay);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setMarketPrice({ ...marketPrice, [name]: value });
    };

    let isError = marketPrice === "";
    const [edit, setEdit] = useState(false);

    const inp = [
        {
            value: ebay,
            label: "eBay",
            name: "ebay",
            type: "text",
            error: "Input cannot be empty",
        },
        {
            value: amazon,
            label: "Amazon",
            name: "amazon",
            type: "text",
            error: "Input cannot be empty",
        },
        {
            value: shopify,
            label: "Shopify",
            name: "shopify",
            type: "text",
            error: "Input cannot be empty",
        },
        {
            value: walmart,
            label: "Walmart",
            name: "walmart",
            type: "text",
            error: "Input cannot be empty",
        },
        {
            value: my_slabs,
            label: "MySlabs",
            name: "my_slabs",
            type: "text",
            error: "Input cannot be empty",
        },
        {
            value: alt,
            label: "Alt",
            name: "alt",
            type: "text",
            error: "Input cannot be empty",
        },
        {
            value: becett,
            label: "Becett",
            name: "becett",
            type: "text",
            error: "Input cannot be empty",
        },
    ];

    const handlePriceEdit = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setEdit(false);
        }, 3000);
    };
    return (
        <Flex gap={["22px", "45px"]} as="form" flexWrap={"wrap"} align="center">
            {inp.map(({ value, label, name, type, error }) => {
                return (
                    <FormControl
                        key={name}
                        isInvalid={isError}
                        position="relative"
                        maxW="184px"
                    >
                        <FormLabel fontSize={"14px"} fontWeight="300">
                            {label}
                        </FormLabel>

                        <InputGroup>
                            <InputLeftAddon
                                pointerEvents="none"
                                color="black"
                                fontWeight={"700"}
                                fontSize="15px"
                            >
                                $
                            </InputLeftAddon>

                            <Input
                                type={type}
                                name={name}
                                value={value}
                                py="11px"
                                color="brand.black"
                                onChange={handleChange}
                                isReadOnly={edit ? false : true}
                                borderRadius="none"
                                fontWeight="700"
                                borderColor="brand.grey_3"
                                _focus={{
                                    boxShadow: "none",
                                    borderColor: "brand.grey_3",
                                }}
                                _readOnly={{
                                    border: "none",
                                    borderBottom: "1px solid #E9E9E9",
                                    boxShadow: "none",
                                }}
                            />
                        </InputGroup>
                        {!isError && (
                            <FormErrorMessage>{error}</FormErrorMessage>
                        )}
                    </FormControl>
                );
            })}

            <Box flex={1} alignSelf={"flex-end"} textAlign="right">
                {edit ? (
                    <Button
                        px="32px"
                        py="12px"
                        bgColor={"brand.primary"}
                        color="brand.white"
                        _focus={{ bg: "brand.primary" }}
                        _active={{ bg: "brand.primary" }}
                        _hover={{ bg: "brand.primary" }}
                        onClick={handlePriceEdit}
                    >
                        {isLoading ? (
                            <Spinner
                                thickness="1px"
                                speed="0.65s"
                                emptyColor="gray.200"
                                color="blue.500"
                                size="md"
                            />
                        ) : (
                            "Save"
                        )}
                    </Button>
                ) : (
                    <Button
                        px="32px"
                        py="12px"
                        bgColor={"brand.primary"}
                        color="brand.white"
                        _focus={{ bg: "brand.primary" }}
                        _hover={{ bg: "brand.primary" }}
                        _active={{ bg: "brand.primary" }}
                        onClick={() => setEdit(true)}
                    >
                        Edit
                    </Button>
                )}
            </Box>
        </Flex>
    );
};

export default Form;
