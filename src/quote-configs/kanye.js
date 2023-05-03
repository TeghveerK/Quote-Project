import QuoteConfig from "./quote-config";

export default class KanyeQuote extends QuoteConfig {
  name = "kanye";
  url = "https://api.kanye.rest";
  title = "Kanye West";

  customize(response) {
    return {
      quote: response.quote,
      author: "Kanye West",
    };
  }
}
