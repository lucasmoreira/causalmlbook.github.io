import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const maintheme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: red[300],
    },
    error: {
      main: red.A400,
    },
  },
});

export default maintheme;
