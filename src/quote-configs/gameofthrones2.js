import QuoteConfig from "./quote-config";

export default class GameOfThrones2 extends QuoteConfig {
  name = "gameofthrones";
  url =
    "https://web-series-quotes-api.deta.dev/quote/?series=game_of_thrones&count=1";
  title = "Game of Thrones";

  customize(response) {
    return {
      quote: response[0].quote,
      author: response[0].author,
    };
  }
}
