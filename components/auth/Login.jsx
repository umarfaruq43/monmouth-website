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

const Login = () => {
    const { signIn } = useAuthContext();
    const [showPass, setShowPass] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(values) {
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         // alert(JSON.stringify(values, null, 2));

        //         resolve();
        //     }, 3000);
        // });
        signIn(values);
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
                            Sign In
                        </Text>
                        <Text
                            color="brand.lightGray"
                            fontSize="14px"
                            textAlign="center"
                            mt="8px"
                        >
                            Welcome to Monmouth cards. Sign In to your account
                        </Text>
                    </Box>
                    <Stack spacing={2} mt="34px">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email input  */}
                            <FormControl isInvalid={errors.email} mb="20px">
                                <FormLabel
                                    htmlFor="email"
                                    fontSize={"14px"}
                                    fontWeight={500}
                                    color="brand.black"
                                    mb="8px"
                                >
                                    Enter your email
                                </FormLabel>
                                <Input
                                    _active={{
                                        borderBsEyeColor: "brand.primary",
                                    }}
                                    _focusVisible={{
                                        borderColor: "brand.primary",
                                    }}
                                    color="brand.black"
                                    fontSize={"14px"}
                                    id="email"
                                    placeholder="Enter your Email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message:
                                                "Please enter a valid email",
                                        },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>
                            </FormControl>

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
                                        placeholder="Enter your Password"
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

                            <Stack spacing={8}>
                                <Stack
                                    direction={{ base: "row", sm: "row" }}
                                    align={"start"}
                                    justify={"space-between"}
                                >
                                    <Checkbox size="sm">Remember me</Checkbox>
                                    <Link
                                        as={NextLink}
                                        color={"brand.primary"}
                                        fontSize="14px"
                                        fontWeight={"500"}
                                        href="/auth/forget_password"
                                    >
                                        Forgot password?
                                    </Link>
                                </Stack>
                                <Button
                                    bg="brand.primary"
                                    _hover={{ bg: "brand.primary" }}
                                    _active={{ bg: "brand.primary" }}
                                    color="brand.white"
                                    isLoading={isSubmitting}
                                    type="submit"
                                    //     fontSize={"20px"}
                                    py="16px"
                                >
                                    Sign In
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </FormScreen>
        </Box>
    );
};

export default Login;
