import styled from "../../styles/styled"

interface GreetingContainerStyledProps {
    imageUrl: string
}

const GreetingContainerStyled = styled.section<GreetingContainerStyledProps>`
    width: 100%;
    height: 350px;

    background-image: url(${p => p.imageUrl});
    box-shadow: inset 0 0 0 2000px ${p => p.theme.colors.backOpacity25};
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        text-transform: uppercase;
        padding: 20px 60px;
        display: block;
        color: ${p => p.theme.colors.highText};
        text-align: center;
        font-size: 125px;
        box-shadow: 0px 0px 5px ${p => p.theme.colors.highText};
        background-color: ${p => p.theme.colors.back2};
        opacity: 0.75;
    }
`

interface GreetingContainerProps {
    imageUrl: string
    title: string
}

const GreetingContainer: React.FC<GreetingContainerProps> = ({ imageUrl, title }) => {
    return <GreetingContainerStyled imageUrl={imageUrl} >
        <h2>
            {title}
        </h2>
    </GreetingContainerStyled >
}

export default GreetingContainer