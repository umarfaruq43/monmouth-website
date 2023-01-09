import { Box, Button, Icon, Image, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { RiArrowDropDownLine } from "react-icons/ri";

export const COLUMN = [
    {
        Header: "",
        accessor: "images",
        Cell: (values) => {
            return (
                <>
                    {values && values.row.original.images ? (
                        <Image
                            src={values && values.row.original.images}
                            alt=""
                            w="48px"
                            h="48px"
                            minW="48px"
                            borderRadius={"10px"}
                            cursor="pointer"
                        />
                    ) : (
                        "- -"
                    )}
                </>
            );
        },
    },
    {
        Header: "TITLE",
        accessor: "title",
        Cell: (values) => {
            return (
                <Box maxW="240px">
                    {values && values.row.original.title ? (
                        <Text
                            noOfLines={1}
                            fontWeight="600"
                            color="brand.black"
                            fontSize="14px"
                            className="sofia"
                            cursor="pointer"
                        >
                            {values.row.original.title}{" "}
                        </Text>
                    ) : (
                        "- -"
                    )}
                </Box>
            );
        },
    },

    {
        Header: "DATE ADDED",
        accessor: "date_added",
        Cell: ({ value }) => {
            return format(new Date(value), "yyyy-mm-dd");
        },
    },
    {
        Header: "MARKETPLACE",
        // accessor: "market_place",
        Cell: (values) => {
            return (
                <Button
                    maxW="128px"
                    bgColor="brand.light_1"
                    _active={{ bgColor: "" }}
                    fontSize="14px"
                    color="brand.black"
                    w="100%"
                    h="34px"
                    borderRadius={"none"}
                >
                    View All
                    <Icon
                        display="inline-block"
                        ml="1px"
                        fontSize="25px"
                        as={RiArrowDropDownLine}
                    />
                </Button>
            );
        },
    },
    {
        Header: "ESTIMATED VALUE",
        accessor: "estimated_value",
        Cell: (values) => {
            return (
                <>
                    {values && values.row.original.estimated_value !== null ? (
                        <Text
                            fontWeight={"500"}
                            color="brand.success"
                            textAlign="center"
                        >
                            {values.row.original.estimated_value}
                        </Text>
                    ) : (
                        <Text textAlign="center"> - -</Text>
                    )}
                </>
            );
        },
    },
    {
        Header: "STATUS",
        accessor: "status",
        Cell: (values) => {
            return (
                <>
                    {values && values.row.original.status === null ? (
                        <Text
                            fontWeight={"400"}
                            className="sofia"
                            textAlign="center"
                        >
                            - -
                        </Text>
                    ) : (
                        ""
                    )}
                    {values && values.row.original.status === true ? (
                        <Text
                            fontWeight={"600"}
                            color="brand.success"
                            bgColor="brand.lightSuccess"
                            px="16px"
                            py="8px"
                            w="fit-content"
                            borderRadius="5px"
                            className="sofia"
                            mx="auto"
                        >
                            Sold
                        </Text>
                    ) : (
                        ""
                    )}
                    {values && values.row.original.status === false ? (
                        <Text
                            fontWeight={"600"}
                            color="brand.primaryBase"
                            bgColor="brand.light_1"
                            px="16px"
                            py="8px"
                            w="fit-content"
                            borderRadius="5px"
                            className="sofia"
                            mx="auto"
                        >
                            Listed for Sale
                        </Text>
                    ) : (
                        ""
                    )}
                </>
            );
        },
    },
];
