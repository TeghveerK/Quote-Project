import React from "react";
import GameOfThronesQuotes from "../Quote APIs/GameOfThronesQuotes";
import { Box } from "@mui/material";
import GameOfThrones2 from "../Quote APIs/GameOfThrones2";

function GameOfThronesPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      mt="100px"
      flexDirection="column"
      gap="16px"
    >
      <GameOfThronesQuotes />
      <GameOfThrones2 />
    </Box>
  );
}

export default GameOfThronesPage;
