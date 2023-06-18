import styled from "../styles/styled"
import { useVocabulary } from "../translation/vocabulary"
import Main from "./main/Main"

const NotFoundStyled = styled.h1`
    text-align: center;
    color: ${p => p.theme.colors.text};
    font-size: 72px;
    margin: 200px auto 0 auto;
    padding: 50px;
    border: 1px solid ${p => p.theme.colors.highText};
    display: block;
    max-width: 700px;
    text-transform: capitalize;
    span {
        color: ${p => p.theme.colors.highText}
    }
`

const NotFound: React.FC = () => {
    const voc = useVocabulary()
    return <Main>
        <NotFoundStyled>
            {voc(p => p.notFound)} <span>404</span>
        </NotFoundStyled>

    </Main>
}

export default NotFound