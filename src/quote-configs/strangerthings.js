import QuoteConfig from "./quote-config";

export default class StrangerThingsQuote extends QuoteConfig {
  name = "strangerthings";
  url = "https://strangerthings-quotes.vercel.app/api/quotes";
  title = "Stranger Things";

  customize(response) {
    return {
      quote: response[0].quote,
      author: response[0].author,
    };
  }
}
