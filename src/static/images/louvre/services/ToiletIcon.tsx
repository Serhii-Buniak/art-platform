import styled from "../../../../styles/styled";

const ToiletIconStyled = styled.svg`
    height: 150px;
    width: 150px;
    color: #62ea00;
    fill: currentColor;
`

interface ToiletIconProps {

}

const ToiletIcon: React.FC<ToiletIconProps> = () => {
    return <ToiletIconStyled viewBox="0 0 64 64" width="1em" height="1em" focusable="false" aria-hidden="true" >
        <path d="M48.45 15.97A6 6 0 0 1 54 20.28l4.61 18.2a1 1 0 0 1-.19.9c-.2.26-.51.41-.84.41H53l-3.6 20.85c-.08.5-.5.86-1 .88h-3.66c-.5-.02-.92-.39-1-.88l-3.51-20.83h-4.58c-.33 0-.64-.15-.84-.41a1 1 0 0 1-.19-.9l4.6-18.22a6 6 0 0 1 5.57-4.31zm-22.99 0a4 4 0 0 1 3.13 1.4c.73.96.97 2.21.65 3.38L23.87 38.9l-1.81 21.6c-.03.56-.5 1-1.06 1h-7.29c-.56 0-1.02-.44-1.06-1l-1.82-21.58-5.34-18.08a3.93 3.93 0 0 1 .63-3.43 4 4 0 0 1 3.16-1.44zm25.39 23.82h-8.46l3.3 19.61h1.86l3.27-19.43.03-.18zm-29.15 0H13l1.69 19.49v.12h5.36l1.64-19.43.01-.18zm26.7-21.71h-3.66a3.92 3.92 0 0 0-3.51 2.71L37 37.53v.15h19.26L52 20.79a3.92 3.92 0 0 0-3.6-2.71zm-22.77 0H9.28c-.56-.03-1.1.2-1.48.62a1.83 1.83 0 0 0-.26 1.59l5.14 17.39h9.38l5.15-17.39v-.05c.17-.52.1-1.09-.21-1.54a1.85 1.85 0 0 0-1.54-.62zM46.62 1.5a6.06 6.06 0 0 1 6.09 6 6 6 0 1 1-6.09-6zm-29.25 0a6.06 6.06 0 0 1 6.09 6 6 6 0 1 1-6.09-6zm29.35 2.14a3.93 3.93 0 1 0-.06 7.86 3.93 3.93 0 0 0 .06-7.86zm-29.25 0a3.93 3.93 0 1 0-.06 7.86 3.93 3.93 0 0 0 .06-7.86z">
        </path>
    </ToiletIconStyled>
}

export default ToiletIcon;