import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CartProvider, ErrorsProvider } from "./context/index";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <ErrorsProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </ErrorsProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
