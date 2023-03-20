import { Box, Flex, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import React from "react";

const CardDetails = ({ currentCardDetails }) => {
    const formatedYear =
        currentCardDetails &&
        format(new Date(currentCardDetails && currentCardDetails.year), "yyyy");

    const formatedDate =
        currentCardDetails &&
        format(
            new Date(currentCardDetails && currentCardDetails.year),
            "yyyy-mm-dd"
        );
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
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Estimated Value:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Card Year:
                                </Text>

                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Card Number:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Grade Number:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Grading Company:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Variety:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Certificate Number:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Purchase Date:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Stored in Vault?
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    changeOverWeekPercent:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
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
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {/* $24.50 */}
                                    Not found
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {formatedYear}
                                </Text>

                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.cardNumber &&
                                        currentCardDetails.cardNumber) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.gradeNumber &&
                                        currentCardDetails.gradeNumber) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.gradingCompany &&
                                        currentCardDetails.gradingCompany) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.variety &&
                                        currentCardDetails.variety) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    3273551
                                    {(currentCardDetails.certNumber &&
                                        currentCardDetails.certNumber) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.purchaseDate &&
                                        currentCardDetails.purchaseDate) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Not found
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.changeOverWeekPercent &&
                                        currentCardDetails.changeOverWeekPercent) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.id &&
                                        currentCardDetails.id) ||
                                        "_ _"}
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
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Brand:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    PrintRun:
                                </Text>

                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Date Added:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Serial Number:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Low Estimated Price:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    High Estimated Price:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Notes:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Subject:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Category:
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Cost
                                </Text>
                                <Text className="sofia" noOfLines={1}>
                                    Title
                                </Text>
                            </Box>

                            <Box
                                p="16px"
                                color="brand.black"
                                // bgColor={""}
                                fontWeight="700"
                                maxW="240px"
                            >
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.brand &&
                                        currentCardDetails.brand) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.printRun &&
                                        currentCardDetails.printRun) ||
                                        "_ _"}
                                </Text>

                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {formatedDate}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.serial &&
                                        currentCardDetails.serial) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Not found
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    Not found
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.notes &&
                                        currentCardDetails.notes) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.subject &&
                                        currentCardDetails.subject) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.category &&
                                        currentCardDetails.category) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1} mb="14px">
                                    {(currentCardDetails.costBasis &&
                                        currentCardDetails.costBasis) ||
                                        "_ _"}
                                </Text>
                                <Text className="sofia" noOfLines={1}>
                                    {(currentCardDetails.groupName &&
                                        currentCardDetails.groupName) ||
                                        "_ _"}
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
