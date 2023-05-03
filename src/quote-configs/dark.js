import QuoteConfig from "./quote-config";

export default class DarkQuote extends QuoteConfig {
  name = "dark";
  url = "https://web-series-quotes-api.deta.dev/quote/?series=dark&count=1";
  title = "Dark (TV Series)";

  customize(response) {
    return {
      quote: response[0].quote,
      author: response[0].author,
    };
  }
}
