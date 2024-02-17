import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import React from "react";
import PageHeader from "./components/PageHeader";
import { blue, orange } from "@mui/material/colors";
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
        <PageHeader />
        <PageContent />
      </ThemeProvider>
    </div>
  );
};

export default App;
