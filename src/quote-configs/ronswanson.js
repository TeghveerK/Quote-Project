import QuoteConfig from "./quote-config";

export default class RonSwansonQuote extends QuoteConfig {
  name = "ronswanson";
  url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  title = "Ron Swanson";

  customize(response) {
    return {
      quote: response[0],
      author: "Ron Swanson",
    };
  }
}
