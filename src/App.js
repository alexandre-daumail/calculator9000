import React, { useState } from "react";

import Calculator from './components/Calculator.js';
import CalculatorTitle from './components/CalculatorTitle';
import BeautifulScreen from './components/BeautifulScreen';
import ButtonBox from './components/ButtonBox';
import AmazingNumberButton from './components/AmazingNumberButton';
import MagnificientEqualButton from './components/MagnificientEqualButton';
import Button from './components/Button';
import GreatOperationButton from "./components/GreatOperationButton.js";

const App = () => {

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  return (
    <Calculator>
      <CalculatorTitle />
      <BeautifulScreen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
      <AmazingNumberButton />
      <GreatOperationButton />
      <MagnificientEqualButton />
      </ButtonBox>
    </Calculator>
  );
};

export default App;