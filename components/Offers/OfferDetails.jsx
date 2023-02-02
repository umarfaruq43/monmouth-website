import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Input,
    Spinner,
    Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CustomToast } from "../Alert";

const OfferDetails = ({ offer }) => {
    const { success } = CustomToast();

    // console.log(offer);
    const month = format(new Date(), "MMM");
    const fullMonth = format(new Date(), "MMMMMM");
    const time = format(new Date(), "p");
    const year = format(new Date(), "yyy");
    const day = format(new Date(), "dd");
    const fullDay = format(new Date(), "do");

    const [counterOffer, setCounterOffer] = useState(false);
    const [counterOfferValue, setCounterOfferValue] = useState("");
    const [loading, setLoading] = useState(false);

    const enableCounterOffer = (e) => {
        setCounterOffer(true);
        offer.status = "";
    };

    const disableCounterOffer = () => {
        setCounterOffer(false);
    };
    const savecounterOffer = () => {
        offer.counterPrice = counterOfferValue;
        setLoading("countered");
        setTimeout(() => {
            setCounterOffer(false);
            offer.status = "countered";
            success({ title: "Offer countered" });
            setLoading(false);
        }, 3000);
    };
    const handleAccept = () => {
        setLoading("accept");
        setTimeout(() => {
            offer.status = "accepted";
            success({ title: "Offer Accepted" });
            setLoading(false);
        }, 3000);
    };

    const handleReject = () => {
        setLoading("reject");
        setTimeout(() => {
            offer.status = "rejected";
            success({ title: "Offer Rejected" });
            setLoading(false);
        }, 3000);
    };

    return (
        <Box bgColor="brand.white" py="24px">
            <Box px="24px">
                <Flex
                    justify="space-between"
                    gap="32px"
                    flexDir={["column", , , "row"]}
                >
                    <Flex gap="20px">
                        <Box
                            w="96px"
                            h="96px"
                            overflow={"hidden"}
                            borderRadius="8px"
                        >
                            <Image src="/card.svg" alt="card picture" />
                        </Box>
                        <Box>
                            {/* card name  */}

                            <Text fontWeight="600" fontSize="16px">
                                Smith George
                            </Text>
                            {/* card type details */}
                            <Flex
                                align="center"
                                w="100%"
                                // justify={"space-between"}
                                gap="42px"
                                mt="12px"
                            >
                                <Flex align="center">
                                    <Box
                                        w="7px"
                                        h="7px"
                                        p="0"
                                        // display={"inline-block"}
                                        borderRadius={"full"}
                                        bgColor="brand.accent"
                                        mr="10px"
                                    ></Box>
                                    <Text className="sofia">
                                        {" "}
                                        {/* {offer && offer.type}{" "} */}
                                        ebay
                                    </Text>
                                </Flex>
                                <Flex align="center" gap="9px">
                                    <Icon
                                        as={AiOutlineClockCircle}
                                        fontSize="18px"
                                        color="brand.lightBlack"
                                    />
                                    <Text
                                        fontWeight="600"
                                        fontSize="14px"
                                        color="brand.lightBlack"
                                        className="sofia"
                                    >
                                        {/* 9:30am, 10 Dec, 2022 */}
                                        {`${time}, ${day}, ${month}, ${year}`}
                                    </Text>
                                </Flex>
                            </Flex>

                            <Text
                                maxW="393px"
                                mt="8px"
                                className="sofia"
                                color="brand.lightBlack"
                            >
                                Smith George has requested to buy 2021 Elite #19
                                Isaiah Stewart Asia Hyper Gold SGC 10
                            </Text>
                        </Box>
                    </Flex>
                    {/**************************************************************************************** */}
                    <Box>
                        <Box>
                            <Flex mt="24px" gap="40px">
                                {/* Price  */}
                                <Box>
                                    <Text
                                        color="brand.lightGray"
                                        className="sofia"
                                        fontSize="14px"
                                    >
                                        Price:
                                    </Text>
                                    <Text
                                        color="brand.lightBlack"
                                        className="sofia"
                                        fontWeight="600"
                                        fontSize="20px"
                                        mt="18px"
                                    >
                                        {/* ${offer && offer.price} */}
                                        $45.00
                                    </Text>
                                </Box>

                                {/* Offers */}
                                <Box>
                                    <Text
                                        color="brand.lightGray"
                                        className="sofia"
                                        fontSize="14px"
                                    >
                                        Offer:
                                    </Text>
                                    <Text
                                        color="brand.primary"
                                        className="sofia"
                                        fontWeight="600"
                                        fontSize="20px"
                                        mt="18px"
                                    >
                                        {" "}
                                        {/* ${offer && offer.offer} */}
                                        $45.00
                                    </Text>
                                </Box>

                                {/* Counter Offer */}
                                {counterOffer ? (
                                    <Box>
                                        <Text
                                            color="brand.lightGray"
                                            className="sofia"
                                            mb="8px"
                                            fontSize={"14px"}
                                        >
                                            Counter Price
                                        </Text>
                                        <Input
                                            color="brand.primary"
                                            className="sofia"
                                            fontWeight="600"
                                            fontSize="20px"
                                            px="8px"
                                            type="number"
                                            maxW="90px"
                                            borderRadius={"none"}
                                            onChange={(e) =>
                                                setCounterOfferValue(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Box>
                                ) : (
                                    <Box>
                                        {offer.counterPrice === "" ? (
                                            ""
                                        ) : (
                                            <Box>
                                                <Text
                                                    color="brand.lightGray"
                                                    className="sofia"
                                                    mb="8px"
                                                    fontSize={"14px"}
                                                >
                                                    Counter Price
                                                </Text>

                                                <Text
                                                    color="brand.primary"
                                                    className="sofia"
                                                    fontWeight="600"
                                                    fontSize="20px"
                                                    mt="18px"
                                                >
                                                    $
                                                    {offer &&
                                                        offer.counterPrice}
                                                </Text>
                                            </Box>
                                        )}
                                    </Box>
                                )}
                            </Flex>
                            {/* Watitng Card decision */}
                            <Box>
                                {offer && offer.status === "waiting" ? (
                                    <Flex mt="32px" gap="10px">
                                        <Button
                                            color="brand.accent"
                                            bgColor="brand.error_1"
                                            px="26px"
                                            py="6px"
                                            fontSize="14px"
                                            _hover={{}}
                                            _active={{}}
                                            _focus={{}}
                                            onClick={handleReject}
                                        >
                                            {loading === "reject" ? (
                                                <Spinner size="sm" mr="4px" />
                                            ) : (
                                                ""
                                            )}
                                            Reject
                                        </Button>

                                        <Button
                                            color="brand.success"
                                            bgColor="brand.success_1"
                                            px="26px"
                                            py="6px"
                                            fontSize="14px"
                                            _hover={{}}
                                            _active={{}}
                                            _focus={{}}
                                            onClick={handleAccept}
                                        >
                                            {loading === "accept" ? (
                                                <Spinner size="sm" mr="4px" />
                                            ) : (
                                                ""
                                            )}
                                            Accept
                                        </Button>

                                        <Button
                                            color="brand.primary"
                                            bgColor="brand.light_1"
                                            px="16px"
                                            py="6px"
                                            fontSize="14px"
                                            _hover={{}}
                                            _active={{}}
                                            _focus={{}}
                                            onClick={enableCounterOffer}
                                        >
                                            Counter Offer
                                        </Button>
                                    </Flex>
                                ) : (
                                    ""
                                )}
                            </Box>

                            {/* Edit Countered  */}

                            {counterOffer ? (
                                <Flex gap="16px" mt="32px">
                                    <Button
                                        color="brand.primary"
                                        bgColor="brand.softGray"
                                        px="26px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                        onClick={disableCounterOffer}
                                    >
                                        Cancle
                                    </Button>

                                    <Button
                                        color="brand.white"
                                        bgColor="brand.primary"
                                        px="26px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                        onClick={savecounterOffer}
                                    >
                                        {loading === "countered" ? (
                                            <Spinner size="sm" mr="4px" />
                                        ) : (
                                            ""
                                        )}
                                        Save
                                    </Button>
                                </Flex>
                            ) : (
                                ""
                            )}

                            {/* Accepted button variations Start */}
                            {offer && offer.status === "accepted" ? (
                                <Flex mt="32px" gap="10px">
                                    <Button
                                        color="brand.accent"
                                        bgColor="brand.error_1"
                                        px="26px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                        _disabled={{
                                            bgColor: "brand.thickGray",
                                            color: "brand.grey_2",
                                        }}
                                        disabled
                                    >
                                        Reject
                                    </Button>

                                    <Button
                                        color="brand.white"
                                        bgColor="brand.success"
                                        px="26px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                    >
                                        Accepted
                                    </Button>

                                    <Button
                                        color="brand.primary"
                                        bgColor="brand.light_1"
                                        px="16px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                        _disabled={{
                                            bgColor: "brand.thickGray",
                                            color: "brand.grey_2",
                                        }}
                                        disabled
                                    >
                                        Counter Offer
                                    </Button>
                                </Flex>
                            ) : (
                                ""
                            )}
                            {/* Accepted button variations Ends */}

                            {/* Regected button variations Start */}
                            {offer && offer.status === "rejected" ? (
                                <Flex mt="32px" gap="10px">
                                    <Button
                                        color="brand.white"
                                        bgColor="brand.accent"
                                        px="26px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                    >
                                        Rejected
                                    </Button>

                                    <Button
                                        color="brand.success"
                                        bgColor="brand.success_1"
                                        px="26px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                        _disabled={{
                                            bgColor: "brand.thickGray",
                                            color: "brand.grey_2",
                                        }}
                                        disabled
                                    >
                                        Accept
                                    </Button>

                                    <Button
                                        color="brand.primary"
                                        bgColor="brand.light_1"
                                        px="16px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                        _disabled={{
                                            bgColor: "brand.thickGray",
                                            color: "brand.grey_2",
                                        }}
                                        disabled
                                    >
                                        Counter Offer
                                    </Button>
                                </Flex>
                            ) : (
                                ""
                            )}
                            {/* Regected button variations ends */}

                            {/* Contered Offer button variations Start */}
                            {offer && offer.status === "countered" ? (
                                <Flex mt="32px" gap="10px">
                                    <Button
                                        color="brand.white"
                                        bgColor="brand.accent"
                                        px="26px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                        _disabled={{
                                            bgColor: "brand.thickGray",
                                            color: "brand.grey_2",
                                        }}
                                        disabled
                                    >
                                        Reject
                                    </Button>

                                    <Button
                                        color="brand.success"
                                        bgColor="brand.success_1"
                                        px="26px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                        _disabled={{
                                            bgColor: "brand.thickGray",
                                            color: "brand.grey_2",
                                        }}
                                        disabled
                                    >
                                        Accept
                                    </Button>

                                    <Button
                                        color="brand.white"
                                        bgColor="brand.primary"
                                        px="16px"
                                        py="6px"
                                        fontSize="14px"
                                        _hover={{}}
                                        _active={{}}
                                        _focus={{}}
                                    >
                                        Countered
                                    </Button>
                                </Flex>
                            ) : (
                                ""
                            )}
                            {/* Contered Offer button variations ends */}
                        </Box>
                    </Box>

                    {/* **************************************************************************** */}
                </Flex>
            </Box>
        </Box>
    );
};

