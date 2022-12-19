import React, { createContext, useContext, useEffect, useState } from "react";

const ToastContext = createContext();

export const ToastAlert = ({ children }) => {
    const [toastType, setToastType] = useState();

    useEffect(() => {
        setTimeout(() => setToastType(""), 4000);
    }, [toastType]);

    const toastValue = {
        toastType,
        setToastType,
    };

    return (
        <ToastContext.Provider value={toastValue}>
            {children}
        </ToastContext.Provider>
    );
};

export function useToastContext() {
    return useContext(ToastContext);
}
