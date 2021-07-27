import React, { useState } from 'react';
import { Form } from './Form';
import { Result } from './Result';
import { CupcakeMaker } from './libs/CupcakeMaker';

function App() {
  const [paragraphs, setParagraphs] = useState([]);

  const callback = inputs => {
    const maker = new CupcakeMaker();
    const newParagraphs = maker.run(inputs);
    setParagraphs(newParagraphs);
  };

  return (
    <div className="App">
      <Form callback={callback}/>
      <Result paragraphs={paragraphs} />
    </div>
  );
}

export default App;
