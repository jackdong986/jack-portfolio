import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4f8bff",
    },
    background: {
      default: "transparent", // Allow CSS animated background to show
      paper: "rgba(22, 27, 34, 0.4)", // Glassy paper background
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'transparent', // Override MUI default body bg
        },
      },
    },
  },
});

export default theme;