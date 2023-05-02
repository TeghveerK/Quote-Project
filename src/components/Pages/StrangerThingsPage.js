import { Box } from "@mui/material";
import React from "react";
import StrangerThingsQuotes from "../Quote APIs/StrangerThingsQuotes";

function StrangerThingsPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <StrangerThingsQuotes />
    </Box>
  );
}

export default StrangerThingsPage;
