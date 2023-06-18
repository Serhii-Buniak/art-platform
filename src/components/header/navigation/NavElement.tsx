import { NavLink } from "react-router-dom";
import styled from "../../../styles/styled";

const NavLinkStyled = styled(NavLink)`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 50px;
    color: ${p => p.theme.colors.text};
    line-height: 150%;
`


const NavElementStyled = styled.div`
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    font-size: 15px;
    &:hover {
        background-color: ${p => p.theme.colors.hover};
    }
`

interface NavElementProps {
    children: React.ReactNode,
    link: string
}

const NavElement: React.FC<NavElementProps> = ({ children, link }) => {
    return (
        <NavElementStyled as="li">
            <NavLinkStyled to={link}>
                {children}
            </NavLinkStyled>
        </NavElementStyled>
    )
}

export default NavElement