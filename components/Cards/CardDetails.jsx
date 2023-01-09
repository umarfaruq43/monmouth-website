import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const CardDetails = () => {
    return (
        <Box>
            <Text fontWeight="700" my="8px" fontSize="24px" py="16px">
                {" "}
                Card Details{" "}
            </Text>
            <Box py="24px" px="16px" bgColor={"brand.light_1"}>
                <Flex align="center" mt="10px">
                    <Box>
                        <Flex gap={["20px", , "40px"]}>
                            <Box
                                p="16px"
                                color="brand.lightBlack"
                                bgColor={"brand.accent_1"}
                            >
                                <Text className="sofia" mb="14px">
                                    Estimated Value:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Card Year:
                                </Text>

                                <Text className="sofia" mb="14px">
                                    Card Number:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Grade Number:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Grading Company:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Variety:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Certificate Number:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Purchase Date:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Stored in Vault?
                                </Text>
                                <Text className="sofia" mb="14px">
                                    changeOverWeekPercent:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    id:
                                </Text>
                            </Box>

                            <Box
                                p="16px"
                                color="brand.black"
                                // bgColor={""}
                                fontWeight="700"
                                maxW="240px"
                            >
                                <Text className="sofia" mb="14px">
                                    $24.50
                                </Text>
                                <Text className="sofia" mb="14px">
                                    2021
                                </Text>

                                <Text className="sofia" mb="14px">
                                    19
                                </Text>
                                <Text className="sofia" mb="14px">
                                    10
                                </Text>
                                <Text className="sofia" mb="14px">
                                    SGC
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Asia Hyper Gold
                                </Text>
                                <Text className="sofia" mb="14px">
                                    3273551
                                </Text>
                                <Text className="sofia" mb="14px">
                                    - -
                                </Text>
                                <Text className="sofia" mb="14px">
                                    True
                                </Text>
                                <Text className="sofia" mb="14px">
                                    --
                                </Text>
                                <Text className="sofia" mb="14px">
                                    7b9ab2a3-5286-435c-a6ee-52d8fcc73976
                                </Text>
                            </Box>
                        </Flex>
                    </Box>

                    {/* Second Column */}
                    <Box>
                        <Flex gap={["20px", , "40px"]}>
                            <Box
                                p="16px"
                                color="brand.lightBlack"
                                bgColor={"brand.accent_1"}
                            >
                                <Text className="sofia" mb="14px">
                                    Brand:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    PrintRun:
                                </Text>

                                <Text className="sofia" mb="14px">
                                    Date Added:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Serial Number:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Low Estimated Price:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    High Estimated Price:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Notes:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Subject:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Category:
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Cost
                                </Text>
                                <Text className="sofia">Title</Text>
                            </Box>

                            <Box
                                p="16px"
                                color="brand.black"
                                // bgColor={""}
                                fontWeight="700"
                                maxW="240px"
                            >
                                <Text className="sofia" mb="14px">
                                    Elite
                                </Text>
                                <Text className="sofia" mb="14px">
                                    --
                                </Text>

                                <Text className="sofia" mb="14px">
                                    2022-11-21
                                </Text>
                                <Text className="sofia" mb="14px">
                                    --
                                </Text>
                                <Text className="sofia" mb="14px">
                                    --
                                </Text>
                                <Text className="sofia" mb="14px">
                                    --
                                </Text>
                                <Text className="sofia" mb="14px">
                                    --
                                </Text>
                                <Text className="sofia" mb="14px">
                                    Isaiah Stewart
                                </Text>
                                <Text className="sofia" mb="14px">
                                    BASKETBALL_CARDS
                                </Text>
                                <Text className="sofia" mb="14px">
                                    --
                                </Text>
                                <Text className="sofia">
                                    2021 Elite #19 Isaiah Stewart Asia Hyper
                                    Gold SGC 10
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default CardDetails;
