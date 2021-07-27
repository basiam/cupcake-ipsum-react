import { useState } from 'react';
import isValidNumberOfParagraphs from './libs/isValidNumberOfParagraphs';
import options from './constants/options';
import * as seedrandom from "seedrandom";
import { createHash } from 'crypto';

const NUMBER_OF_PARAGRAPHS = 5;

// console.log(location.pathname);

function FormHooks(callback) {
  const [
    inputs,
    setInputs
  ] = useState({
    containsLove: false,
    lengthOfParagraph: options.LONG,
    numberOfParagraphs: NUMBER_OF_PARAGRAPHS,
    startsWithCupcakeIpsum: false
  });

  const updateLocation = () => {
    const { numberOfParagraphs, lengthOfParagraph, containsLove, startsWithCupcakeIpsum } = inputs;
    const seed = createHash('sha256').update(seedrandom()).
      digest('base64');
    const path = `/paragraphs/${numberOfParagraphs}` +
      `/length/${lengthOfParagraph}/` +
      `with_love/${containsLove}/` +
      `start_with_cupcake/${startsWithCupcakeIpsum}/` +
      `seed/${seed}`;
    history.pushState(null, null, path);
  };

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    updateLocation();
    callback(inputs);
  };

  const handleInputChange = event => {
    event.persist();
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setInputs(oldInputs => ({ ...oldInputs, [target.name]: value }));
  };

  const handleTextChange = event => {
    event.persist();
    const { target } = event;
    const value = isValidNumberOfParagraphs(target.value) ? target.value : NUMBER_OF_PARAGRAPHS;
    setInputs(oldInputs => ({ ...oldInputs, [target.name]: value }));
  };

  return {
    handleInputChange,
    handleSubmit,
    handleTextChange,
    inputs
  };
}

export default FormHooks;