import { Box } from "@mui/material";
import React from "react";
import KanyeQuotes from "../Quote APIs/KanyeQuotes";

function Kanye() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap="16px"
      mt="100px"
    >
      <KanyeQuotes />
    </Box>
  );
}

export default Kanye;
