import QuoteConfig from "./quote-config";

export default class GameOfThronesQuote extends QuoteConfig {
  name = "gameofthrones";
  url = "https://api.gameofthronesquotes.xyz/v1/random";
  title = "Game of Thrones";

  customize(response) {
    return {
      quote: response.sentence,
      author: response.character.name,
    };
  }
}
