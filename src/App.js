import React, { useState } from "react";

import Calculator from './components/Calculator.js';
import CalculatorTitle from './components/CalculatorTitle';
import BeautifulScreen from './components/BeautifulScreen';
import ButtonBox from './components/ButtonBox';
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
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Calculator>
  );
};

export default App;