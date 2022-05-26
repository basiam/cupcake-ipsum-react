import React, { useState, useEffect } from "react";
import { Form } from "./Form";
import { Result } from "./Result";
import { CupcakeMaker } from "./libs/CupcakeMaker";
import initialValues from "./initialValues";

function App() {
  const [paragraphs, setParagraphs] = useState([]);

  const callback = (inputs) => {
    const maker = new CupcakeMaker(inputs);
    const newParagraphs = maker.run(inputs);
    document.body.classList.remove("short");
    setParagraphs(newParagraphs);
  };

  useEffect(() => {
    if (initialValues.seed) {
      callback(initialValues);
    }
  }, [initialValues.seed]);

  return (
    <div className="App">
      <Form callback={callback} initialValues={initialValues} />
      <Result paragraphs={paragraphs} />
    </div>
  );
}

export default App;
