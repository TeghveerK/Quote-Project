import { Box } from "@mui/material";
import React from "react";
import BreakingBadQuotes from "../Quote APIs/BreakingBadQuotes";
import BreakingBad2 from "../Quote APIs/BreakingBad2";

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
      <BreakingBad2 />
    </Box>
  );
}

export default BreakingBad;
