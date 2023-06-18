import styled from "../../styles/styled"

const AboutUsContainterStyled = styled.section`
    margin: 50px auto;
    width: 1100px;
    background-color: ${p => p.theme.colors.back2};
    padding: 50px;
    .title {
        color: ${p => p.theme.colors.highText};
        font-size: 42px;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    .text {
        color: ${p => p.theme.colors.text};
        font-size: 24px;
        line-height: 150%;
    }
`

interface AboutUsContainterProps {
    title: string
    text: string
}

const AboutUsContainter: React.FC<AboutUsContainterProps> = ({ title, text }) => {

    return <AboutUsContainterStyled>
        <h2 className="title">{title}</h2>
        <div className="text">{text}</div>
    </AboutUsContainterStyled>
}



export default AboutUsContainter