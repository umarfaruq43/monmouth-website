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
    Center,
    HStack,
} from "@chakra-ui/react";
import FormScreen from "../../Layout/FormScreen";
import InputForm from "../InputForm";
import { useAuthContext } from "../../Contexts/AuthContext";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useState } from "react";

const Verify = () => {
    const {
        register,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const { verify } = useAuthContext();

    const [pin, setPin] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pin);
    };
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
                            Email Verification
                        </Text>
                        <Text
                            color="brand.lightGray"
                            fontSize="14px"
                            textAlign="center"
                            mt="8px"
                        >
                            Enter the 4 digit code you receive at
                        </Text>
                        <Text color="brand.black" textAlign="center">
                            almubaarak.dev@gmail.com
                        </Text>
                    </Box>
                    <Stack spacing={2} mt="34px">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <Box>
                                <FormControl>
                                    <Center>
                                        <HStack>
                                            <PinInput
                                                size="lg"
                                                placeholder=""
                                                required
                                            >
                                                <PinInputField
                                                    _focusVisible={{
                                                        borderColor:
                                                            "brand.primary",
                                                    }}
                                                    value={pin}
                                                    onChange={() => setPin(pin)}
                                                />
                                                <PinInputField
                                                    _focusVisible={{
                                                        borderColor:
                                                            "brand.primary",
                                                    }}
                                                />
                                                <PinInputField
                                                    _focusVisible={{
                                                        borderColor:
                                                            "brand.primary",
                                                    }}
                                                />
                                                <PinInputField
                                                    _focusVisible={{
                                                        borderColor:
                                                            "brand.primary",
                                                    }}
                                                />
                                            </PinInput>
                                        </HStack>
                                    </Center>
                                </FormControl>
                            </Box>

                            <Flex flexDir={"column"} mt="34px">
                                <Button
                                    bg="brand.primary"
                                    _hover={{ bg: "brand.primary" }}
                                    _active={{ bg: "brand.primary" }}
                                    color="brand.white"
                                    //     isLoading={isSubmitting}
                                    type="submit"
                                    //     fontSize={"20px"}
                                    py="16px"
                                    onClick={verify}
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

export default Verify;
