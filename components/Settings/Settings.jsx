import { Box, Button, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";
import { HiUser } from "react-icons/hi";

import { TbBell } from "react-icons/tb";
import { FiLock } from "react-icons/fi";
import { CgSoftwareUpload } from "react-icons/cg";
import PersonalInfo from "./PersonalInfo";
import Password from "./Password";
import Notification from "./Notification";

const Settings = () => {
    const [active, setActive] = useState(1);
    return (
        <Box bgColor="brand.white">
            <Box px={["16px", "24px", "31px"]} py="40px">
                <Box>
                    <Text fontSize="24px" fontWeight="700">
                        Account Settings
                    </Text>
                    <Text
                        mt="8px"
                        color="brand.grey_1"
                        fontSize="14px"
                        fontWeight="400"
                        className="sofia"
                    >
                        Update your account information
                    </Text>
                </Box>
                <Flex mt="24px" gap={["20px", "40px"]}>
                    {/* Small Nav  */}
                    <Box w="100%" maxW="224px" bgColor="brand.white">
                        <Box
                            boxShadow={
                                "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)"
                            }
                            p="24px"
                            borderRadius="8px"
                        >
                            <Flex
                                href="#"
                                as={NextLink}
                                fontWeight="600"
                                fontSize="14px"
                                align="center"
                                py="13px"
                                pl="16px"
                                borderRadius="4px"
                                bg="brand.light_1"
                                color="brand.primary"
                                onClick={() => setActive(1)}
                            >
                                <Icon
                                    as={HiUser}
                                    display="inline-block"
                                    fontSize="22px"
                                    mr="8px"
                                />
                                <Text mb="-1"> Personal Info</Text>
                            </Flex>

                            <Flex
                                href="#password"
                                as={NextLink}
                                fontWeight="600"
                                fontSize="14px"
                                align="center"
                                py="13px"
                                pl="16px"
                                borderRadius="4px"
                                // bg="brand.light_1"
                                color="brand.lightGray"
                                onClick={() => setActive(2)}
                            >
                                <Icon
                                    as={FiLock}
                                    display="inline-block"
                                    fontSize="22px"
                                    mr="8px"
                                />
                                <Text mb="-1"> Password</Text>
                            </Flex>

                            <Flex
                                href="#notification"
                                as={NextLink}
                                fontWeight="600"
                                fontSize="14px"
                                align="center"
                                py="13px"
                                pl="16px"
                                borderRadius="4px"
                                // bg="brand.light_1"
                                color="brand.lightGray"
                                onClick={() => setActive(3)}
                            >
                                <Icon
                                    as={TbBell}
                                    display="inline-block"
                                    fontSize="22px"
                                    mr="8px"
                                />
                                <Text mb="-1"> Notifications</Text>
                            </Flex>
                        </Box>
                    </Box>
                    {/* Main content  */}
                    <Box flex={1} maxW="736px">
                        <UserLabel />
                        <PersonalInfo />
                        <Password />
                        <Notification />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default Settings;

const UserLabel = ({ img }) => {
    return (
        <Box
            boxShadow="0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)"
            w="100%"
            p={["12px", , "24px"]}
            borderRadius="8px"
        >
            <Flex gap="18px" justify={"space-between"} align="center">
                <Flex gap="18px">
                    <Image
                        src="/user.png"
                        borderRadius={"full"}
                        w="46px"
                        h="46px"
                        alt=""
                    />
                    <Box>
                        <Text
                            fontSize={["16px"]}
                            fontWeight={[600]}
                            color="brand.black"
                        >
                            Tiamiyu Mubarak
                        </Text>
                        <Text
                            fontSize="14px"
                            mt="6px"
                            color="brand.lightGray"
                            fontWeight="400"
                        >
                            PNG or JPG image format is supported.
                        </Text>
                    </Box>
                </Flex>
                <Button fontSize="14px">
                    {" "}
                    <Icon
                        as={CgSoftwareUpload}
                        mr="7px"
                        fontSize="20px"
                        bgColor="brand.grey_1"
                        color="brand.black"
                    />{" "}
                    Upload
                </Button>
            </Flex>
        </Box>
    );
};
