import words from '../constants/words';

const sweetsProvider = () => ({
  getWord(wordIndex) {
    return words[wordIndex];
  },
  wordsCount() {
    return words.length;
  }
});

export default sweetsProvider;
