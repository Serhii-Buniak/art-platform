enum ThemeEnum {
    Default = 'light',
    Light = 'light',
    Dark = 'dark',
}

export const themeValues = new Set<string>(Object.values(ThemeEnum))

export default ThemeEnum
