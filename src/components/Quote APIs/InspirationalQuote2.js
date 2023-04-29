import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function InspirationalQuote2() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response);
  }

  function fetchQuote() {
    setIsLoading(true);
    fetch()
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
      {quote.quoteText} -<b>{quote.quoteAuthor}</b>
      <Button onClick={fetchQuote} variant="outlined">
        New Quote
      </Button>
    </Box>
  );
}

export default InspirationalQuote2;
