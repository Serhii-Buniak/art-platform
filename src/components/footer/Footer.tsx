import Breakpoints from '../../static/Breakpoints'
import styled from '../../styles/styled'
import { useVocabulary } from '../../translation/vocabulary'

const FooterStyled = styled.footer`
  background-color: ${p => p.theme.colors.back};
  color: ${p => p.theme.colors.text};
  font-size: 14px;

  grid-area: footer;
  height: 70px;
  width: 100%;
  padding-top: 20px;
  .footer-container {
    margin:  0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    height: 40px;

    border-top: 1px solid ${p => p.theme.colors.text};

    opacity: 0.6;

    > :first-child {
      margin-left: 10px;
    }

    > :last-child {
      margin-right: 10px;
    }

    @media ${Breakpoints.Default} {
      max-width: 70%;
    }
  }


`

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  const vocabulary = useVocabulary()

  return (
    <FooterStyled>
      <div className='footer-container'>
        <div>{vocabulary(p => p.copyright)}</div>
        <h1>{vocabulary(p => p.developed)}</h1>
      </div>
    </FooterStyled>
  )
}

export default Footer