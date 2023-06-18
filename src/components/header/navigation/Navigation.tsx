import NavElement from "./NavElement"
import styled from "styled-components"
import { useVocabulary } from "../../../translation/vocabulary"

const NavigationStyled = styled.nav`
    ul {
        display: flex;
        gap: 20px
    }
`

const Navigation: React.FC = () => {
    const voc = useVocabulary()

    return (
        <NavigationStyled>
            <ul>
                <NavElement link="">
                    {voc(p => p.main)}
                    </NavElement>
                <NavElement link="louvre">
                    {voc(p => p.louvre)}
                    </NavElement>
                <NavElement link="rubens">
                    {voc(p => p.rubensMuseum)}
                    </NavElement>
                <NavElement link="british">
                    {voc(p => p.britishMuseum)}
                    </NavElement>
            </ul>
        </NavigationStyled>
    )
}

export default Navigation