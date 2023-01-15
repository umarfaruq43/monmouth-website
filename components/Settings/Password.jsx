import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Icon,
    SimpleGrid,
    Text,
    Input,
    Button,
    Spinner,
    UnorderedList,
    ListItem,
    InputRightElement,
    InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { BiEditAlt } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { CustomToast } from "../Alert";

const Password = () => {
    const initialData = {
        oldPass: "",
        newPass: "",
        confirmPass: "",
    };

    const { success } = CustomToast();
    const [userDetails, setUserDetails] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const passwords = [
        {
            name: "oldPass",
            value: userDetails && userDetails.oldPass,
            type: "password",
            label: "Current Password",
            placeHolder: "Enter your current password",
        },
        {
            name: "newPass",
            value: userDetails && userDetails.newPass,
            type: "password",
            label: "New Password",
            placeHolder: "Enter your new password",
        },
        {
            name: "confirmPass",
            value: userDetails && userDetails.confirmPass,
            type: "password",
            label: "Confirm Password",
            placeHolder: "Confirm your new password",
        },
    ];

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };
    const handleSubmit = () => {
        setLoading(true);
        console.log(userDetails);
        setTimeout(() => {
            setLoading(false);
            success({ title: "Details Updated" });
            setEdit(false);
            console.log("password", userDetails);
        }, 3000);
    };
    const handleEdit = () => {
        setEdit(true);
    };
    return (
        <Box mt="32px">
            <Flex align="center" justify="space-between">
                <Text
                    fontSize={"20px"}
                    color="brand.lightBlack"
                    fontWeight={700}
                >
                    Password
                </Text>
                <Box>
                    {!edit ? (
                        <Flex
                            cursor={"pointer"}
                            align="center"
                            mt="-1px"
                            color="brand.primary"
                            gap="4px"
                            onClick={handleEdit}
                        >
                            <Icon as={BiEditAlt} fontSize="20px" />
                            <Text cursor={"pointer"} fontWeight="600">
                                {" "}
                                Edit{" "}
                            </Text>
                        </Flex>
                    ) : (
                        ""
                    )}
                </Box>
            </Flex>

            <Box py="24px">
                {/* Password Rules */}
                <Box bgColor="brand.light_1" p={["12px", , "24px"]}>
                    <Text color="brand.black" fontSize="16px" fontWeight="600">
                        Rules for passwords
                    </Text>
                    <Box className="sofia">
                        <Text
                            color="brand.lightBlack"
                            className="sofia"
                            mt="16px"
                        >
                            To create a new password, you have to meet all of
                            the following requirements:
                        </Text>
                    </Box>

                    <UnorderedList mt="24px" fontSize="14px">
                        <SimpleGrid columns={[1, 2]}>
                            <ListItem> Minimum 8 character </ListItem>
                            <ListItem> At least one number</ListItem>
                            <ListItem> At least one special character</ListItem>
                            <ListItem>
                                Can’t be the same as the previous password
                            </ListItem>
                        </SimpleGrid>
                    </UnorderedList>
                </Box>
            </Box>
            {/* Password form page  */}

            <Box>
                <Box>
                    <SimpleGrid
                        columns={[1, 2]}
                        spacingY="32px"
                        spacingX="72px"
                    >
                        {passwords.map((item, idx) => {
                            return (
                                <FormControl key={idx}>
                                    <FormLabel
                                        fontSize="14px"
                                        mb="8px"
                                        color="brand.lightBlack"
                                    >
                                        {item && item.label}
                                    </FormLabel>
                                    <InputGroup>
                                        <Input
                                            name={item.name}
                                            value={item.value}
                                            h="48px"
                                            onChange={handleChange}
                                            required
                                            fontSize={"16px"}
                                            placeholder={item.placeHolder}
                                            _focus={{
                                                boxShadow: "none",
                                                borderColor: "brand.grey_3",
                                            }}
                                            type={
                                                showPass ? "text" : "password"
                                            }
                                            color="brand.black"
                                            className="sofia"
                                            fontWeight={600}
                                            readOnly={edit ? false : true}
                                            _placeholder={{ fontWeight: "500" }}
                                            _readOnly={{
                                                boxShadow: "none",
                                                border: "",
                                                fontWeight: "500",
                                            }}
                                        />
                                        <InputRightElement
                                            onClick={() =>
                                                setShowPass(!showPass)
                                            }
                                        >
                                            {showPass ? (
                                                <BsEyeSlash color="grey" />
                                            ) : (
                                                <BsEye color="grey" />
                                            )}
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            );
                        })}
                        {edit ? (
                            <Box mt="42px" textAlign="right">
                                <Button
                                    _focus={{}}
                                    _active={{}}
                                    _hover={{}}
                                    bgColor="brand.primary"
                                    color="brand.white"
                                    fontSIze="16px"
                                    px="32px"
                                    py="10px"
                                    onClick={handleSubmit}
                                >
                                    {loading ? (
                                        <Spinner size="md" mr="10px" />
                                    ) : (
                                        ""
                                    )}
                                    Update
                                </Button>
                            </Box>
                        ) : (
                            " "
                        )}
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
};

export default Password;
