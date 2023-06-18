import { MouseEvent } from "react"
import styled from "../../styles/styled"
import { Language } from "../../translation"
import ImageWithoutSrc from "."

const FlagIconStyled = styled.img`
    cursor: pointer;
    height: inherit;
`

interface FlagIconProps extends ImageWithoutSrc {
    country: Language
}

const FlagIcon: React.FC<FlagIconProps> = ({ country, ...props }) => {
    return <FlagIconStyled
        src={`/images/flag/${country}-flag.png`}
        alt="theme-icon"
        {...props}
    />
}

export default FlagIcon