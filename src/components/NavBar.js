import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
  const RegisterButton = () => {
    return (
      <Link to="/register">
        <Button variant="contained" size="small">
          Register
        </Button>
      </Link>
    );
  };

  const LoginButton = () => {
    return (
      <Link to="/login">
        <Button variant="contained" size="small">
          Login
        </Button>
      </Link>
    );
  };

  return (
    <AppBar
      sx={{ backgroundColor: "black" }}
      position="static"
      className={classes.navbar}
    >
      <Toolbar className={classes.navbar}>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/" className={classes.navbarLink}>
            <Typography variant="h3" className={classes.title}>
              Quotes
            </Typography>
          </Link>
          <Box display="flex" justifyContent="center" gap="16px">
            <LoginButton />
            <RegisterButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
