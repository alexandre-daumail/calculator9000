import React, { useState } from "react";

import Calculator from './components/Calculator.js';
import CalculatorTitle from './components/CalculatorTitle';
import BeautifulScreen from './components/BeautifulScreen';
import ButtonBox from './components/ButtonBox';
import AmazingNumberButton from './components/AmazingNumberButton';
import MagnificientEqualButton from './components/MagnificientEqualButton';
import Button from './components/Button';
import GreatOperationButton from "./components/GreatOperationButton.js";

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const App = () => {

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const handleClickParent = (number) => {

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && number === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + number)))
            : toLocaleString(calc.num + number),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  }

  return (
    <Calculator>

      <CalculatorTitle />

      <BeautifulScreen value={calc.num ? calc.num : calc.res} />

      <ButtonBox>

        <AmazingNumberButton handleClickParent={handleClickParent} />
        <GreatOperationButton />
        <MagnificientEqualButton />

      </ButtonBox>
    </Calculator>
  );
};

export default App;