import QuoteConfig from "./quote-config";

export default class RandomQuote extends QuoteConfig {
  name = "random";
  url = "https://api.quotable.io/quotes/random";
  title = "Random";

  customize(response) {
    return {
      quote: response[0].content,
      author: response[0].author,
    };
  }
}