// const offerPricingTab = () => {
//     // return (
//     //     <Box>
//     //         <Flex mt="24px" gap="40px">
//     //             {/* Price  */}
//     //             <Box>
//     //                 <Text
//     //                     color="brand.lightGray"
//     //                     className="sofia"
//     //                     fontSize="14px"
//     //                 >
//     //                     Price:
//     //                 </Text>
//     //                 <Text
//     //                     color="brand.lightBlack"
//     //                     className="sofia"
//     //                     fontWeight="600"
//     //                     fontSize="20px"
//     //                     mt="18px"
//     //                 >
//     //                     ${offer && offer.price}
//     //                 </Text>
//     //             </Box>

//     //             {/* Offers */}
//     //             <Box>
//     //                 <Text
//     //                     color="brand.lightGray"
//     //                     className="sofia"
//     //                     fontSize="14px"
//     //                 >
//     //                     Offer:
//     //                 </Text>
//     //                 <Text
//     //                     color="brand.primary"
//     //                     className="sofia"
//     //                     fontWeight="600"
//     //                     fontSize="20px"
//     //                     mt="18px"
//     //                 >
//     //                     {" "}
//     //                     ${offer && offer.offer}
//     //                 </Text>
//     //             </Box>

//     //             {/* Counter Offer */}

