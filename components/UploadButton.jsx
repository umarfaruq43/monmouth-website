import { Button, Icon } from "@chakra-ui/react";
import { BsFileArrowUpFill } from "react-icons/bs";
import { CgSoftwareUpload } from "react-icons/cg";

const UploadButton = (props) => {
    return (
        <Button
            as="label"
            htmlFor={props.id}
            cursor="pointer"
            bg={"transparent"}
            w="100%"
            borderRadius="md"
            borderWidth="1px"
            borderColor="gray.200"
            _hover={{}}
            _focus={{}}
            _active={{}}
        >
            <Icon
                as={CgSoftwareUpload}
                mr="7px"
                fontSize="20px"
                bgColor="brand.grey_1"
                color="brand.black"
            />{" "}
            <input
                id={props.id}
                type="file"
                onChange={props.onChange && props.onChange}
                hidden
            />
        </Button>
    );
};

export default UploadButton;
