import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
// import { cards } from "../../cards";

import SingleCard from "../../components/Cards/SingleCard";
import { CardContext } from "../../Contexts/CardContext";
import DashboardLayout from "../../Layout/DashboardLayout";

const SingleCards = ({}) => {
    const { allCards } = useContext(CardContext);
    console.log("allCards", allCards);

    const router = useRouter();

    const { card } = router.query;
    console.log("query card", card);
    // Find the card with the matching ID
    const mainSingleCard = allCards.find((item) => item.id === card);
    console.log("mainSingleCard", mainSingleCard);

    return (
        <DashboardLayout passedActive="/card">
            <Box>
                {/* <Card /> */}
                {mainSingleCard ? (
                    <SingleCard
                        currentCard={mainSingleCard && mainSingleCard}
                    />
                ) : (
                    "Loading Card details"
                )}
            </Box>
        </DashboardLayout>
    );
};

export default SingleCards;
