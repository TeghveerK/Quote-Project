import QuoteConfig from "./quote-config";

export default class LuciferQuote extends QuoteConfig {
  name = "lucifer";
  url = "https://lucifer-quotes.vercel.app/api/quotes";
  title = "Lucifer";

  customize(response) {
    return {
      quote: response[0].quote,
      author: response[0].author,
    };
  }
}
