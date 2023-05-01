import { Box } from "@mui/material";
import React from "react";
import JamesClear from "../Quote APIs/JamesClear";

function JamesClearPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <JamesClear />
    </Box>
  );
}

export default JamesClearPage;
