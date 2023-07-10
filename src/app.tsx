import { Stack, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import {
  DASHBOARD_PAGE,
  DETAILS_PAGE,
  FORM_PAGE,
  LIST_PAGE
} from "./constants/routing.constants";
import DetailsPage from "./pages/details";
import ListPage from "./pages/list";
import FormPage from "./pages/form";
import DashboardPage from "./pages";
import { theme } from "assets/theme";

export const App = () => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={6}
        autoHideDuration={1000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <BrowserRouter>
          <Stack direction="row">
            <Routes>
              <Route path={DASHBOARD_PAGE.path} element={<DashboardPage />} />
              <Route path={DETAILS_PAGE.path} element={<DetailsPage />} />
              <Route path={LIST_PAGE.path} element={<ListPage />} />
              <Route path={FORM_PAGE.path} element={<FormPage />} />
            </Routes>
          </Stack>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>
);
