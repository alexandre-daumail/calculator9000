import React, { useState } from "react";

import "../css/Calculator.css";
import CalculatorTitle from './CalculatorTitle';
import BeautifulScreen from './BeautifulScreen';
import ButtonBox from './ButtonBox';
import AmazingNumberButton from './AmazingNumberButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import GreatOperationButton from "./GreatOperationButton.js";

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Calculator = () => {

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (number) => {

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

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return (

    <div className="calculator">

      <CalculatorTitle />

      <BeautifulScreen value={calc.num ? calc.num : calc.res} />

      <ButtonBox>

        <AmazingNumberButton numClickHandler={numClickHandler} resetClickHandler={resetClickHandler}/>
        <GreatOperationButton />
        <MagnificientEqualButton />

      </ButtonBox>

    </div>
  )

};

export default Calculator;