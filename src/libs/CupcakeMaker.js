import sweetsProvider from './sweetsProvider';
import randomIntFromInterval from './randomIntFromInterval';

const CUPCAKE_LOVE = ["amet", "sit", "dolor", "ipsum", "cupcake"];

export class CupcakeMaker {

  constructor() {
    this.wordBuffer = [];
    this.chanceOfLove = 0;
  }

  run({ startsWithCupcake, containsLove, numberOfParagraphs, lengthOfParagraph }) {
    if (startsWithCupcake) {
      this.startWithCupcakeIpsum();
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

  startWithCupcakeIpsum() {
    this.wordBuffer = CUPCAKE_LOVE;
  }

  setChanceOfLove(value) {
    this.chanceOfLove = value;
  }

  generateWord () {
    if (this.wordBuffer.length > 0) {
      return this.wordBuffer.pop();
    }
    if (this.chanceOfLove >= randomIntFromInterval(1, 100)) {
      return "I love";
    }
    const wordIndex = randomIntFromInterval(0, sweetsProvider().wordsCount() - 1);
    return sweetsProvider().getWord(wordIndex);
  }

  generateSentence() {
    const numberOfWords = randomIntFromInterval(3, 10);
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
    const numberOfSentences = randomIntFromInterval(sentencesRange[0], sentencesRange[1]);
    const sentences = [];
    for (let i = 0; i < numberOfSentences; ++i) {
      sentences.push(this.generateSentence());
    }
    return sentences.join(" ");
  }
}