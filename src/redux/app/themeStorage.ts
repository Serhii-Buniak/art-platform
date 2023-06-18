import AppEnum, { themeValues } from "./ThemeEnum"

class ThemeStorage {
    static readonly Theme = "theme"

    getTheme(): AppEnum {
        let theme = localStorage.getItem(ThemeStorage.Theme)

        if (!themeValues.has(theme ?? "")) {
            this.setTheme(AppEnum.Default)
        }

        return (theme ?? AppEnum.Default) as AppEnum
    }

    setTheme(theme: AppEnum) {
        localStorage.setItem(ThemeStorage.Theme, theme)
    }
}

export default new ThemeStorage()