import * as seedrandom from "seedrandom";
import sjcl from 'sjcl';

const randomEngine = () => ({
  random() {
    return Math.random();
  },
  seed(seed) {
    if (seed) {
      return seedrandom(seed);
    }
    const bitArray = sjcl.hash.sha256.hash(seedrandom()());
    return sjcl.codec.hex.fromBits(bitArray);
  }
});

export default randomEngine;
