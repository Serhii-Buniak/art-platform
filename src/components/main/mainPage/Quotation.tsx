import styled from "../../../styles/styled"
import { useVocabulary } from "../../../translation/vocabulary"

const QuotationStyled = styled.section`
    height: 315px;
    width: 1100px;
    margin: 100px auto 100px auto ;

    border: 1px solid ${p => p.theme.colors.highText};

    display: flex;
    justify-content: center;
    align-items: center;

    blockquote {
        color: ${p => p.theme.colors.text};

        height: 175px;
        width: 920px;

        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 160%;
    }

    span {
        color: ${p => p.theme.colors.highText};
    }
`

interface QuotationProps {

}

const Quotation: React.FC<QuotationProps> = () => {
    const voc = useVocabulary()

    return <QuotationStyled>
        <blockquote>
            “{voc(p => p.quotationText)}”<span> — {voc(p => p.quotationAuthor)}</span>
        </blockquote>
    </QuotationStyled>
}

export default Quotation