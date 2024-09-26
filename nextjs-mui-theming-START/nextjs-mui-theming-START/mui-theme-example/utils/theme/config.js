import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
    secondary: {
      main: "#63f803",
      light: "#63ff73",
      dark: "#0e5e16",
      contrastText: "#FFFFFF",
    },
    primary: {
      main: "#9922ab",
      light: "#e533ff",
      dark: "#591463",
      contrastText: "#000000",
    },
  },
  typography: {
    h2: {
      fontFamily: "Lato",
    },
  },
};

const theme = createTheme(themeOptions);

export { theme };
