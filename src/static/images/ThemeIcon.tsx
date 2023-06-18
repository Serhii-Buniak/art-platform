import { MouseEvent } from "react"
import styled from "../../styles/styled"
import ImageWithoutSrc from "."

const ThemeIconStyled = styled.img`
    cursor: pointer;
    height: inherit;
`

export enum ThemeIconEnum {
    Dark = 'dark',
    Light = 'light'
}

interface ThemeIconProps extends ImageWithoutSrc {
    type: ThemeIconEnum
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ type, ...props }) => {
    return <ThemeIconStyled
        src={`/images/theme/${type}-theme-icon.png`}
        alt="theme-icon"
        {...props}
    />
}

export default ThemeIcon