import * as styledComponents from 'styled-components'
import { Theme } from "./theme"

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
    ThemeContext
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeContext }

export default styled