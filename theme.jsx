const { extendTheme } = require("@chakra-ui/react");

const colors = {
    brand: {
        white: "#FFF",
        black: "#121212",
        lightGray: "#A2A2A2",
        lighterGray: "#A1A1A1",
        light_1: "#F5F1FF",
        thickGray: "#F9FAFB",
        primary: "#6454D6",
        primaryBase: " #6454D6",
        accent: "#E81515",
        error: "#FEF0F0",
        error_1: "#FDECEC",
        fadeError: "#FEF1F1",
        success: "#22C38F",
        success_1: "#E5FAF4",
        dimSuccess: "#E9FBF5",
        lightSuccess: "#ECF9F5",
        lightBlack: "#525354",
        grey_2: "#B7B7B7",
        grey_3: "#E9E9E9",
        grey_4: "#fbfaff",
        light_2: "#D8D2F7",
        secondary_2: "#9E9DA8",
        accent_1: "#F2F5F3",
        success_1: "#EDFCE8",
        warning: "#FEA73E",
        warningFade: "#FFF8F0",
    },
};

const theme = extendTheme({ colors });

export default theme;
