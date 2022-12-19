import { useForm } from "react-hook-form";
import React from "react";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Box,
} from "@chakra-ui/react";

const InputForm = ({
    type,
    name,
    id,
    label,
    holder,
    requiredSms,
    length,
    register,
    errors,
    ...others
}) => {
    return (
        <FormControl isInvalid={errors}>
            <FormLabel htmlFor="name">{label} </FormLabel>
            <Input
                type={type}
                id={name}
                name={name}
                placeholder={holder}
                
            />
            <FormErrorMessage>{errors && errors.message}</FormErrorMessage>
        </FormControl>
    );
};

export default InputForm;
