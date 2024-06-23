import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './Header.css';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header-main">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" component="div">
              🍗 Żarciomat 🍗
            </Typography>
            <Typography variant="h6" component="div">
              Znajdź swoje żarcie!
            </Typography>
          </Box>
          <Button color="inherit" className="login-button">
              Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
