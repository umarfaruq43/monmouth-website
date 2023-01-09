import { Badge, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BasicTable from "../Tables/BasicTable";
import Pagination from "../Tables/Pagination";
import { cards } from "../../cards";

const Card = () => {
    let soldCard = cards.slice(0, 5);
    let pendingCard = cards.slice(0, 3);

    return (
        <Box>
            <Flex align="center" mb="24px" justify="space-between">
                <Text fontWeight={"700"} color="brand.black" fontSize={"24px"}>
                    Cards
                </Text>
                <Button
                    bgColor="brand.primary"
                    color="brand.white"
                    px="24px"
                    py="6px"
                    _hover={{ bg: "brand.primary" }}
                    _active={{ bg: "brand.primary" }}
                >
                    Check for cards update
                </Button>
            </Flex>

            <Box>
                <Tabs variant="unstyled">
                    <TabList>
                        <Tab
                            px="18px"
                            py="11px"
                            fontWeight={600}
                            fontSize={"16px"}
                            bg="brand.white"
                            color="brand.lightGray"
                            _selected={{
                                color: "brand.black",
                                bg: "brand.light_1",
                                borderColor: "brand.light_2",
                            }}
                            border="1px"
                            borderColor="brand.grey_3"
                            borderBottom="none"
                            className="slantBorder"
                            display="flex"
                            alignItems="center"
                            justify="center"
                        >
                            All Cards
                            <Badge
                                className="sofia"
                                bgColor="brand.primary"
                                borderRadius="full"
                                color="brand.white"
                                ml="8px"
                                px="4px"
                                py="2px"
                                fontSize="10px"
                            >
                                {" "}
                                {`${cards && cards.length}+`}{" "}
                            </Badge>
                        </Tab>
                        <Tab
                            px="18px"
                            py="11px"
                            fontWeight={600}
                            fontSize={"16px"}
                            bg="brand.white"
                            color="brand.lightGray"
                            _selected={{
                                color: "brand.black",
                                bg: "brand.light_1",
                                borderColor: "brand.light_2",
                            }}
                            border="1px"
                            borderColor="brand.grey_3"
                            borderBottom="none"
                            className="slantBorder"
                        >
                            Listed Cards
                            <Badge
                                className="sofia"
                                bgColor="brand.primary"
                                borderRadius="full"
                                color="brand.white"
                                ml="8px"
                                px="4px"
                                py="2px"
                                fontSize="10px"
                            >
                                {" "}
                                {`${cards && cards.length}+`}{" "}
                            </Badge>
                        </Tab>
                        <Tab
                            px="18px"
                            py="11px"
                            fontWeight={600}
                            fontSize={"16px"}
                            bg="brand.white"
                            color="brand.lightGray"
                            _selected={{
                                color: "brand.black",
                                bg: "brand.light_1",
                                borderColor: "brand.light_2",
                            }}
                            border="1px"
                            borderColor="brand.grey_3"
                            borderBottom="none"
                            className="slantBorder"
                        >
                            Sold Cards
                            <Badge
                                className="sofia"
                                bgColor="brand.primary"
                                borderRadius="full"
                                color="brand.white"
                                ml="8px"
                                px="4px"
                                py="2px"
                                fontSize="10px"
                            >
                                {" "}
                                {`${cards && soldCard.length}+`}{" "}
                            </Badge>
                        </Tab>
                        <Tab
                            px="18px"
                            py="11px"
                            fontWeight={600}
                            fontSize={"16px"}
                            bg="brand.white"
                            color="brand.lightGray"
                            _selected={{
                                color: "brand.black",
                                bg: "brand.light_1",
                                borderColor: "brand.light_2",
                            }}
                            border="1px"
                            borderColor="brand.grey_3"
                            borderBottom="none"
                            className="slantBorder"
                        >
                            Pending Cards
                            <Badge
                                className="sofia"
                                bgColor="brand.primary"
                                borderRadius="full"
                                color="brand.white"
                                ml="8px"
                                px="4px"
                                py="2px"
                                fontSize="10px"
                            >
                                {" "}
                                {`${cards && pendingCard.length}+`}{" "}
                            </Badge>
                        </Tab>
                    </TabList>
                    <TabPanels p="24px" bgColor="brand.white">
                        <TabPanel>
                            {/* All cards */}
                            <Pagination cards={cards} />
                        </TabPanel>
                        <TabPanel>
                            {/* Listed  cards */}

                            <Pagination cards={cards} />
                        </TabPanel>

                        <TabPanel>
                            {/* Sold  cards */}

                            <Pagination cards={soldCard} />
                        </TabPanel>

                        <TabPanel>
                            {/* Pending cards */}

                            <Pagination cards={pendingCard} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

export default Card;
