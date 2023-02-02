import { useRouter } from "next/router";
import React, { createContext, useContext, useState } from "react";
import { CustomToast } from "../components/Alert";
import { useToastContext } from "./ToastAlert";

const Auth = createContext();

export default function AuthContext({ children }) {
    // using the ALert system
    const { success, error } = CustomToast();
    const navigate = useRouter();
    const [user, setUser] = useState(false);
    const [reset, setReset] = useState(false);
    const [loading, setLoading] = useState(false);

    // Signin function
    const signIn = (values) => {
        
        const handleSuccessFullSignIn = (data) => {
            success({ title: data && data.message });
            setLoading(false);
            navigate.push("/dashboard");
        };
        setLoading(true);
        fetch("https://monmouth.onrender.com/v1/user/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                data && data.success
                    ? handleSuccessFullSignIn(data)
                    : error({ title: data && data.message });

                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                error({ title: `${err}` });
                setLoading(false);
            });
    };
    // forget password function

    const forgetPassword = (values) => {
        console.log(values);
        localStorage.setItem("reset_email", values && values.email);
        setLoading(true);

        fetch("https://monmouth.onrender.com/v1/user/forgotpassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // Fuction to run when email was fetch succesfully
                function EmailSuccess(data) {
                    success({ title: data && data.message });
                    localStorage.setItem(
                        "resToken",
                        data.data.verificationToken
                    );
                    navigate.push("/auth/verify");
                }

                data && data.success
                    ? EmailSuccess(data)
                    : error({ title: data && data.message });

                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                error({ title: "Unable to fetch" });
                setLoading(false);
            });
    };

    // Verify

    const verify = (values) => {
        console.log(values);
        setLoading(true);
        fetch("https://monmouth.onrender.com/v1/user/verificationCode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                // // Fuction to run when email was fetch succesfully
                function VerifySuccess(data) {
                    success({ title: data && data.message });

                    navigate.push("/auth/reset_password");
                }

                // if data was not successful

                // // if data was  successful
                data && data.success
                    ? VerifySuccess(data)
                    : error({ title: data && data.message });

                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                error({ title: "Unable to send code" });
                setLoading(false);
            });
    };

    // Reset Password
    const resetPword = (values) => {
        console.log(values);

        setLoading(true);
        fetch("https://monmouth.onrender.com/v1/user/resetPassword", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                function handleResetSuccess(data) {
                    setReset(true);
                    setLoading(false);
                }
                console.log(data);
                setLoading(false);
                data && data.success
                    ? handleResetSuccess(data)
                    : error({ title: data && data.message });
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    const Logout = () => {
        navigate.push("/auth/login");
    };

    //     export values
    const authValues = {
        signIn,
        forgetPassword,
        verify,
        user,
        setUser,
        loading,
        resetPword,
        reset,
        setReset,
        Logout,
    };
    return <Auth.Provider value={authValues}>{children}</Auth.Provider>;
}

export function useAuthContext() {
    return useContext(Auth);
}
