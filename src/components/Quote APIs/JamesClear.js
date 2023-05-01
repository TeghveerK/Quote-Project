import { Box, Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function JamesClear() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState({});

  function handleResponse(response) {
    setIsLoading(false);
    setQuote(response);
    console.log(response);
  }

  function fetchQuote() {
    setIsLoading(true);
    fetch("https://www.jcquotes.com/api/quotes/random")
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
        {quote.text} -<b>James Clear</b>
      </div>
      <Button onClick={fetchQuote} variant="outlined">
        New Quote
      </Button>
    </Box>
  );
}

export default JamesClear;
