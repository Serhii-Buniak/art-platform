import Breakpoints from "../../static/Breakpoints"
import styled from "../../styles/styled"

const HeaderStyled = styled.header`
  padding: var(--header-footer-spacing);
  background-color: ${p => p.theme.colors.back};
  grid-area: header;
  width: 100%;

  .header-container {
    margin: auto;

    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > :first-child {
      margin-left: 10px;
    }

    > :last-child {
      margin-right: 10px;
    }

    .tools-wrapper {
      gap: 15px;
      width: 200px;
    }

    @media ${Breakpoints.Default} {
      max-width: 70%;
    }
  }
`

export default HeaderStyled