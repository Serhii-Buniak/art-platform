import { getLanguage } from "../../../redux/app/appSelectors"
import { useAppSelector } from "../../../redux/hooks"
import styled from "../../../styles/styled"
import { Language } from "../../../translation"
import { useVocabulary } from "../../../translation/vocabulary"

interface GreetingMainStyledProps {
    isUA: boolean
}

const GreetingMainStyled = styled.section<GreetingMainStyledProps>`
    margin-bottom: 40px;
    height: 100vh;

    background-image: url('/images/main/background.jpg');
    box-shadow: inset 0 0 0 2000px ${p => p.theme.colors.backOpacity25};
    background-size: cover;
    background-position: center center;

    display: flex;
    justify-content: center;
    align-items: center;

    .block-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        word-wrap: break-word;
        span {
            text-transform: capitalize;
            color: ${p => p.theme.colors.highText};
        }
    }

    .border-block {
        border-top: 3px solid ${p => p.theme.colors.highText};
        border-left: 3px solid ${p => p.theme.colors.highText};
        border-bottom: 3px solid ${p => p.theme.colors.highText};
        width: 125px;
        height: 400px;

    }

    .unvisible-block {
        width: calc(850px - 125px);
        height: 400px;

    }
    .text-block, span {
        font-family: ${p => p.isUA ? "Arsenal" : "Space Grotesk"};
    }
    .text-block {
        width: calc(850px - 125px - 10px);
        font-size: ${p => p.isUA ? 78 : 96}px;
        position: absolute;
        left: 30px;
        color: ${p => p.theme.colors.text};
    }
`

const GreetingMain: React.FC = () => {
    const voc = useVocabulary()
    const lang = useAppSelector(getLanguage)

    return <GreetingMainStyled isUA={lang === Language.Ukrainian}>
        <div className="block-wrapper">
            <div className="border-block"></div>
            <div className="unvisible-block"></div>
            <div className="text-block">
                {voc(p => p.greeting1)} <br /> <span>{voc(p => p.greeting2)}</span> {voc(p => p.greeting3)}
            </div>
        </div>
    </GreetingMainStyled>
}

export default GreetingMain