import QuoteConfig from "./quote-config";

export default class BreakingBad2Quote extends QuoteConfig {
  name = "breakingbad";
  url =
    "https://web-series-quotes-api.deta.dev/quote/?series=breaking_bad&count=1";
  title = "Breaking Bad";

  customize(response) {
    return {
      quote: response[0].quote,
      author: response[0].author,
    };
  }
}
