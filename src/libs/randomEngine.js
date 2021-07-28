import * as seedrandom from "seedrandom";
import sjcl from 'sjcl';

export class RandomEngine {
  constructor(seed) {
    this.myrng = new seedrandom(seed);
  }

  random() {
    return this.myrng();
  }

  generate() {
    const currentDate = new Date().valueOf();
    const bitArray = sjcl.hash.sha256.hash(currentDate.toString());
    return sjcl.codec.hex.fromBits(bitArray);
  }
}

export default RandomEngine;
