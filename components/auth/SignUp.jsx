import React, { useEffect, useState } from "react";

import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash, Icon } from "react-icons/bs";
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
    InputLeftElement,
} from "@chakra-ui/react";
import FormScreen from "../../Layout/FormScreen";
import InputForm from "../InputForm";
import { useAuthContext } from "../../Contexts/AuthContext";
import { AiFillFile } from "react-icons/ai";
import UploadButton from "../UploadButton";

const SignUp = () => {
    const { resetPword, loading, reset, createUser, setReset } =
        useAuthContext();
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
            createUser(values);
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
                            Create New User
                        </Text>
                        <Text
                            color="brand.lightGray"
                            fontSize="14px"
                            textAlign="center"
                            mt="8px"
                        >
                            Create a new User that will have access to your
                            account
                        </Text>
                    </Box>
                    <Stack spacing={2} mt="34px">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/*IMage Upload */}

                            <FormControl isInvalid={errors.fName} mb="16px">
                                <FormLabel
                                    htmlFor="password"
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    color="brand.black"
                                    mb="8px"
                                >
                                    Upload Image
                                </FormLabel>
                                <UploadButton />
                            </FormControl>

                            {/* Full Name Input */}
                            <FormControl isInvalid={errors.fName} mb="16px">
                                <FormLabel
                                    htmlFor="password"
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    color="brand.black"
                                    mb="8px"
                                >
                                    Enter Full Name
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
                                        type={"text"}
                                        fontSize={"14px"}
                                        id="fName"
                                        placeholder="Enter Full Name"
                                        {...register("fName", {
                                            required: "Full Name is required",
                                            minLength: {
                                                value: 3,
                                                message:
                                                    "Please enter your full name",
                                            },
                                        })}
                                    />
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.fName && errors.fName.message}
                                </FormErrorMessage>
                            </FormControl>

                            {/* Email Input */}
                            <FormControl isInvalid={errors.email} mb="16px">
                                <FormLabel
                                    htmlFor="password"
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    color="brand.black"
                                    mb="8px"
                                >
                                    Enter your email
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
                                        type={"text"}
                                        fontSize={"14px"}
                                        id="email"
                                        placeholder="Enter your Email"
                                        {...register("email", {
                                            required: "Email is required",
                                            minLength: {
                                                value: 3,
                                                message:
                                                    "Please enter your email",
                                            },
                                        })}
                                    />
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>
                            </FormControl>
                            {/* Password Input */}
                            <FormControl
                                isInvalid={errors.confirmPassword}
                                mb="16px"
                            >
                                <FormLabel
                                    htmlFor="password"
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    color="brand.black"
                                    mb="8px"
                                >
                                    Enter password
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
                                        placeholder="Enter Password"
                                        {...register("confirmPassword", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "Must be at least 8 characters",
                                            },
                                            pattern: {
                                                value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                                message:
                                                    "Password should be minimum of 8 numbers it must contain  one number and  one special character",
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
                                        type={showPass ? "text" : "password"}
                                        fontSize={"14px"}
                                        id="newPassword"
                                        placeholder="Confirm  password"
                                        {...register("newPassword", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "Must be at least 8 characters",
                                            },
                                            pattern: {
                                                value: /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                                message:
                                                    "Password should be minimum of 8 numbers it must contain  one number and  one special character",
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
                                    {loading ? <Spinner size="sm" /> : "Next"}
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

export default SignUp;
