import {
    Box,
    Button,
    CloseButton,
    Flex,
    Icon,
    Image,
    Input,
    Spinner,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiTag } from "react-icons/fi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { CustomToast, success } from "../Alert";

const EbayForm = ({ value }) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const { success } = CustomToast();
    value = "25.00";

    const [updatePrice, setUpdatePrice] = useState(value);
    const [edit, setEdit] = useState(false);
    const handleChange = (e) => {
        setUpdatePrice(e.target.value);
    };
    const handleEdit = () => {
        if (confirm("Are you sure you want to edit the price?")) {
            setEdit(!edit);
        }
    };
    const handleSave = () => {
        if (confirm("Are you sure you want to save the new price?")) {
            setIsLoading(!isLoading);
            setTimeout(() => {
                setEdit(!edit);
                setIsLoading(false);
                success({ title: "eBay Price Updated" });
            }, 2000);
        }
    };
    return (
        <Box>
            <Image src="/ebay.svg" alt="ebay logo" mb="16px" />
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
                    name="ebay"
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
                    bgColor={edit ? "brand.thickGray" : "transparent"}
                    border={edit ? "1px" : "none"}
                    fontWeight="700"
                    _focus={{ boxShadow: "none", borderColor: "brand.grey_3" }}
                    _readOnly={{ color: "brand.black" }}
                    borderRadius="none"
                />
            </Box>
            <Text color="brand.lightGray" fontSize="14px" mt="12px">
                Price on eBay
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

export default EbayForm;
