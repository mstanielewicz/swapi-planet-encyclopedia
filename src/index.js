import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { ApiClientProvider } from "./contexts/ApiClient";
import { App } from "./components/App/App";
import theme from "./styles/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApiClientProvider>
      <App />
    </ApiClientProvider>
  </ThemeProvider>,
  document.getElementById("app")
);
