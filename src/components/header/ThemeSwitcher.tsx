import { Switch } from "@mui/material";
import { isDarkTheme } from "../../redux/app/appSelectors";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { appActions } from "../../redux/app/appReducer";
import ThemeIcon, { ThemeIconEnum } from "../../static/images/ThemeIcon";
import { MouseEvent } from "react";

interface ThemeSwitcherProps {

}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
    const isThemeDark = useAppSelector(isDarkTheme)
    const dispatch = useAppDispatch()

    const handleChange = (event: MouseEvent<HTMLImageElement, globalThis.MouseEvent>) => {
        if (!isThemeDark) {
            dispatch(appActions.setDarkTheme())
        } else {
            dispatch(appActions.setLightTheme())
        }
    }

    return (
        <ThemeIcon
            type={isThemeDark ? ThemeIconEnum.Light : ThemeIconEnum.Dark}
            onClick={handleChange}
        />
    )
}

export default ThemeSwitcher