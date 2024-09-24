import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    primary: {
      main: "#e09410",
      light: "#63ff73",
      dark: "#0e5e16",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#9922ab",
      light: "#e533ff",
      dark: "#591463",
      contrastText: "#000000",
    },
  },
};

const theme = createTheme(themeOptions);

export { theme };
