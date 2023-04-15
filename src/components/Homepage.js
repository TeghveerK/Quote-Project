import { Box, Typography } from "@mui/material";
import React from "react";
import QuoteGenerator from "./QuoteGenerator";

function Homepage() {
  return (
    <Box display="flex" alignItems="center" mt="100px" flexDirection="column">
      <Typography variant="h1">Welcome</Typography>
      <QuoteGenerator />
    </Box>
  );
}

export default Homepage;
