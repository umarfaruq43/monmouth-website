import { Box, Button, Image, Input, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiTag } from "react-icons/fi";
import { CustomToast } from "../Alert";

const Shopify = ({ currentCardDetails, value }) => {
    // console.log("value", currentCardDetails);
    const { success, error } = CustomToast();

    // value = currentCardDetails ?  : "00.00";
    const [isLoading, setIsLoading] = useState(false);
    const [updatePrice, setUpdatePrice] = useState(
        currentCardDetails.price || "0.00"
    );
    const [edit, setEdit] = useState(false);
    const handleChange = (e) => {
        setUpdatePrice(e.target.value);
    };
    const handleEdit = () => {
        if (confirm("Are you sure you want to edit the price?")) {
            setEdit(!edit);
        }
    };

    const editShopifyPrice = (cardId) => {
        const editedValues = {
            cardPrice: updatePrice,
            marketPlace: "shopify",
        };
        console.log("editedValues", editedValues);
        console.log("cardId", cardId);
        // Get the user bearer token
        const userToken = localStorage.getItem("token");

        const handleSuccessFullSignIn = (data) => {
            setEdit(!edit);
            setIsLoading(false);
            success({ title: data && data.message });
        };

        setIsLoading(true);
        fetch(`https://monmouth.onrender.com/v1/card/edit-price/${cardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorisation: "Bearer " + userToken,
            },
            body: JSON.stringify(editedValues),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);

                data && data.success
                    ? handleSuccessFullSignIn(data)
                    : error({ title: data && data.message });

                setIsLoading(false);
            })
            .catch((err) => {
                error({ title: err && err });
                setIsLoading(false);
            });
    };

    const handleSave = () => {
        // if (confirm("Are you sure you want to save the new price?")) {
        //     setIsLoading(!isLoading);
        //     setTimeout(() => {
        //
        //     }, 2000);
        // }
        editShopifyPrice(currentCardDetails && currentCardDetails._id);
    };
    return (
        <Box>
            <Image src="/shopify.svg" alt="Shopify logo" mb="16px" />
            <Box pos="relative" className="sofia">
                <Text
                    as="span"
                    pos="absolute"
                    fontWeight="700"
                    fontSize="32px"
                    top="50%"
                    left="4px"
                    transform={"auto"}
                    translateY="-50%"
                    zIndex="2"
                >
                    $
                </Text>
                <Input
                    name="shopify"
                    value={updatePrice}
                    onChange={handleChange}
                    maxW="120px"
                    fontSize="32px"
                    // p="8px"
                    borderColor={"brand.grey_3"}
                    pl="25px"
                    readOnly={edit ? false : true}
                    pt="8px"
                    pr="0"
                    type="number"
                    bgColor={edit ? "brand.thickGray" : "transparent"}
                    border={edit ? "1px" : "none"}
                    fontWeight="700"
                    _focus={{ boxShadow: "none", borderColor: "brand.grey_3" }}
                    _readOnly={{ color: "brand.black" }}
                    borderRadius="none"
                />
            </Box>
            <Text color="brand.lightGray" fontSize="14px" mt="12px">
                Price on Shopify
            </Text>
            <Box mt="24px">
                {!edit ? (
                    <Button
                        leftIcon={<FiTag fontSize={"15px"} />}
                        fontSize="14px"
                        color="brand.primary"
                        bgColor="brand.light_1"
                        px="16px"
                        py="9px"
                        onClick={handleEdit}
                    >
                        Edit Price
                    </Button>
                ) : (
                    <Button
                        bgColor="brand.primary"
                        fontSize="14px"
                        color="brand.white"
                        px="16px"
                        py="9px"
                        _hover={{ bg: "brand.primary" }}
                        _active={{ bg: "brand.primary" }}
                        onClick={handleSave}
                    >
                        {isLoading ? <Spinner /> : "Save"}
                    </Button>
                )}
            </Box>
        </Box>
    );
};

export default Shopify;
