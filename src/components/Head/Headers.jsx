import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
const Headers = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" color="error">
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Headers;
