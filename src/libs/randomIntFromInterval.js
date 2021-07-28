import randomEngine from './randomEngine';

export default (min, max) => Math.floor(min + (max - min) * randomEngine.random());