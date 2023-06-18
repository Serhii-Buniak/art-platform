import { useContext } from "react"
import { ThemeContext } from "../../styles/styled"

interface PlayButtonIconProps {
    onClick: () => void
    className?: string
}

const PlayButtonIcon: React.FC<PlayButtonIconProps> = ({ onClick: handleClick, className }) => {
    const theme = useContext(ThemeContext)


    return <svg className={className} onClick={handleClick} width="123" height="123" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_28_542)">
            <rect width="121.878" height="121.878" rx="60.9388" transform="matrix(1 0 0 -1 0.378662 122.539)" fill={theme.colors.highText} />
        </g>
        <path d="M54.0045 61.668L54.0045 79.8449L74.4535 61.668L54.0045 43.491L54.0045 61.668Z" fill={theme.colors.back} />
        <defs>
            <filter id="filter0_b_28_542" x="-9.62134" y="-9.33887" width="141.878" height="141.878" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_28_542" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_28_542" result="shape" />
            </filter>
        </defs>
    </svg>
}

export default PlayButtonIcon