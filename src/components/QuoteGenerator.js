import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function QuoteGenerator() {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function handleResponseFinish(response) {
    setIsLoading(false);
    setQuote(response);
  }

  useEffect(() => {
    fetch(`https://api.goprogram.ai/inspiration?rand=${randomInteger(1, 1000)}`)
      .then((response) => response.json())
      .then(handleResponseFinish);
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {quote?.quote} -<b>{quote?.author}</b>
    </div>
  );
}

export default QuoteGenerator;
