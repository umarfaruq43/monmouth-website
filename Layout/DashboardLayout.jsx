import React, { ReactNode } from "react";
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
    console.log(children);
    return (
        <Link
            as={Box}
            onClick={() => {
                if (children === "Logout") {
                    router.push("/auth/login");
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
                            <Avatar
                                size={"sm"}
                                src={
                                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                }
                            />
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
                                    Tiamiyu Mubarak
                                </Text>
                                <Text
                                    fontSize="14px"
                                    color="brand.lighterGray"
                                    className="sofia"
                                >
                                    Admin
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
