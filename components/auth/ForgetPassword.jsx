import { useForm } from "react-hook-form";
import NextLink from "next/link";
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
} from "@chakra-ui/react";
import FormScreen from "../../Layout/FormScreen";
import InputForm from "../InputForm";
import { useAuthContext } from "../../Contexts/AuthContext";

const ForgetPassword = () => {
    const { forgetPassword } = useAuthContext();

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
       forgetPassword(values);
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
                            Forgot Password
                        </Text>
                        <Text
                            color="brand.lightGray"
                            fontSize="14px"
                            textAlign="center"
                            mt="8px"
                        >
                            Enter your email address to reset your password
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
                                    _active={{ borderColor: "brand.primary" }}
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
                                            message: "Email is not correct",
                                        },
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>
                            </FormControl>

                            <Flex flexDir={"column"} mt="34px">
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

export default ForgetPassword;
