import { Box } from "@chakra-ui/react";
import React from "react";
import { cards } from "../../cards";
import SingleCard from "../../components/Cards/SingleCard";
import DashboardLayout from "../../Layout/DashboardLayout";

const singleCard = ({ mainCard }) => {
    // console.log(mainCard);
    return (
        <DashboardLayout passedActive="/card">
            <Box>
                {/* <Card /> */}
                <SingleCard currentCard={mainCard && mainCard} />
            </Box>
        </DashboardLayout>
    );
};

export default singleCard;

export async function getStaticPaths() {
    const paths = cards.map((item) => ({
        params: {
            card: item.id,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    let mainCard;

    cards &&
        cards.map((item) => {
            if (item.id === params.card) {
                mainCard = item;
                return;
            }
        });

    return {
        props: {
            mainCard,
        },
    };
}
