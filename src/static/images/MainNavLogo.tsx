import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { isDarkTheme } from "../../redux/app/appSelectors"
import styled from "../../styles/styled"
import ImageWithoutSrc from "."

const NavLinkStyled = styled(NavLink)`
    width: 200px;
    height: 100px;
`

const MainNavLogoStyled = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
`

interface MainNavLogo extends ImageWithoutSrc {
    link: string
}

const MainNavLogo: React.FC<MainNavLogo> = ({ link, ...props }) => {
    const isThemeDark = useAppSelector(isDarkTheme)

    let imgUrl: string
    if (isThemeDark) {
        imgUrl = "/images/main-nav-logo-light.png"
    } else {
        imgUrl = "/images/main-nav-logo-dark.png"
    }

    return (
        <NavLinkStyled to={link}>
            <MainNavLogoStyled src={imgUrl} alt="main-nav-logo.png" {...props} />
        </NavLinkStyled>
    )
}

export default MainNavLogo