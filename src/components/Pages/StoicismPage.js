import { Box } from "@mui/material";
import React from "react";
import StoicismQuotes from "../Quote APIs/StoicismQuotes";

function StoicismPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <StoicismQuotes />
    </Box>
  );
}

export default StoicismPage;
