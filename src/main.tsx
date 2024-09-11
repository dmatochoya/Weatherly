// React and ReactDOM imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Third-party libraries
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Local imports
import { store } from "./app/store";
import theme from "./styles/theme";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
