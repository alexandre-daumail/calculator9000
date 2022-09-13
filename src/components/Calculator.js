//Import React (Mandatory Step).
import React from 'react';
import CalculatorTitle from './CalculatorTitle.js';

class Calculator extends React.Component {
    render()
    {
        return (
            <div className="frame">
            <CalculatorTitle value="Calculator9000"/>
            </div>
        );
    }
}

export default Calculator;