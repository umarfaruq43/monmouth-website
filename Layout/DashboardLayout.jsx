import React, { ReactNode, useEffect, useState } from "react";
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Input,
    Image,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
    FiShoppingBag,
} from "react-icons/fi";
import { FaEnvelopeOpen, FaIdCardAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { RiSearchLine } from "react-icons/ri";
import { TbDiscount2 } from "react-icons/tb";
import { MdNoteAlt } from "react-icons/md";
import { NextLink } from "next/link";
import { BiLogOut } from "react-icons/bi";
import NavNotification from "../components/NavNotification";
import AuthContext, { useAuthContext } from "../Contexts/AuthContext";

const LinkItems = [
    { name: "Dashboard", icon: FaEnvelopeOpen, active: "/" },
    { name: "Cards", icon: FaIdCardAlt, active: "/card" },
    { name: "Purchases", icon: FiShoppingBag, active: "/purchase" },
    { name: "Offers", icon: TbDiscount2, active: "/offers" },
    { name: "Analytics", icon: MdNoteAlt, active: "/analytics" },
    { name: "Settings", icon: FiSettings, active: "/settings" },
    { name: "Logout", icon: BiLogOut, active: "#" },
];

export default function DashboardLayout({ children, passedActive }) {
    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={"brand.thickGray"}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
                passedActive={passedActive}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent
                        passedActive={passedActive}
                        onClose={onClose}
                    />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box
                ml={{ base: 0, md: 60 }}
                px="24px"
                mt={{ base: "20px", md: "48px" }}
                pb={{ base: "20px", md: "48px" }}
                maxW="1345px"
            >
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ onClose, passedActive, ...rest }) => {
    return (
        <Box
            transition="3s ease"
            bg={"#fff"}
            borderRight="1px"
            borderRightColor={"#fff"}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    <Image src="/Logo.svg" alt="" />
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>

            <Text
                pl="48px"
                fontWeight={500}
                fontSize="12px"
                color="brand.lightGray"
                mt="38px"
                mb="8px"
            >
                MAIN MENU
            </Text>
            {LinkItems.map((link) => (
                <NavItem
                    link={link}
                    key={link.name}
                    icon={link.icon}
                    passedActive={passedActive}
                >
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({ icon, children, link, passedActive, ...rest }) => {
    const router = useRouter();

    const { Logout } = useAuthContext();
    return (
        <Link
            as={Box}
            onClick={() => {
                if (children === "Logout") {
                    Logout();
                } else {
                    router.push(link.active);
                }
            }}
            // href={link.active}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
            fontSize="16px"
        >
            <Flex
                align="center"
                // p="4"

                py="12px"
                pl="24px"
                ml="24px"
                // borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "brand.light_1",
                    color: "brand.primary",
                }}
                {...rest}
                color={
                    link.active === passedActive
                        ? "brand.primary"
                        : "brand.lighterGray"
                }
                bg={
                    link.active === passedActive
                        ? "brand.light_1"
                        : "brand.white"
                }
                fontWeight={link.active !== passedActive ? "500" : "600"}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="20px"
                        _groupHover={{
                            color: "brand.primary",
                        }}
                        as={icon}
                    />
                )}

                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    // const { userData } = useAuthContext();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        localStorage.setItem("for", "rt");

        const mainDetails = JSON.parse(localStorage.getItem("adminDetails"));
        mainDetails && setUserData(mainDetails);
    }, []);
    const letter = userData && userData.fullName.split("")[0];

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={"#fff"}
            borderBottomWidth="1px"
            borderBottomColor={"#fff"}
            justifyContent={{ base: "space-between", md: "" }}
            {...rest}
        >
            <Box display={["none", "block"]} pr="20px" flex="1">
                <InputGroup
                    bg="brand.thickGray"
                    borderColor="transparent"
                    w="100%"
                    maxW="395px"
                    borderRadius={"10px"}
                    // _focusVisible={{
                    //     borderColor: "brand.primary",
                    //     outline: "none",
                    // }}
                >
                    <InputLeftElement pointerEvents="none">
                        <Icon
                            as={RiSearchLine}
                            color="brand.lighterGray"
                            w="20px"
                            h="20px"
                        />
                    </InputLeftElement>
                    <Input
                        type="tel"
                        placeholder="Search here..."
                        _focusVisible={{
                            borderColor: "brand.primary",
                            outline: "none",
                        }}
                    />
                </InputGroup>
            </Box>
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: "flex", md: "none" }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
                mx="20px"
            >
                <Image src="/Logo.svg" alt="" />
            </Text>

            <HStack spacing={{ base: "0", md: "6" }}>
                <NavNotification />

                <Flex alignItems={"center"}>
                    <Menu>
                        <HStack>
                            <Flex
                                alignItems="center"
                                justifyContent={"center"}
                                minW="50px"
                                minH="50px"
                                maxW="50px"
                                maxH="50px"
                                borderRadius={"full"}
                                overflow="hidden"
                                bgColor={"#f9fafb"}
                            >
                                {/* */}
                                {userData &&
                                userData.profilePhoto &&
                                userData.profilePhoto.imageUrl !== "" ? (
                                    <Image
                                        src={
                                            userData.profilePhoto &&
                                            userData.profilePhoto.imageUrl
                                        }
                                        borderRadius={"full"}
                                        w="46px"
                                        h="46px"
                                        alt=""
                                    />
                                ) : (
                                    <Text fontSize={"30px"} fontWeight={700}>
                                        {" "}
                                        {letter}{" "}
                                    </Text>
                                )}
                            </Flex>
                            <VStack
                                display={{ base: "none", md: "flex" }}
                                alignItems="flex-start"
                                spacing="1px"
                                ml="2"
                            >
                                <Text
                                    fontSize="14px"
                                    fontWeight={600}
                                    color="brand.black"
                                >
                                    {userData && userData
                                        ? userData.fullName
                                        : "No Name"}
                                </Text>
                                <Text
                                    fontSize="14px"
                                    color="brand.lighterGray"
                                    className="sofia"
                                >
                                    {userData && userData
                                        ? userData.role
                                        : "No Status"}
                                </Text>
                            </VStack>
                        </HStack>

                        <MenuList
                            bg={"#fff"}
                            borderColor={useColorModeValue(
                                "gray.200",
                                "gray.700"
                            )}
                        >
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Billing</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
