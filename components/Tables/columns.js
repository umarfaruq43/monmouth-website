import {
    Box,
    Button,
    Icon,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Portal,
    Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { RiArrowDropDownLine } from "react-icons/ri";
import Form from "./Form";

export const COLUMN = [
    {
        Header: "",
        accessor: "images",
        // Cell: (values) => {
        //     const img = values && values.row.original.images.split(",");
        //     console.log("image", img);
        //     return (
        //         <>
        //             {values && values.row.original.images ? (
        //                 <Image
        //                     src={values && img[0]}
        //                     alt=""
        //                     w="48px"
        //                     h="48px"
        //                     minW="48px"
        //                     borderRadius={"10px"}
        //                     cursor="pointer"
        //                     objectFit={"cover"}
        //                 />
        //             ) : (
        //                 "- -"
        //             )}
        //         </>
        //     );
        // },
    },
    {
        Header: "TITLE",
        accessor: "title",
        Cell: (values) => {
            return (
                <Box maxW="240px">
                    {values && values.row.original.groupName ? (
                        <Text
                            noOfLines={1}
                            fontWeight="600"
                            color="brand.black"
                            fontSize="14px"
                            className="sofia"
                            cursor="pointer"
                        >
                            {values.row.original.groupName}{" "}
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
        Cell: (value) => {
            // console.log("date", value.row.original.year);
            return format(
                new Date(value && value.row.original.year),
                "yyyy-mm-dd"
            );
        },
    },
    {
        Header: "MARKETPLACE",
        // accessor: "market_place",
        Cell: (values) => {
            return (
                // <Box position={"relative"}>
                //     <Menu
                //         closeOnBlur={false}
                //         matchWidth={false}
                //         preventOverflow={true}
                //         placement="bottom-start"
                //     >
                //         <MenuButton
                //             as={Button}
                //             maxW="128px"
                //             bgColor="brand.light_1"
                //             _active={{ bgColor: "" }}
                //             fontSize="14px"
                //             color="brand.black"
                //             w="100%"
                //             h="34px"
                //             borderRadius={"none"}
                //             display="flex"
                //             alignItems={"center"}
                //             rightIcon={<RiArrowDropDownLine />}
                //         >
                //             View All
                //             {/* <Icon
                //             display="inline-block"
                //             ml="1px"
                //             fontSize="25px"
                //             as={RiArrowDropDownLine}
                //         /> */}
                //         </MenuButton>

                //         <MenuList
                //             w="1094px"
                //             bg="brand.grey_4"
                //             borderLeft="2px solid #8173de"
                //             boxShadow={"0px 4px 20px rgba(18, 18, 18, 0.03)"}
                //         >
                //             <Box
                //                 py="24px"
                //                 px="16px"
                //                 w="100%"
                //                 position=""
                //                 left={0}
                //                 top={1}
                //                 // minH="212px"
                //                 zIndex={1}
                //                 //    border={2}
                //                 //    borderColor='#fff'
                //             >
                //                 <Form />
                //             </Box>
                //         </MenuList>
                //     </Menu>
                // </Box>

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
                    {values && values.row.original.price ? (
                        <Text
                            fontWeight={"500"}
                            color="brand.success"
                            textAlign="center"
                        >
                            ${values.row.original.price.split(",")[0]}
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
                    {values && values.row.original.status !== true ? (
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
