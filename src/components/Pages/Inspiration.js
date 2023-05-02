import { Box } from "@mui/material";
import React from "react";
import InspirationalQuotes from "../Quote APIs/InspirationalQuotes";

function Inspiration() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <InspirationalQuotes />
    </Box>
  );
}

export default Inspiration;
