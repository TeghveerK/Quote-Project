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
      <Link component={ReactRouterLink} to="/inspiration">
        Inspiration
      </Link>
      <Link component={ReactRouterLink} to="/anime">
        Anime Quotes
      </Link>
      <Link component={ReactRouterLink} to="/random">
        Random Quotes
      </Link>
      <Link component={ReactRouterLink} to="/kanye">
        Kanye Quotes
      </Link>
      <Link component={ReactRouterLink} to="/programming">
        Programming Quotes
      </Link>
    </Box>
  );
}

export default Homepage;
