import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to your page!</h1>
      <Link to="/">
        <Button>Homepage</Button>
      </Link>
    </div>
  );
}

export default Home;
