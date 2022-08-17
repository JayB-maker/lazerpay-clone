import React from "react";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./AppRoutes";
import { GlobalStyle, Light } from "./Theme";

const App = () => {
  // const [isDarkmode, setIsDarkMode] = useState(false);

  // const toggle = () => {
  //   setIsDarkMode(!isDarkmode);
  // };

  return (
    <>
      <ThemeProvider theme={Light}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;
