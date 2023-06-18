import RubensImage from "../../../static/images/rubensMuseum/RubensImage"
import styled from "../../../styles/styled"
import { useVocabulary } from "../../../translation/vocabulary"

const AboutRubensStyled = styled.section`
    margin: 50px auto;
    width: 1100px;
    color: ${p => p.theme.colors.text};
    padding: 50px;
    background-color: ${p => p.theme.colors.back2};

    h2 {
        color: ${p => p.theme.colors.highText};
        font-size: 42px;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    img {
        width: 100%;
        height: 100%;
        margin-bottom: 30px;
    }
    div {
        font-size: 32px;
        line-height: 150%;
    }
`

const AboutRubens: React.FC = () => {
    const voc = useVocabulary()

    return <AboutRubensStyled>
        <h2>{voc(p => p.aboutRubensTitle)}</h2>
        <RubensImage />
        <div>{voc(p => p.aboutRubensText)}</div>
    </AboutRubensStyled>
}

export default AboutRubens