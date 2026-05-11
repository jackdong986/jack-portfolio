import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5b8cff",
    },
    secondary: {
      main: "#2dd4bf",
    },
    background: {
      default: "transparent",
      paper: "rgba(15, 23, 42, 0.72)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#94a3b8",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      letterSpacing: 0,
    },
    h2: {
      letterSpacing: 0,
    },
    h3: {
      letterSpacing: 0,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});

export default theme;
