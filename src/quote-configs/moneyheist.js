import QuoteConfig from "./quote-config";

export default class MoneyHeistQuote extends QuoteConfig {
  name = "moneyheist";
  url =
    "https://web-series-quotes-api.deta.dev/quote/?series=money_heist&count=1";
  title = "Money Heist";

  customize(response) {
    return {
      quote: response[0].quote,
      author: response[0].author,
    };
  }
}
