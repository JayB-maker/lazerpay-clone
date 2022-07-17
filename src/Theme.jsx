import { createGlobalStyle } from "styled-components";

export const Light = {
  primary: "#f4f3ee",
  accent: "#125bc9",
  black: "#000000",
  white: "#ffffff",
  background: "#f8fafc",
  headingBlack: "#0f172a",
  textBlack: "#ie293b",
};

export const Dark = {
  primary: "#f4f3ee",
  accent: "#125bc9",
  black: "#ffffff",
  white: "#000000",
  background: "#f8fafc",
  headingBlack: "#0f172a",
  textBlack: "#ie293b",
};

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        list-style: none;
    }

    body{
        background-color: ${(props) => props.theme.white};
        color: ${(props) => props.theme.black};
        font-family: 'Nunito', sans-serif;
        // font-family: 'Space Grotesk', sans-serif;
    }
`;
