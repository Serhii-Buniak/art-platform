import styled from "../../../../styles/styled"

const LockerRoomIconStyled = styled.svg`
    height: 150px;
    width: 150px;
    color: #ffdb7d;
    fill: currentColor;
`

const LockerRoomIcon: React.FC = () => {
    return <LockerRoomIconStyled viewBox="0 0 64 64" width="1em" height="1em" focusable="false" aria-hidden="true" >
        <path d="M62 46.58A4.06 4.06 0 0 0 59.69 43L33.13 29v-2h.14c4.23-1.05 6.87-3.68 6.87-6.85a6.85 6.85 0 0 0-6.85-6.85 6.76 6.76 0 0 0-6.83 6.15 1.13 1.13 0 0 0 2.26 0v-.13A4 4 0 0 1 29.84 17a4.8 4.8 0 0 1 3.45-1.45 4.6 4.6 0 0 1 4.59 4.59 3.67 3.67 0 0 1-1.21 2.65 8.57 8.57 0 0 1-4 2l-1.85.57V29h-.07L4.31 43A4.08 4.08 0 0 0 2 46.58a4.39 4.39 0 0 0 4.61 4.12h50.78A4.39 4.39 0 0 0 62 46.58zm-57.74 0c.04-.69.46-1.3 1.09-1.58L32 30.93h.06L58.63 45c.64.27 1.07.89 1.11 1.58a2.17 2.17 0 0 1-2.35 1.86H6.61a2.18 2.18 0 0 1-2.35-1.86z">
        </path>
    </LockerRoomIconStyled>
}

export default LockerRoomIcon