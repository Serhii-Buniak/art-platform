import { AppState } from "..";
import AppEnum from "./ThemeEnum";

export const getTheme = (state: AppState) => {
    return state.app.theme
}

export const isDarkTheme = (state: AppState) => {
    return state.app.theme === AppEnum.Dark
}

export const isLightTheme = (state: AppState) => {
    return state.app.theme === AppEnum.Light
}

export const getLanguage = (state: AppState) => {
    return state.app.language
}