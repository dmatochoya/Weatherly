import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // TODO: Add ErrorBoundary
  },
  {
    path: "dashboard",
    element: <div>Dashboard</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
