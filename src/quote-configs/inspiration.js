import QuoteConfig from "./quote-config";

export default class InspirationQuote extends QuoteConfig {
  name = "inspiration";
  title = "Inspiration";

  buildCustomUrl() {
    return `https://api.goprogram.ai/inspiration?rand=${this.generateRandomInteger()}`;
  }
}
