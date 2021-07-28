import sweetsProvider from './sweetsProvider';

const CUPCAKE_LOVE = ["amet", "sit", "dolor", "ipsum", "cupcake"];

export class CupcakeMaker {

  constructor(randomEngine) {
    this.randomEngine = randomEngine;
    this.chanceOfLove = 0;
    this.wordBuffer = [];
  }

  randomIntFromInterval(min, max) {
    return Math.floor(min + (max - min) * this.randomEngine.random());
  }

  run({ containsLove, lengthOfParagraph, numberOfParagraphs, startsWithCupcakeIpsum }) {
    if (startsWithCupcakeIpsum) {
      this.addCupcakeIpsum();
    }
    if (containsLove) {
      this.setChanceOfLove(10);
    }
    const paragraphs = [];
    for (let i = 0; i < numberOfParagraphs; i++) {
      const paragraph = this.paragraphGenerator(lengthOfParagraph);
      paragraphs.push(paragraph);
    }
    return paragraphs;
  }

  addCupcakeIpsum() {
    this.wordBuffer = [...CUPCAKE_LOVE];
  }

  setChanceOfLove(value) {
    this.chanceOfLove = value;
  }

  generateWord () {
    if (this.wordBuffer.length > 0) {
      return this.wordBuffer.pop();
    }
    if (this.chanceOfLove >= this.randomIntFromInterval(1, 100)) {
      return "I love";
    }
    const wordIndex = this.randomIntFromInterval(0, sweetsProvider().wordsCount() - 1);
    return sweetsProvider().getWord(wordIndex);
  }

  generateSentence() {
    const numberOfWords = this.randomIntFromInterval(5, 10);
    const words = [];
    for (let i = 0; i < numberOfWords; ++i) {
      words.push(this.generateWord());
    }
    const sentence = `${words.join(' ')}.`;
    return sentence.charAt(0).toUpperCase() + sentence.substr(1);
  }


  paragraphGenerator(lengthOfParagraph) {
    const allowedSentencesRange = {
      "long": [12, 15],
      "medium": [6, 11],
      "short": [3, 5]
    };
    const sentencesRange = allowedSentencesRange[lengthOfParagraph] || allowedSentencesRange.long;
    const numberOfSentences = this.randomIntFromInterval(sentencesRange[0], sentencesRange[1]);
    const sentences = [];
    for (let i = 0; i < numberOfSentences; ++i) {
      sentences.push(this.generateSentence());
    }
    return sentences.join(" ");
  }
}