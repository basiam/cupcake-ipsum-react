import { useState } from 'react';
import isValidNumberOfParagraphs, { LIMIT_OF_PARAGRAPHS } from './libs/isValidNumberOfParagraphs';
import RandomEngine from './libs/RandomEngine';

function FormHooks({ callback, initialValues }) {
  const [
    inputs,
    setInputs
  ] = useState(initialValues);

  const updateLocation = newInputs => {
    const { numberOfParagraphs, lengthOfParagraph, containsLove, startsWithCupcakeIpsum, seed } = newInputs;
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
    const seed = new RandomEngine().generate();
    updateLocation({ ...inputs, seed });
    callback({ ...inputs, seed });
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
    const value = isValidNumberOfParagraphs(target.value) ? target.value : LIMIT_OF_PARAGRAPHS;
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