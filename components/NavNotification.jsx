import { Box, IconButton, Button } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import { FiBell } from "react-icons/fi";

const NavNotification = () => {
    return (
        <Box>
            <Menu>
                <MenuButton
                as={Button}
                    bg="#F5F1FF"
                    mr="10px"
                    borderRadius={"6px"}
                    aria-label="open notification"
                    color="brand.primary"
                    w="48px"
                    h="46px"
                >
                    <FiBell fontSize={""} />
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};

export default NavNotification;
