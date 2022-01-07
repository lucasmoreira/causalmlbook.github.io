import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import EarbudsIcon from "@mui/icons-material/Earbuds";

const Navbar = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <EarbudsIcon />
          <Typography variant="h5" sx={{ ml: 3 }} color="secondary.main">
            CausalML
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
