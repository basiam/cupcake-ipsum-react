import React from 'react';

export function Result({ paragraphs }) {

  const handleClick = () => {
    navigator.clipboard.writeText(paragraphs);
  };

  if (paragraphs.length < 1) {
    return null;
  }

  return (
    <div id="ipsum">
      <div className="result-body">
        {paragraphs.map((paragraph, index) =>
          <p className="paragraph" key={index}>
            {paragraph}
          </p>
        )}
      </div>
      <div className="text-controls">
        <div className="button-with-shadow clipboard">
          <button id="copy_button" onClick={handleClick}>
            Copy to clipboard
          </button>
          <div className="shadow">
          </div>
        </div>
      </div>
    </div>
  );
}
