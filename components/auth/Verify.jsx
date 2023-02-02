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
    Spinner,
} from "@chakra-ui/react";
import FormScreen from "../../Layout/FormScreen";
import InputForm from "../InputForm";
import { useAuthContext } from "../../Contexts/AuthContext";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Verify = () => {
    const [userEmail, setUserEmail] = useState(null);
    const {
        register,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const { verify, loading } = useAuthContext();

    const [pin, setPin] = useState("");
    const [err, setErr] = useState(null);
    // object to submit
    let pinValues = {
        email: userEmail && userEmail,
        code: pin,
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (pin.length < 4) {
            console.log("Pin not complete");
            setErr("Input pin correclty");
        } else {
            console.log(pin);
            setErr(null);
            verify(pinValues);
        }
    };


    const handleChange = (value) => {
        setPin(value);
    };
    // const handleComplete = (value) => {
    //     console.log(value);
    // };
    useEffect(() => {
        const user_email = localStorage.getItem("reset_email");
        const sentCode = localStorage.getItem("resToken");
        setUserEmail(user_email);
    }, []);
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
                        <Text
                            color="brand.black"
                            textAlign="center"
                            noOfLines={2}
                        >
                            {userEmail && userEmail}
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
                                                onChange={handleChange}
                                                // onComplete={handleComplete}
                                                otp
                                            >
                                                <PinInputField
                                                    _focusVisible={{
                                                        borderColor:
                                                            "brand.primary",
                                                    }}
                                                    value={pin}
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
                                {/* Error Message  */}
                                {err && (
                                    <Text
                                        color="brand.accent"
                                        textAlign="center"
                                        mt="8px"
                                    >
                                        {" "}
                                        {err}{" "}
                                    </Text>
                                )}
                            </Box>

                            <Flex flexDir={"column"} mt="24px">
                                <Button
                                    bg="brand.primary"
                                    _hover={{ bg: "brand.primary" }}
                                    _active={{ bg: "brand.primary" }}
                                    color="brand.white"
                                    type="submit"
                                    py="16px"
                                    onClick={handleSubmit}
                                    disabled={loading ? true : false}
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

export default Verify;
