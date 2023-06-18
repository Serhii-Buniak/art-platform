import styled from "../../styles/styled"

const VisualCardsContainerStyled = styled.section`
    width: 1100px;
    margin: 60px auto;
    color: whitesmoke;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        justify-content: space-between;
    }
    .louvre-card {
        height: 300px;
        width: 100%;
        box-shadow: inset 0 0 0 2000px #00000060;
        background-size: cover;
        background-position: center center;

        padding: 20px;

        border-radius: 20px;
        transition: all .1s ease-in-out;

        :hover {
            transform: scale(1.02);
        }

        a {
            height: 100%;
            width: 100%;

            display: flex;
            gap: 20px;
            flex-direction: column;
            justify-content: end;

            cursor: pointer;
        }
    }
    .title {
        font-size: 27px;
    }

    .text {
        font-size: 18px;
    }
`
interface VisualCardsContainerProps {
    cards: {
        link: string
        imageUrl: string
        title: string
        text: string
    }[]
}


const VisualCardsContainer: React.FC<VisualCardsContainerProps> = ({ cards }) => {

    return <VisualCardsContainerStyled>
        <ul>
            {cards.map((card) => (
                <VisualCardContainer
                    key={card.title}
                    link={card.link}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    text={card.text}
                />
            ))}

        </ul>
    </VisualCardsContainerStyled>
}

interface LouvreCardProps {
    link: string
    imageUrl: string
    title: string
    text: string
}

const VisualCardContainer: React.FC<LouvreCardProps> = ({ link, imageUrl, title, text }) => {
    return <li style={{ backgroundImage: `url(${imageUrl})` }} className="louvre-card">
        <a target="blank" href={link}>
            <div className="title">
                {title}
            </div>

            <div className="text">
                {text}
            </div>
        </a>
    </li>
}

export default VisualCardsContainer