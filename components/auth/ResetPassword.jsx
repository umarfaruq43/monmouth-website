import React, { useState } from "react";

import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    FormErrorMessage,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import FormScreen from "../../Layout/FormScreen";
import InputForm from "../InputForm";
import { useAuthContext } from "../../Contexts/AuthContext";

const ResetPassword = () => {
    const { signIn } = useAuthContext();
    const [showPass, setShowPass] = useState(false);

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(values) {
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         // alert(JSON.stringify(values, null, 2));

        //         resolve();
        //     }, 3000);
        // });
        if (values.password !== values.confirmPassword) {
            setError(
                "confirmPassword",
                { type: "focus", message: "Password does not match" },
                { shouldFocus: true }
            );
        } else {
            signIn(values);
        }
    }

    return (
        <Box
            bgImage="/bgParttern.svg"
            bgRepeat="no-repeat"
            bgPos="bottom"
            bgSize="contain"
        >
            <FormScreen>
                <Box>
                    <Box>
                        <Text
                            fontWeight="700"
                            fontSize="28px"
                            textAlign="center"
                            color="brand.black"
                        >
                            Create New Password
                        </Text>
                        <Text
                            color="brand.lightGray"
                            fontSize="14px"
                            textAlign="center"
                            mt="8px"
                        >
                            Select a new password to sign in to your account
                        </Text>
                    </Box>
                    <Stack spacing={2} mt="34px">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Password Input */}
                            <FormControl isInvalid={errors.password} mb="16px">
                                <FormLabel
                                    htmlFor="password"
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    color="brand.black"
                                    mb="8px"
                                >
                                    Enter your password
                                </FormLabel>
                                <InputGroup>
                                    <Input
                                        _active={{
                                            borderColor: "brand.primary",
                                        }}
                                        _focusVisible={{
                                            borderColor: "brand.primary",
                                        }}
                                        color="brand.black"
                                        type={showPass ? "text" : "password"}
                                        fontSize={"14px"}
                                        id="password"
                                        placeholder="Enter new Password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "Minimum length should be 8",
                                            },
                                        })}
                                    />

                                    <InputRightElement
                                        onClick={() => setShowPass(!showPass)}
                                    >
                                        {showPass ? (
                                            <BsEyeSlash color="grey" />
                                        ) : (
                                            <BsEye color="grey" />
                                        )}
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>
                            </FormControl>

                            {/* Confirm Password  */}
                            <FormControl
                                isInvalid={errors.confirmPassword}
                                mb="16px"
                            >
                                <FormLabel
                                    htmlFor="confirmPassword"
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    color="brand.black"
                                    mb="8px"
                                >
                                    Confirm Password
                                </FormLabel>
                                <InputGroup>
                                    <Input
                                        _active={{
                                            borderColor: "brand.primary",
                                        }}
                                        _focusVisible={{
                                            borderColor: "brand.primary",
                                        }}
                                        color="brand.black"
                                        type={showPass ? "text" : "password"}
                                        fontSize={"14px"}
                                        id="confirmPassword"
                                        placeholder="Confirm new password"
                                        {...register("confirmPassword", {
                                            required: "Password is required",
                                            //     minLength: {
                                            //         value: 8,
                                            //         message:
                                            //             "Minimum length should be 8",
                                            //     },
                                        })}
                                    />

                                    <InputRightElement
                                        onClick={() => setShowPass(!showPass)}
                                    >
                                        {showPass ? (
                                            <BsEyeSlash color="grey" />
                                        ) : (
                                            <BsEye color="grey" />
                                        )}
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.confirmPassword &&
                                        errors.confirmPassword.message}
                                </FormErrorMessage>
                            </FormControl>

                            <Flex flexDir={"column"} mt="44px">
                                <Button
                                    bg="brand.primary"
                                    _hover={{ bg: "brand.primary" }}
                                    _active={{ bg: "brand.primary" }}
                                    color="brand.white"
                                    //     isLoading={isSubmitting}
                                    type="submit"
                                    //     fontSize={"20px"}
                                    py="16px"
                                >
                                    Next
                                </Button>
                                <Box textAlign={"center"} mt="30px">
                                    <Link
                                        as={NextLink}
                                        href="/auth/login"
                                        color="brand.primary"
                                        fontSize={"14px"}
                                        _hover={{ textDecor: "none" }}
                                    >
                                        Return to Sign In
                                    </Link>
                                </Box>
                            </Flex>
                        </form>
                    </Stack>
                </Box>
            </FormScreen>
        </Box>
    );
};

export default ResetPassword;
