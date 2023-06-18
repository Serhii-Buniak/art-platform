import styled from "styled-components";

const InformationPointsIconStyled = styled.svg`
    height: 150px;
    width: 150px;
    color: #00b5b5;
    fill: currentColor;
`

interface InformationPointsIconProps {

}

const InformationPointsIcon: React.FC<InformationPointsIconProps> = () => {
    return <InformationPointsIconStyled viewBox="0 0 64 64" width="1em" height="1em" focusable="false" aria-hidden="true" >
        <path d="M32 6a26 26 0 1 1 0 52 26 26 0 0 1 0-52zm0 2a24 24 0 1 0 0 48 24 24 0 0 0 0-48zm0 16a1 1 0 0 1 1 1v18a1 1 0 0 1-2 0V25a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z">
        </path>
    </InformationPointsIconStyled>
}

export default InformationPointsIcon;