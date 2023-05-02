import { Box } from "@mui/material";
import React from "react";
import DarkQuotes from "../Quote APIs/DarkQuotes";

function Dark() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <DarkQuotes />
    </Box>
  );
}

export default Dark;
