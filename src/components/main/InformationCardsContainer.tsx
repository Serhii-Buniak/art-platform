import React from "react"
import styled from "styled-components"

const CardsRubensMuseumStyled = styled.section`
    width: 1100px;
    margin: 50px auto;
    color: ${p => p.theme.colors.text};

    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;

    display: flex;
    justify-content: center;
    gap: 20px;
`

interface InformationCardsContainerProps {
    cards: {
        image: React.ReactNode
        title?: string
        text: string
        link?: string
    }[]
}

const InformationCardsContainer: React.FC<InformationCardsContainerProps> = ({ cards }) => {

    return <CardsRubensMuseumStyled>
        {cards.map((card, index) => (
            <InformationCardContainer
                key={index}
                image={card.image}
                title={card.title}
                text={card.text}
                link={card.link}
            />
        ))}
    </CardsRubensMuseumStyled>
}

const CardRubensMuseumStyled = styled.div`
    width: 100%;
    img {
        height: 300px;
        width: 100%;
        object-fit: cover;
    }

    .text-block {
        margin: 20px 30px 0 30px;
    }

    .title {
        font-size: 32px;
        margin-bottom: 25px;
        color: ${p => p.theme.colors.highText};

        a[href] {
            color: ${p => p.theme.colors.link};
            &:hover {
                color: ${p => p.theme.colors.linkHover};
            }
        }
    }

    .text {
        font-size: 18px;
        line-height: 160%;
    }
`

interface InformationCardContainerProps {
    image: React.ReactNode
    text: string
    title?: string
    link?: string
}

const InformationCardContainer: React.FC<InformationCardContainerProps> = ({ image, title, text, link }) => {
    return <CardRubensMuseumStyled>
        {image}
        <div className="text-block">
            <div className="title"><a href={link}> {title} </a></div>
            <div className="text">{text}</div>
        </div>
    </CardRubensMuseumStyled>
}


export default InformationCardsContainer