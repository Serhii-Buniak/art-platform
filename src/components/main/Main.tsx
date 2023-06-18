import styled from '../../styles/styled'


const MainStyled = styled.main`
    grid-area: main;
    background-color: ${p => p.theme.colors.back};

`
interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <MainStyled>
      {children}
    </MainStyled>
  )
}

export default Main