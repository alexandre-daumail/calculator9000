//Import React (Mandatory Step).
import React from 'react';
import CalculatorTitle from './CalculatorTitle.js';
import BeautifulScreen from './BeautifulScreen.js';
import GreatOperationButton from './GreatOperationButton.js';
import MagniﬁcientEqualButton from './MagniﬁcientEqualButton.js';

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