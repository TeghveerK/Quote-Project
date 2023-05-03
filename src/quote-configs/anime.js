import QuoteConfig from "./quote-config";

export default class AnimeQuote extends QuoteConfig {
  name = "anime";
  url = "https://animechan.vercel.app/api/random";
  title = "Anime";

  customize(response) {
    return {
      quote: response.quote,
      author: response.character,
      anime: response.anime,
    };
  }
}
