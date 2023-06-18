import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import themeStorage from "./themeStorage";
import ThemeEnum from "./ThemeEnum";
import { changeLanguageOn, Language } from "../../translation";

interface AppState {
    theme: ThemeEnum,
    language?: Language
}

const initialState: AppState = {
    theme: themeStorage.getTheme(),
    language: undefined
}


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeEnum>) => {
            themeStorage.setTheme(action.payload)
            state.theme = action.payload
        },
        setLightTheme: (state) => {
            themeStorage.setTheme(ThemeEnum.Light)
            state.theme = ThemeEnum.Light
        },
        setDarkTheme: (state) => {
            themeStorage.setTheme(ThemeEnum.Dark)
            state.theme = ThemeEnum.Dark
        },
        setLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload
            changeLanguageOn(state.language)
        }
    }
})


export const appActions = appSlice.actions

export default appSlice.reducer