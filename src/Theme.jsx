import { createGlobalStyle } from "styled-components"

export const Light = {
    primary: "#f4f3ee",
    accent: "#125bc9",
    black: "#000000",
    white: "#ffffff",
    headingBlack: "#0f172a",
    textBlack: "#ie293b"
}

export const Dark = {
    primary: "#f4f3ee",
    accent: "#125bc9",
    black: "#ffffff",
    white: "#000000",
    headingBlack: "#0f172a",
    textBlack: "#ie293b"
}

export const GlobalStyle = createGlobalStyle`

    body{
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.black};
    }
`;