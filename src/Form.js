import React from "react";
import FormHooks from "./FormHooks";
import options from "./constants/options";

export function Form({ callback, initialValues }) {
  const { inputs, handleInputChange, handleSubmit, handleTextChange } =
    FormHooks({ callback, initialValues });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number_of_paragraphs">
        <input
          id="number_of_paragraphs"
          name="numberOfParagraphs"
          type="text"
          onChange={handleTextChange}
          value={inputs.numberOfParagraphs}
        />
        Paragraphs
      </label>
      <div id="length_of_paragraph">
        {Object.keys(options).map((option) => (
          <label key={option}>
            <input
              name="lengthOfParagraph"
              type="radio"
              key={option}
              value={options[option]}
              onChange={handleInputChange}
              checked={inputs.lengthOfParagraph === options[option]}
            />
            {option}
          </label>
        ))}
      </div>
      <label>
        <input
          name="startsWithForestIpsum"
          type="checkbox"
          value={inputs.startsWithForestIpsum}
          onChange={handleInputChange}
          checked={inputs.startsWithForestIpsum}
        />
        Start with
        <br />
        <span>&quot;Forest ipsum dolor sit amet&quot;</span>
      </label>
      <label>
        <input
          name="containsLove"
          type="checkbox"
          value={inputs.containsLove}
          onChange={handleInputChange}
          checked={inputs.containsLove}
        />
        Give your text some &quot;love&quot;
      </label>
      <div className="button-with-shadow generate">
        <button id="generate_button">Generate</button>
        <div className="shadow"></div>
      </div>
    </form>
  );
}
