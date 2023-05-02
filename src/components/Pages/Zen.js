import { Box } from "@mui/material";
import React from "react";
import ZenQuotes from "../Quote APIs/ZenQuotes";

function Zen() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <ZenQuotes />
    </Box>
  );
}

export default Zen;