//     //             {counterOffer ? (
//     //                 <Box>
//     //                     <Text
//     //                         color="brand.lightGray"
//     //                         className="sofia"
//     //                         mb="8px"
//     //                         fontSize={"14px"}
//     //                     >
//     //                         Counter Price
//     //                     </Text>
//     //                     <Input
//     //                         color="brand.primary"
//     //                         className="sofia"
//     //                         fontWeight="600"
//     //                         fontSize="20px"
//     //                         px="8px"
//     //                         type="number"
//     //                         maxW="90px"
//     //                         borderRadius={"none"}
//     //                         onChange={(e) =>
//     //                             setCounterOfferValue(e.target.value)
//     //                         }
//     //                     />
//     //                 </Box>
//     //             ) : (
//     //                 <Box>
//     //                     {offer.counterPrice === "" ? (
//     //                         ""
//     //                     ) : (
//     //                         <Box>
//     //                             <Text
//     //                                 color="brand.lightGray"
//     //                                 className="sofia"
//     //                                 mb="8px"
//     //                                 fontSize={"14px"}
//     //                             >
//     //                                 Counter Price
//     //                             </Text>

//     //                             <Text
//     //                                 color="brand.primary"
//     //                                 className="sofia"
//     //                                 fontWeight="600"
//     //                                 fontSize="20px"
//     //                                 mt="18px"
//     //                             >
//     //                                 ${offer && offer.counterPrice}
//     //                             </Text>
//     //                         </Box>
//     //                     )}
//     //                 </Box>
//     //             )}
//     //         </Flex>

