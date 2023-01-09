import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";
import { useToastContext } from "./ToastAlert";

const Auth = createContext();

export default function AuthContext({ children }) {
    const navigate = useRouter();
    const [user, setUser] = useState(false);
    

    //     login function
    const { toastType, setToastType } = useToastContext();
    const signIn = (values) => {
        console.log(values);
        setToastType("success");
        navigate.push("/");
    };
    // forget password function

    const forgetPassword = (values) => {
        console.log(values);
        localStorage.setItem("reset_email", values && values.email);

        navigate.push("/auth/verify");
    };

    // Verify

    const verify = (values) => {
        console.log(values);

        navigate.push("/auth/reset_password");
    };

    // Reset Password
    const resetPword = (values) => {
        console.log(values);

        navigate.push("/auth/login");
    };

    //     export values
    const authValues = {
        signIn,
        forgetPassword,
        verify,
        user,
        setUser,
    };
    return <Auth.Provider value={authValues}>{children}</Auth.Provider>;
}

export function useAuthContext() {
    return useContext(Auth);
}
