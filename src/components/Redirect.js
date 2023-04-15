import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Redirect() {
  return (
    <div>
      <h1>Thanks for registering!</h1>
      <Link to="/">
        <Button variant="outlined">Redirect</Button>
      </Link>
    </div>
  );
}

export default Redirect;
