import { Box } from "@mui/material";
import React from "react";
import LuciferQuotes from "../Quote APIs/LuciferQuotes";

function LuciferPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <LuciferQuotes />
    </Box>
  );
}

export default LuciferPage;
