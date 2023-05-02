import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function StoicismQuotes() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response);
  }

  function fetchQuote() {
    setIsLoading(true);
    fetch("https://api.themotivate365.com/stoic-quote")
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
    <Box display="flex" alignItems="center" flexDirection="column" gap="16px">
      <div>
        {quote.quote.replace("@", "")} -<b>{quote.author}</b>
      </div>
      <Button onClick={fetchQuote} variant="outlined">
        New Quote
      </Button>
    </Box>
  );
}

export default StoicismQuotes;
