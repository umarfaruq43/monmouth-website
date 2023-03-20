import {
    Box,
    Text,
    Image,
    Divider,
    Link,
    Icon,
    Flex,
    SimpleGrid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CardBox = ({ color, cardTitle, numbers, link, brColor, image }) => {
    return (
        <Box
            py="20px"
            px={["16px", "24px"]}
            maxW={["100%", "220px"]}
            bgColor={color}
            borderRadius={"8px"}
        >
            <Box>
                <Image
                    src={`/dashboard/${image}`}
                    alt=""
                    _hover={{ color: "red" }}
                />
                <Text
                    pt="16px"
                    fontSize={"14px"}
                    className="sofia"
                    color={"brand.lightGray"}
                >
                    {cardTitle}
                </Text>
                <Text
                    mt="2px"
                    color={"brand.black"}
                    fontSize={["32px"]}
                    fontWeight={"700"}
                    className="sofia"
                >
                    {numbers}
                </Text>
                <Divider my="16px" borderColor={brColor} />
                <Flex align={"center"}>
                    <Link
                        as={NextLink}
                        href={link}
                        fontSize="14px"
                        className="sofia"
                        color={"brand.black"}
                    >
                        View Report
                    </Link>
                    <Icon as={BsArrowRight} fontSize="19px" ml="4px" />
                </Flex>
            </Box>
        </Box>
    );
};

const CardDetails = ({ TotalCardNo, pendingCardNo, soldCardNo }) => {
    return (
        <Box>
            <SimpleGrid
                columns={[1, 2, 2]}
                justifyContent="center"
                maxW={"460px"}
                gap="24px"
            >
                <CardBox
                    color="#EDFBE8"
                    cardTitle="Total Revenue/month"
                    numbers="NIl"
                    link="#"
                    image="revenueIcon.svg"
                    brColor="#CDFABD"
                />
                <CardBox
                    color="#F1EBFF"
                    cardTitle="Total Cards"
                    numbers={TotalCardNo && TotalCardNo}
                    link="#"
                    image="totalCard.svg"
                    brColor="#D8D2F7"
                />
                <CardBox
                    color="#FFEFEB"
                    cardTitle="Sold Cards"
                    numbers={soldCardNo && soldCardNo}
                    link="#"
                    image="soldCards.svg"
                    brColor="#FFD4C7"
                />
                <CardBox
                    color="#D9DFFF"
                    cardTitle="Pending Cards"
                    numbers={pendingCardNo}
                    link="#"
                    image="pending.svg"
                    brColor="#B7C2FF"
                />
            </SimpleGrid>
        </Box>
    );
};

export default CardDetails;
