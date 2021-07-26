import { useState } from 'react';
import options from './constants/options';

function FormHooks(callback) {
  const [
    inputs,
    setInputs
  ] = useState({
    containsLove: false,
    lengthOfParagraph: options.LONG,
    numberOfParagraphs: 5,
    startsWithCupcakeIpsum: false
  });


  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(oldInputs => ({ ...oldInputs,
      [event.target.name]: event.target.value }));
  };

  return {
    handleInputChange,
    handleSubmit,
    inputs
  };
}

export default FormHooks;