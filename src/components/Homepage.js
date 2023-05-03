import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

function Homepage({ config }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <Typography variant="h1">Welcome</Typography>

      {config.map((config) => {
        return (
          <Link component={ReactRouterLink} to={config.name} key={config.name}>
            {config.title ?? "NO TITLE!, but this is is: " + config.name}
          </Link>
        );
      })}
    </Box>
  );
}

export default Homepage;
