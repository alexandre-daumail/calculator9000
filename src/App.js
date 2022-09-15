import React, { useState } from "react";

import Calculator from './components/Calculator.js';
import CalculatorTitle from './components/CalculatorTitle';
import BeautifulScreen from './components/BeautifulScreen';
import ButtonBox from './components/ButtonBox';
import AmazingNumberButton from './components/AmazingNumberButton';
import Button from './components/Button';


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];


const App = () => {
  return (
    <Calculator>
      <CalculatorTitle />
      <BeautifulScreen value="0" />
      <ButtonBox>
        <AmazingNumberButton/>
      </ButtonBox>
    </Calculator>
  );
};

export default App;