import { useState } from 'react';
import isValidNumberOfParagraphs from './libs/isValidNumberOfParagraphs';
import options from './constants/options';

const NUMBER_OF_PARAGRAPHS = 5;


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


  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }

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