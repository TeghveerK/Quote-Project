import QuoteConfig from "./quote-config";
import BreakingBad2Quote from "./breakingbad2";

export default class BreakingBadQuote extends QuoteConfig {
  name = "breakingbad";
  url = "https://api.breakingbadquotes.xyz/v1/quotes";
  title = "Breaking Bad";
  additionalConfigs = [new BreakingBad2Quote()];

  customize(response) {
    return {
      quote: response[0].quote,
      author: response[0].author,
    };
  }
}
