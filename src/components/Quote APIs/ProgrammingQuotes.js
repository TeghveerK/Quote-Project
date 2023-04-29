import { CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";

function ProgrammingQuotes() {
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

  return <div>ProgrammingQuotes</div>;
}

export default ProgrammingQuotes;
