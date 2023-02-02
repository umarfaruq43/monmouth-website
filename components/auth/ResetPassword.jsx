import React, { useEffect, useState } from "react";

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
    Image,
    Spinner,
} from "@chakra-ui/react";
import FormScreen from "../../Layout/FormScreen";
import InputForm from "../InputForm";
import { useAuthContext } from "../../Contexts/AuthContext";

const ResetPassword = () => {
    const { resetPword, loading, reset, setReset } = useAuthContext();
    const [showPass, setShowPass] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    // Getting the email from local storage.
    useEffect(() => {
        const user_email = localStorage.getItem("reset_email");
        setUserEmail(user_email);
    }, []);

    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(values) {
        if (values.confirmPassword !== values.newPassword) {
            setError(
                "newPassword",
                { type: "focus", message: "Password does not match" },
                { shouldFocus: true }
            );
        } else {
            values.email = userEmail;
            resetPword(values);
            console.log(values);
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
                {reset ? (
                    <Box py="">
                        <Box>
                            <Image
                                mx="auto"
                                src="/success.svg"
                                alt="Succes Icon"
                            />
                            <Text
                                mt="32px"
                                fontSize={"28px"}
                                textAlign={"center"}
                                fontWeight="700"
                                maxW="385px"
                            >
                                {" "}
                                Password reset successful!{" "}
                            </Text>
                            <Text
                                fontSize={"16px"}
                                color="brand.lighterGray"
                                textAlign={"center"}
                                maxWidth={"336px"}
                                mx="auto"
                                className="sofia"
                            >
                                Your can now use your new password to sign in to
                                your account
                            </Text>
                            <Box mt="52px">
                                <Button
                                    bg="brand.primary"
                                    _hover={{ bg: "brand.primary" }}
                                    _active={{ bg: "brand.primary" }}
                                    color="brand.white"
                                    type="submit"
                                    //     fontSize={"20px"}
                                    w="100%"
                                >
                                    <Link
                                        as={NextLink}
                                        href="/auth/login"
                                        py="16px"
                                        display={"block"}
                                        _hover={{ textDecor: "none" }}
                                        w="100%"
                                    >
                                        Sign In
                                    </Link>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ) : (
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
                                <FormControl
                                    isInvalid={errors.password}
                                    mb="16px"
                                >
                                    <FormLabel
                                        htmlFor="password"
                                        fontSize={"14px"}
                                        fontWeight={500}
                                        color="brand.black"
                                        mb="8px"
                                    >
                                        Enter new password
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
                                            type={
                                                showPass ? "text" : "password"
                                            }
                                            fontSize={"14px"}
                                            id="password"
                                            placeholder="Enter new Password"
                                            {...register("confirmPassword", {
                                                required:
                                                    "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        "Must be at least 8 characters",
                                                },
                                                pattern: {
                                                    value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                                    message:
                                                        "Please enter a valid password",
                                                },
                                            })}
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
                                    <FormErrorMessage>
                                        {errors.confirmPassword &&
                                            errors.confirmPassword.message}
                                    </FormErrorMessage>
                                </FormControl>

                                {/* Confirm Password  */}
                                <FormControl
                                    isInvalid={errors.newPassword}
                                    mb="16px"
                                >
                                    <FormLabel
                                        htmlFor="newPassword"
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
                                            type={
                                                showPass ? "text" : "password"
                                            }
                                            fontSize={"14px"}
                                            id="newPassword"
                                            placeholder="Confirm new password"
                                            {...register("newPassword", {
                                                required:
                                                    "Password is required",
                                                minLength: {
                                                    value: 8,
                                                    message:
                                                        "Must be at least 8 characters",
                                                },
                                                pattern: {
                                                    value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                                    message:
                                                        "Please enter a valid password",
                                                },
                                            })}
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
                                    <FormErrorMessage>
                                        {errors.newPassword &&
                                            errors.newPassword.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <Flex flexDir={"column"} mt="44px">
                                    <Button
                                        bg="brand.primary"
                                        _hover={{ bg: "brand.primary" }}
                                        _active={{ bg: "brand.primary" }}
                                        color="brand.white"
                                        type="submit"
                                        disabled={loading ? true : false}
                                        py="16px"
                                    >
                                        {loading ? (
                                            <Spinner size="sm" />
                                        ) : (
                                            "Next"
                                        )}
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
                )}
            </FormScreen>
        </Box>
    );
};

export default ResetPassword;
