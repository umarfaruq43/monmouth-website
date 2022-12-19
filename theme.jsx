const { extendTheme } = require("@chakra-ui/react");

const colors = {
    brand: {
        white: "#FFF",
        black: "#121212",
        lightGray: "#A2A2A2",
        lighterGray: "#A1A1A1",
        primary: "#6454D6",
        accent: "#E81515",
        error: "#FEF0F0",
    },
};

const theme = extendTheme({ colors });

export default theme;
