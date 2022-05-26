import options from "./constants/options";

/* eslint-disable max-len */
const initialValues =
  /paragraphs\/(?<paragraphs>\d+)\/length\/(?<lengthOfParagraph>\w+)\/with_love\/(?<containsLove>\w+)\/start_with_forest\/(?<startsWithForestIpsum>\w+)\/seed\/(?<seed>\w+)/gimu.exec(
    location.pathname
  );
/* eslint-enable max-len */

const NUMBER_OF_PARAGRAPHS = 5;

const containsLoveInit = Boolean(
  initialValues && initialValues.groups.containsLove === "true"
);
const lengthOfParagraphInit =
  (initialValues && initialValues.groups.lengthOfParagraph) || options.LONG;
const numberOfParagraphsInit =
  (initialValues && parseInt(initialValues.groups.paragraphs, 10)) ||
  NUMBER_OF_PARAGRAPHS;
const startsWithForestIpsumInit = Boolean(
  initialValues && initialValues.groups.startsWithForestIpsum === "true"
);
const seedInit = initialValues ? initialValues.groups.seed : null;

export default {
  containsLove: containsLoveInit,
  lengthOfParagraph: lengthOfParagraphInit,
  numberOfParagraphs: numberOfParagraphsInit,
  seed: seedInit,
  startsWithForestIpsum: startsWithForestIpsumInit,
};