//     //         {counterOffer ? (
//     //             <Flex gap="16px" mt="32px">
//     //                 <Button
//     //                     color="brand.primary"
//     //                     bgColor="brand.softGray"
//     //                     px="26px"
//     //                     py="6px"
//     //                     fontSize="14px"
//     //                     _hover={{}}
//     //                     _active={{}}
//     //                     _focus={{}}
//     //                     onClick={disableCounterOffer}
//     //                 >
//     //                     Cancle
//     //                 </Button>

//     //                 <Button
//     //                     color="brand.white"
//     //                     bgColor="brand.primary"
//     //                     px="26px"
//     //                     py="6px"
//     //                     fontSize="14px"
//     //                     _hover={{}}
//     //                     _active={{}}
//     //                     _focus={{}}
//     //                     onClick={savecounterOffer}
//     //                 >
//     //                     Save
//     //                 </Button>
//     //             </Flex>
//     //         ) : (
//     //             <Flex mt="32px" gap="10px">
//     //                 <Button
//     //                     color="brand.accent"
//     //                     bgColor="brand.error_1"
//     //                     px="26px"
//     //                     py="6px"
//     //                     fontSize="14px"
//     //                     _hover={{}}
//     //                     _active={{}}
//     //                     _focus={{}}
//     //                 >
//     //                     Reject
//     //                 </Button>

//     //                 <Button
//     //                     color="brand.success"
//     //                     bgColor="brand.success_1"
//     //                     px="26px"
//     //                     py="6px"
//     //                     fontSize="14px"
//     //                     _hover={{}}
//     //                     _active={{}}
//     //                     _focus={{}}
//     //                 >
//     //                     Accept
//     //                 </Button>

//     //                 <Button
//     //                     color="brand.primary"
//     //                     bgColor="brand.light_1"
//     //                     px="16px"
//     //                     py="6px"
//     //                     fontSize="14px"
//     //                     _hover={{}}
//     //                     _active={{}}
//     //                     _focus={{}}
//     //                     onClick={enableCounterOffer}
//     //                 >
//     //                     Counter Offer
//     //                 </Button>
//     //             </Flex>
//     //         )}
//     //     </Box>
//     // );
// };

export default OfferDetails;

// const obj = [
//     {
//         name: "Smith George",
//         image: "/card.svg",
//         type: "eBay",
//         date: "9:30 am, 10 Dec, 2022",
//         text: "Smith George has requested to buy 2021 Elite #19 Isaiah Stewart Asia Hyper Gold SGC 10",
//         price: "25.67",
//         offer: "24.50",
//         accepted: false,
//         rejected: false,
//         countered: false,
//         counterPrice: "",
//     },

//     {
//         name: "Wilson Hilary",
//         image: "/card.svg",
//         type: "amazon",
//         date: "9:30 am, 10 Dec, 2022",
//         text: "Smith George has requested to buy 2021 Elite #19 Isaiah Stewart Asia Hyper Gold SGC 10",
//         price: "25.67",
//         offer: "25.50",
//         accepted: true,
//         rejected: false,
//         countered: false,
//         counterPrice: "",
//     },

//     {
//         name: "Richard Wesley",
//         image: "/card.svg",
//         type: "shopify",
//         date: "9:30 am, 10 Dec, 2022",
//         text: "Smith George has requested to buy 2021 Elite #19 Isaiah Stewart Asia Hyper Gold SGC 10",
//         price: "25.67",
//         offer: "25.50",
//         accepted: false,
//         rejected: false,
//         countered: false,
//         counterPrice: "",
//     },
//     {
//         name: "Jaden South",
//         image: "/card.svg",
//         type: "amazon",
//         date: "9:30 am, 10 Dec, 2022",
//         text: "Jaden South has requested to buy 2003 Upper Deck #13 LeBron James Phenomenal Beginnings PSA 10",
//         price: "25.67",
//         offer: "25.50",
//         accepted: false,
//         rejected: true,
//         countered: false,
//         counterPrice: "",
//     },

//     {
//         name: "Smith George",
//         image: "/card.svg",
//         type: "eBay",
//         date: "9:30 am, 10 Dec, 2022",
//         text: "Smith George has requested to buy 1999 Pokemon Base Set #12 Ninetales Holo SGC 7",
//         price: "25.67",
//         offer: "25.50",
//         accepted: false,
//         rejected: false,
//         countered: true,
//         counterPrice: "25.00",
//     },
// ];
