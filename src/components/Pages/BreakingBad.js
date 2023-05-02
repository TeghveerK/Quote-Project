import { Box } from "@mui/material";
import React from "react";
import BreakingBadQuotes from "../Quote APIs/BreakingBadQuotes";

function BreakingBad() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <BreakingBadQuotes />
    </Box>
  );
}

export default BreakingBad;
