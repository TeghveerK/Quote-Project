import { Box, Link, Typography } from "@mui/material";
import React from "react";
import InspirationalQuotes from "./Quote APIs/InspirationalQuotes";
import { Link as ReactRouterLink } from "react-router-dom";

function Homepage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <Typography variant="h1">Welcome</Typography>
      <Link component={ReactRouterLink} to="/anime">
        Anime
      </Link>
      <Link component={ReactRouterLink} to="/breakingbad">
        Breaking Bad
      </Link>
      <Link component={ReactRouterLink} to="/dark">
        Dark (TV Series)
      </Link>
      <Link component={ReactRouterLink} to="/design">
        Design
      </Link>
      <Link component={ReactRouterLink} to="/gameofthrones">
        Game of Thrones
      </Link>
      <Link component={ReactRouterLink} to="/inspiration">
        Inspiration
      </Link>
      <Link component={ReactRouterLink} to="/jamesclear">
        James Clear
      </Link>
      <Link component={ReactRouterLink} to="/kanye">
        Kanye
      </Link>
      <Link component={ReactRouterLink} to="/lucifer">
        Lucifer
      </Link>
      <Link component={ReactRouterLink} to="/moneyheist">
        Money Heist
      </Link>
      <Link component={ReactRouterLink} to="/programming">
        Programming
      </Link>
      <Link component={ReactRouterLink} to="/random">
        Random
      </Link>
      <Link component={ReactRouterLink} to="/ronswanson">
        Ron Swanson
      </Link>
      <Link component={ReactRouterLink} to="/stoicism">
        Stoicism
      </Link>
      <Link component={ReactRouterLink} to="/strangerthings">
        Stranger Things
      </Link>
    </Box>
  );
}

export default Homepage;
