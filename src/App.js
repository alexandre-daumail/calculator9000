import React, { useState } from "react";

import Calculator from './components/Calculator';
import CalculatorTitle from './components/CalculatorTitle';
import BeautifulScreen from './components/BeautifulScreen';
import GreatOperationButton from './components/GreatOperationButton';
import MagniﬁcientEqualButton from './components/MagniﬁcientEqualButton';
import AmazingNumberButton from './components/AmazingNumberButton';

return (
    <Calculator>
      <BeautifulScreen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? comaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Calculator>
)

export default App;