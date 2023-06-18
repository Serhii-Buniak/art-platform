import React from "react"
import styled from "../../../styles/styled"
import SupportUsImage from "../../../static/images/rubensMuseum/SupportUs"
import OrganisationImage from "../../../static/images/rubensMuseum/Organisation"
import { useVocabulary } from "../../../translation/vocabulary"
import InformationCardsContainer from "../InformationCardsContainer"


const CardsRubensMuseum: React.FC = () => {
    const voc = useVocabulary()

    return <InformationCardsContainer cards={[
        {
            image: <SupportUsImage />,
            title: voc(p => p.supportUsTitle),
            text: voc(p => p.supportUsText),
            link: "https://rubenshuis.be/en/node/4268"
        },
        {
            image: <OrganisationImage />,
            title: voc(p => p.organisationTitle),
            text: voc(p => p.organisationText),
            link: "https://rubenshuis.be/en/content/organisation"
        },
    ]} />
}


export default CardsRubensMuseum