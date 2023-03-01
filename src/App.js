import React from "react";

import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { primary } from "./styles/Theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={primary}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
