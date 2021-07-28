import { useState } from 'react';
import isValidNumberOfParagraphs, { LIMIT_OF_PARAGRAPHS } from './libs/isValidNumberOfParagraphs';
import options from './constants/options';
import * as seedrandom from "seedrandom";
import { createHash } from 'crypto';

const NUMBER_OF_PARAGRAPHS = 5;
/* eslint-disable max-len */
const initalValues = (
  /paragraphs\/(?<paragraphs>\d+)\/length\/(?<lengthOfParagraph>\w+)\/with_love\/(?<containsLove>\w+)\/start_with_cupcake\/(?<startsWithCupcakeIpsum>\w+)\/seed\/(?<seed>\w+)/gmiu
).exec(location.pathname);
/* eslint-enable max-len */

const containsLoveInit = Boolean(initalValues && initalValues.groups.containsLove === 'true');
const lengthOfParagraphInit = initalValues && initalValues.groups.lengthOfParagraph || options.LONG;
const numberOfParagraphsInit = initalValues && parseInt(initalValues.groups.paragraphs, 10) || NUMBER_OF_PARAGRAPHS;
const startsWithCupcakeIpsumInit = Boolean(initalValues && initalValues.groups.startsWithCupcakeIpsum === 'true');
const seedInit = initalValues ? initalValues.groups.seed : null;

function FormHooks(callback) {
  const [
    inputs,
    setInputs
  ] = useState({
    containsLove: containsLoveInit,
    lengthOfParagraph: lengthOfParagraphInit,
    numberOfParagraphs: numberOfParagraphsInit,
    seed: seedInit,
    startsWithCupcakeIpsum: startsWithCupcakeIpsumInit
  });

  const updateLocation = () => {
    const { numberOfParagraphs, lengthOfParagraph, containsLove, startsWithCupcakeIpsum } = inputs;
    const seed = createHash('sha256').update(seedrandom()).
      digest('hex');
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