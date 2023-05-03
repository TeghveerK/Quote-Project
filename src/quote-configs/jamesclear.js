import QuoteConfig from "./quote-config";

export default class JamesClearQuote extends QuoteConfig {
  name = "jamesclear";
  url = "https://www.jcquotes.com/api/quotes/random";
  title = "James Clear";

  customize(response) {
    return {
      quote: response.text,
      author: "James Clear",
    };
  }
}
