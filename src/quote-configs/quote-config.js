export default class QuoteConfig {
  customize(response) {
    return {
      quote: response.quote,
      author: response.author,
    };
  }

  buildCustomUrl() {
    return this.url;
  }

  generateRandomInteger(min, max) {
    const MIN_DEFAULT = 1;
    const MAX_DEFAULT = 10000;

    const MIN = this.min_rand_int || MIN_DEFAULT;
    const MAX = this.max_rand_int || MAX_DEFAULT;

    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  }
}
