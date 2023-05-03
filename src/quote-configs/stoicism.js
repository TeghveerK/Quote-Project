import QuoteConfig from "./quote-config";

export default class StoicismQuote extends QuoteConfig {
  name = "stoicism";
  url = "https://api.themotivate365.com/stoic-quote";
  title = "Stoicism";

  customize(response) {
    return {
      quote: response.quote.replace("@", ""),
      author: response.author,
    };
  }
}
