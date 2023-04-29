import { Box, Button, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";

function KanyeQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response);
  }

  function fetchQuote() {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then(handleResponse);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      {quote.quote} -<b>Kanye West</b>
      <Box display="flex" justifyContent="center" paddingTop="16px">
        <Button onClick={fetchQuote} variant="outlined">
          New Quote
        </Button>
      </Box>
    </Box>
  );
}

export default KanyeQuotes;
