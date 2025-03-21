import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CartProvider } from "./components/context/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  );
}
