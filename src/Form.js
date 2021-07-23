import React from 'react';

export function Form() {
  return (
    <form>
      <label htmlFor="number_of_paragraphs">
        <input id="number_of_paragraphs" name="numberOfParagraphs" />
          Paragraphs
      </label>
      <div id="length_of_paragraph">
        <label>
          <input name="lengthOfParagraph" type="radio" value="long" />
            Long
        </label>
        <label>
          <input name="lengthOfParagraph" type="radio" value="medium" />
            Medium
        </label>
        <label>
          <input name="lengthOfParagraph" type="radio" value="short" />
            Short
        </label>
      </div>
      <label>
        <input name="startsWithCupcakeIpsum" type="checkbox" />
          Start with<br/>
        <span>&quot;Cupcake ipsum dolor sit amet&quot;</span>
      </label>
      <label>
        <input name="containsLove" type="checkbox" />
          Give your text some &quot;love&quot;
      </label>
      <div className="button-with-shadow generate">
        <button id="generate_button">Generate</button>
        <div className="shadow"></div>
      </div>
    </form>
  );
}
