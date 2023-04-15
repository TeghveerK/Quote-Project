import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Homepage() {
  return (
    <React.Fragment>
      <Typography variant="h1" component="h2">
        Welcome
      </Typography>
      <p>Welcome to the website!</p>
    </React.Fragment>
  );
}

export default Homepage;
