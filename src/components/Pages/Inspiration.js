import { Box } from "@mui/material";
import React from "react";
import InspirationalQuotes from "../Quote APIs/InspirationalQuotes";
import InspirationalQuote2 from "../Quote APIs/InspirationalQuote2";

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
      <InspirationalQuote2 />
    </Box>
  );
}

export default Inspiration;
