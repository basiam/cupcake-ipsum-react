const LIMIT_OF_PARAGRAPHS = 50;
const isValidNumberOfParagraphs = val => isFinite(String(val)) && val <= LIMIT_OF_PARAGRAPHS;

export default isValidNumberOfParagraphs;