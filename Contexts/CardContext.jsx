import { useRouter } from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { CustomToast } from "../components/Alert";

export const CardContext = createContext([]);

export const CardProvider = ({ children }) => {
    return (
        <CardContext.Provider value={FetchCards()}>
            {children}
        </CardContext.Provider>
    );
};

const FetchCards = () => {
    const router = useRouter();
    const [cards, setCards] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [allCards, setAllCards] = useState([]);
    const { success, error } = CustomToast();

    useEffect(() => {
        fetchRecentCards();
        fetchAllCards();
    }, []); //eslint-disable-line

    // useEffect(() => {
    //     fetchAllCards();
    // }, [router.route]); //eslint-disable-line

    const fetchRecentCards = () => {
        // Set the API endpoint URL
        const url = `https://monmouth.onrender.com/v1/card/get-cards?page=${1}&limit=${5}`;

        // Set the user bearer token
        const userToken = localStorage.getItem("token");

        // Set the headers with the user token
        const headers = {
            Authorisation: "Bearer " + userToken,
            mode: "no-cors",
        };
        // set fetching true
        setFetching(true);

        // Fetch the data with the headers
        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("fetching start");
                setFetching(false);
                console.log(data);
                setCards(data && data.data);
                console.log("cards In State ", cards);
                console.log("fetching ends");
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation:",
                    error
                );
                setFetching(false);
            });
    };

    const fetchAllCards = () => {
        // Set the API endpoint URL
        const url = `https://monmouth.onrender.com/v1/card/get-cards`;

        // Set the user bearer token
        const userToken = localStorage.getItem("token");

        // Set the headers with the user token
        const headers = {
            Authorisation: "Bearer " + userToken,
            mode: "no-cors",
        };
        // set fetching true
        setFetching(true);

        // Fetch the data with the headers
        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("fetching start");
                setFetching(false);
                console.log(data);
                setAllCards(data && data.data);
                console.log("cards In State ", cards);
                console.log("fetching ends");
            })
            .catch((err) => {
                error({
                    title: "There was a problem with the fetch operation, Please Refresh",
                });
                console.err(
                    "There was a problem with the fetch operation:",
                    err
                );
                setFetching(false);
            });
    };

    return { fetchRecentCards, cards, fetching, allCards };
};
