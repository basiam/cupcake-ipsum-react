import React from 'react';

const text = "dadasdas";

export function Result() {

  return (
    <div id="cupcake_ipsum">
      <div className="bg-top">

      </div>
      <div className="body">
        <p className="paragraph">
          {text}
        </p>
      </div>
      <div className="bg-bottom">

      </div>
      <div className="text-controls">
        <div className="button-with-shadow clipboard">
          <button id="copy_button">
            Copy to clipboard
          </button>
          <div className="shadow">
          </div>
        </div>
      </div>
    </div>
  );
}