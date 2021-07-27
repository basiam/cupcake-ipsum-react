import words from '../constants/words';

const wordProvider = () => ({
  getWord(wordIndex) {
    return words[wordIndex];
  },
  wordsCount() {
    return words.length;
  }
});

export default wordProvider;
