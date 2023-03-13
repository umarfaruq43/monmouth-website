import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { RiArrowDropDownLine, RiMoreFill } from "react-icons/ri";
import { HiOutlineEye } from "react-icons/hi";
import { BsBagX } from "react-icons/bs";
import { CustomToast } from "../Alert";
import OrderDetailsModal from "../OrderDetailsModal";

export const PurchaseCol = [
    {
        Header: "CARD DETAILS",
        accessor: "cardDetails",
        Cell: (values) => {
            return (
                <>
                    {values && values.row.original.image ? (
                        <Box noOfLines={1}>
                            <Image
                                src={values && values.row.original.image}
                                alt=""
                                w="48px"
                                h="48px"
                                minW="48px"
                                borderRadius={"10px"}
                                cursor="pointer"
                            />
                        </Box>
                    ) : (
                    "Image Nil"
                    )}
                </>
            );
        },
    },
    {
        Header: "",
        accessor: "cardName",
        Cell: (values) => {
            return (
                <Box>
                    {values && values.row.original.cardName ? (
                        <Text
                            w="100%"
                            fontWeight="600"
                            color="brand.black"
                            fontSize="14px"
                            className="sofia"
                            cursor="pointer"
                            noOfLines={1}
                            maxW="250px"
                            overflow={"clip"}
                        >
                            {values.row.original.card_title}
                        </Text>
                    ) : (
                        "Card Name Nil"
                    )}
                </Box>
            );
        },
    },

    {
        Header: "DATE ADDED",
        accessor: "date",
        Cell: (values) => {
            return format(
                new Date(values.row.original.created_at),
                "yyyy-mm-dd"
            );
        },
    },

    {
        Header: "CUSTOMER NAME",
        accessor: "name",
        Cell: (values) => {
            console.log(values);
            return (
                <Box>
                    {values && values.row.original ? (
                        <Text
                            w="100%"
                            fontWeight="600"
                            color="brand.black"
                            fontSize="14px"
                            className="sofia"
                            cursor="pointer"
                            noOfLines={1}
                        >
                            {values.row.original.customer
                                ? values.row.original.customer.first_name
                                : "-"}{" "}
                            {values.row.original.customer
                                ? values.row.original.customer.last_name
                                : " -"}
                        </Text>
                    ) : (
                        "- -"
                    )}
                </Box>
            );
        },
    },

    {
        Header: "PRICE",
        accessor: "price",
        Cell: (values) => {
            return (
                <>
                    <Text
                        fontWeight={"500"}
                        color="brand.success"
                        textAlign="center"
                    >
                        ${values.row.original.total_price}
                    </Text>
                </>
            );
        },
    },

    {
        Header: "STATUS",
        accessor: "status",
        Cell: (values) => {
            return (
                <Box>
                    <>
                        {/* // <>
                //     {values && values.row.original.status === "delay" ? (
                //         <Flex
                //             fontWeight={"600"}
                //             color="brand.black"
                //             bgColor="brand.light_1"
                //             px="16px"
                //             py="8px"
                //             w="100%"
                //             maxW="192px"
                //             borderRadius="5px"
                //             className="sofia"
                //             mx="auto"
                //             align="center"
                //             justify="center"
                //         >
                //             <Box
                //                 w="7px"
                //                 h="7px"
                //                 display={"inline-block"}
                //                 bgColor="brand.primary"
                //                 borderRadius={"full"}
                //                 mr="10px"
                //             ></Box>
                //             <Text>Offer Awaiting Review</Text>
                //         </Flex>
                //     ) : (
                //         ""
                //     )}
                //     {values && values.row.original.status === "success" ? (
                //         <Flex
                //             fontWeight={"600"}
                //             color="brand.black"
                //             bgColor="brand.dimSuccess"
                //             px="16px"
                //             py="8px"
                //             w="100%"
                //             maxW="192px"
                //             borderRadius="5px"
                //             className="sofia"
                //             mx="auto"
                //             align="center"
                //             justify="center"
                //         >
                //             <Box
                //                 w="7px"
                //                 h="7px"
                //                 display={"inline-block"}
                //                 borderRadius={"full"}
                //                 bgColor="brand.success"
                //                 mr="10px"
                //             ></Box>
                //             <Text>Paid & Shipped </Text>
                //         </Flex>
                //     ) : (
                //         ""
                //     )}
                //     {values && values.row.original.status === "unpaid" ? (
                //         <Flex
                //             fontWeight={"600"}
                //             color="brand.black"
                //             bgColor="brand.fadeError"
                //             px="16px"
                //             py="8px"
                //             w="100%"
                //             maxW="192px"
                //             borderRadius="5px"
                //             className="sofia"
                //             mx="auto"
                //             align="center"
                //             justify="center"
                //         >
                //             <Box
                //                 w="7px"
                //                 h="7px"
                //                 display={"inline-block"}
                //                 borderRadius={"full"}
                //                 bgColor="brand.accent"
                //                 mr="10px"
                //             ></Box>
                //             <Text>Unpaid </Text>
                //         </Flex>
                //     ) : (
                //         ""
                //     )}

                //     {values && values.row.original.status === "pending" ? (
                //         <Flex
                //             fontWeight={"600"}
                //             color="brand.black"
                //             bgColor="brand.warningFade"
                //             px="6px"
                //             py="8px"
                //             w="100%"
                //             maxW="199px"
                //             borderRadius="5px"
                //             className="sofia"
                //             mx="auto"
                //             align="center"
                //             justify="center"
                //         >
                //             <Box
                //                 w="7px"
                //                 h="7px"
                //                 // display={"inline-block"}
                //                 borderRadius={"full"}
                //                 bgColor="brand.warning"
                //                 mr="10px"
                //             ></Box>
                //             <Text>Paid & Awaiting Shipment </Text>
                //         </Flex>
                //     ) : (
                //         ""
                //     )}
                // </> */}
                    </>
                    Not Available
                </Box>
            );
        },
    },
    {
        Header: "ACTIONS",
        accessor: "",
        Cell: (value) => {
            const { success } = CustomToast();
            const { isOpen, onOpen, onClose } = useDisclosure();

            return (
                <Box>
                    <OrderDetailsModal
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        details={value && value.row.original}
                    />
                    <Menu mx="auto">
                        <MenuButton>
                            {" "}
                            <RiMoreFill fontSize={"25px"} />{" "}
                        </MenuButton>
                        <MenuList>
                            <MenuItem
                                px="21px"
                                py="19px"
                                _hover={{ color: "brand.primary" }}
                                onClick={onOpen}
                            >
                                {" "}
                                <Icon as={HiOutlineEye} mr="12px" />{" "}
                                <Text fontSize="14px" fontWeight="500">
                                    View details
                                </Text>
                            </MenuItem>

                            <MenuItem
                                px="21px"
                                py="19px"
                                _hover={{ color: "brand.primary" }}
                                onClick={() => {
                                    setTimeout(() => {
                                        success({ title: "Card Unsold" });
                                    }, 1000);
                                }}
                            >
                                {" "}
                                <Icon as={BsBagX} mr="12px" />{" "}
                                <Text fontSize="14px" fontWeight="500">
                                    Unsell this Card
                                </Text>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            );
        },
    },
];
