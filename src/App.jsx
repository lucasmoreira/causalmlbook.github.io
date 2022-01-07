import * as React from "react";
import { Typography, Container, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import maintheme from "./theme";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <ThemeProvider theme={maintheme}>
        <CssBaseline />
        <Navbar />
        <Container>
          <Typography variant="h1">CausalMl Book</Typography>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
