import QuoteConfig from "./quote-config";

export default class DesignQuote extends QuoteConfig {
  name = "design";
  title = "Design";

  buildCustomUrl() {
    return `https://api.goprogram.ai/inspiration?rand=${this.generateRandomInteger()}`;
  }
}
