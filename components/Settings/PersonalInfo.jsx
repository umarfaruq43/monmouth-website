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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { BiEditAlt } from "react-icons/bi";
import { CustomToast } from "../Alert";
const PersonalInfo = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const mainDetails = JSON.parse(localStorage.getItem("adminDetails"));
        mainDetails && setUserData(mainDetails);
    }, []);

    const initialData = {
        fName: "dfdfkjsafds",
        lName: "Mubarak ",
        email: "almubaarak.dev@gmail.com",
        phone: "09021284572",
    };

    const { success } = CustomToast();
    const [userDetails, setUserDetails] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);

    const forms = [
        {
            name: "fName",
            value: userDetails && userDetails.fName,
            type: "text",
            label: "First Name",
        },
        {
            name: "lName",
            value: userDetails && userDetails.lName,
            type: "text",
            label: "Last Name",
        },
        {
            name: "email",
            value: userDetails && userDetails.email,
            type: "email",
            label: "Email",
        },
        {
            name: "phone",
            value: userDetails && userDetails.phone,
            type: "number",
            label: "Phone Number",
        },
    ];

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(userDetails);
        setTimeout(() => {
            setLoading(false);
            success({ title: "Details Saved" });
            setEdit(false);
        }, 3000);
    };
    const handleEdit = () => {
        setEdit(true);
    };
    console.log(initialData);
    return (
        <Box mt="44px" mb="24px">
            <Box>
                <Flex align="center" justify="space-between">
                    <Text
                        fontSize={"20px"}
                        color="brand.lightBlack"
                        fontWeight={700}
                    >
                        Personal Information
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

                {/*   Form begin  */}
                <form method="POST">
                    <SimpleGrid
                        columns={[1, 2]}
                        spacingX="72px"
                        spacingY="32px"
                        mt="32px"
                    >
                        {forms.map((item, idx) => {
                            return (
                                <FormControl key={idx}>
                                    <FormLabel
                                        fontSize="14px"
                                        mb="8px"
                                        color="brand.lightBlack"
                                    >
                                        {item && item.label}
                                    </FormLabel>
                                    <Input
                                        name={item.name}
                                        value={item.value}
                                        h="48px"
                                        onChange={handleChange}
                                        required
                                        fontSize={"16px"}
                                        _focus={{
                                            boxShadow: "none",
                                            borderColor: "brand.grey_3",
                                        }}
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
                                </FormControl>
                            );
                        })}
                    </SimpleGrid>
                    {edit ? (
                        <Box mt="42px">
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
                                {loading ? <Spinner size="md" mr="10px" /> : ""}
                                Update
                            </Button>
                        </Box>
                    ) : (
                        " "
                    )}
                </form>
            </Box>
        </Box>
    );
};

export default PersonalInfo;
