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
import AnalyticModal from "../Analytics/AnalyticModal";

export const TransactionCol = [
    {
        Header: "",
        accessor: "image",
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
                        "- -"
                    )}
                </>
            );
        },
    },

    {
        Header: "DATE SOLD",
        accessor: "date",
        Cell: ({ value }) => {
            return format(new Date(value), "yyyy-mm-dd");
        },
    },

    {
        Header: "CARD NAME",
        accessor: "card_title",
        Cell: (values) => {
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
                            maxW="250px"
                            overflow={"clip"}
                        >
                            {values.row.original.card_title}
                        </Text>
                    ) : (
                        "- -"
                    )}
                </Box>
            );
        },
    },

    {
        Header: "CARD ID",
        accessor: "id",
        Cell: (values) => {
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
                            maxW="250px"
                            overflow={"clip"}
                        >
                            {values.row.original.id}
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
                    <Text fontWeight={"600"} textAlign="center">
                        {values.row.original.price}
                    </Text>
                </>
            );
        },
    },

    {
        Header: "ACTION",
        accessor: "",
        Cell: (values) => {
            const { isOpen, onOpen, onClose } = useDisclosure();
            return (
                <>
                    <AnalyticModal
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        values={values && values.row.original}
                    />
                    <Button
                        onClick={onOpen}
                        _focus={{}}
                        _hover={{}}
                        _active={{}}
                        bgColor=""
                        color="brand.primary"
                        borderColor="brand.light_1"
                        border="1px"
                        px="16px"
                        py="8px"
                        fontSize="14px"
                        borderRadius={"5px"}
                    >
                        Details
                    </Button>
                </>
            );
        },
    },
];
