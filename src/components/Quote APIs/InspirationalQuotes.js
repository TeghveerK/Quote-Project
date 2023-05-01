import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function InspirationalQuotes() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function handleResponseFinish(response) {
    setIsLoading(false);
    setQuote(response);
  }

  function fetchQuote() {
    setIsLoading(true);
    return fetch(
      `https://api.goprogram.ai/inspiration?rand=${randomInteger(1, 1000)}`
    )
      .then((response) => response.json())
      .then(handleResponseFinish);
  }

  const WriteQuote = () => {
    return (
      <div>
        {quote?.quote} -<b>{quote?.author}</b>
      </div>
    );
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap="16px">
      <WriteQuote />
      <Button onClick={fetchQuote} variant="outlined">
        New Quote
      </Button>
    </Box>
  );
}

export default InspirationalQuotes;
