import React from 'react';

export function Result({ paragraphs }) {

  const fallback = textToCopy => {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    return textArea.remove();
  };

  const copyToClipboard = textToCopy => {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(textToCopy);
    }
    return fallback(textToCopy);
  };


  const handleClick = () => {
    const text = paragraphs.join('\n');
    copyToClipboard(text);
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
