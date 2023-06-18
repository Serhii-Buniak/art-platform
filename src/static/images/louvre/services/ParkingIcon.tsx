import styled from "../../../../styles/styled"

const ParkingIconStyled = styled.svg`
    height: 150px;
    width: 150px;
    color: #33b1ff;
    fill: currentColor;
`

interface ParkingIconProps {

}

const ParkingIcon: React.FC<ParkingIconProps> = () => {
    return <ParkingIconStyled viewBox="0 0 64 64" width="1em" height="1em" focusable="false" aria-hidden="true">
        <path d="M55.33 4c2.58 0 4.66 2.1 4.67 4.67v46.66c0 2.58-2.1 4.66-4.67 4.67H8.67A4.68 4.68 0 0 1 4 55.33V8.67C4 6.09 6.1 4.01 8.67 4zm0 1.87H8.67a2.8 2.8 0 0 0-2.8 2.8v46.66a2.8 2.8 0 0 0 2.8 2.8h46.66a2.8 2.8 0 0 0 2.8-2.8V8.67a2.8 2.8 0 0 0-2.8-2.8zM32.26 17.78c2.65-.15 5.26.7 7.32 2.38a8.1 8.1 0 0 1 2.64 6.31 8 8 0 0 1-2.58 6.38c-1.73 1.5-4.2 2.24-7.42 2.24h-6.69v11.13h-3.75V17.78zm.5 3.07h-7.23V32h6.73a6.7 6.7 0 0 0 4.61-1.4 5.17 5.17 0 0 0 1.6-4.1c.07-1.52-.51-3-1.6-4.07a6.33 6.33 0 0 0-4.39-1.58z">
        </path>
    </ParkingIconStyled>
}

export default ParkingIcon