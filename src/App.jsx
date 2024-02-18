import React from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { blue, orange } from "@mui/material/colors";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";

let theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: orange[600],
      },
      secondary: {
        main: blue[700],
      },
    },
  })
);

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <PageHeader />
          <PageContent />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
