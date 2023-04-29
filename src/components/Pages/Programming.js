import { Box } from "@mui/material";
import React from "react";
import ProgrammingQuotes from "../Quote APIs/ProgrammingQuotes";

function Programming() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <ProgrammingQuotes />
    </Box>
  );
}

export default Programming;
