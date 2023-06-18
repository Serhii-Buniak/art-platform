import { useContext } from "react"
import { ThemeContext } from "../../styles/styled"

export enum ArrowIconEnum {
    // Up = "up",
    Down = "down",
    Right = "right",
    // Left = "left",
}

interface ArrowIconProps {
    direction: ArrowIconEnum
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction }) => {
    const theme = useContext(ThemeContext)

    let linesOfArrow: { firstLineD: string, secondLineD: string, width: string, height: string, viewBox: string }
    switch (direction) {
        case ArrowIconEnum.Down:
            linesOfArrow = { firstLineD: "M10.323 12.6758L20.3475 1.34691", secondLineD: "M0.322998 1.34766L10.3475 12.6765", width: "21", height: "14", viewBox: "0 0 21 14" }
            break
        case ArrowIconEnum.Right:
            linesOfArrow = { firstLineD: "M12 11.0254L0.671129 1.00085", secondLineD: "M0.670898 21.0254L11.9998 11.0008", width: "13", height: "22", viewBox: "0 0 13 22" }
            break
    }

    return (
        <svg width={linesOfArrow.width} height={linesOfArrow.height} viewBox={linesOfArrow.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={linesOfArrow.firstLineD} stroke={theme.colors.highText} />
            <path d={linesOfArrow.secondLineD} stroke={theme.colors.highText} />
        </svg>
    )
}

export default ArrowIcon