import { Box } from "@mui/material";
import React from "react";
import RandomQuote from "../Quote APIs/RandomQuote";

function RandomPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <RandomQuote />
    </Box>
  );
}

export default RandomPage;