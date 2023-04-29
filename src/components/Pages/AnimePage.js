import { Box } from "@mui/material";
import React from "react";
import AnimeQuotes from "../Quote APIs/AnimeQuotes";

function AnimePage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <AnimeQuotes />
    </Box>
  );
}

export default AnimePage;
