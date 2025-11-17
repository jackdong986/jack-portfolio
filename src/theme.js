import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    mode: "dark", // switch to "light" if you prefer
    primary: {
      main: "#4f8bff",
    },
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});


export default theme;