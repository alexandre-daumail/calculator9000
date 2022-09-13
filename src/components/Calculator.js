//Import React (Mandatory Step).
import React from 'react';
import '../index.css';
import CalculatorTitle from './CalculatorTitle.js';
import BeautifulScreen from './BeautifulScreen.js';
import GreatOperationButton from './GreatOperationButton.js';
import MagniﬁcientEqualButton from './MagniﬁcientEqualButton.js';
import AmazingNumberButton from './AmazingNumberButton.js';

class Calculator extends React.Component {
    render() {
        return (
            <div className="frame">
                <CalculatorTitle value="Calculator 9000" />
                <div class="mainCalc">
                    <BeautifulScreen />
                    <div className="button-row">
                        <GreatOperationButton label={'.'} />
                        <GreatOperationButton label={'/'} />
                    </div>
                    <div className="button-row">
                        <AmazingNumberButton label={'7'} />
                        <AmazingNumberButton label={'8'} />
                        <AmazingNumberButton label={'9'} />
                        <GreatOperationButton label={'*'} />
                    </div>
                    <div className="button-row">
                        <AmazingNumberButton label={'4'} />
                        <AmazingNumberButton label={'5'} />
                        <AmazingNumberButton label={'6'} />
                        <GreatOperationButton label={'-'} />
                    </div>
                    <div className="button-row">
                        <AmazingNumberButton label={'1'} />
                        <AmazingNumberButton label={'2'} />
                        <AmazingNumberButton label={'3'} />
                        <GreatOperationButton label={'+'} />
                    </div>
                    <div className="button-row">
                        <AmazingNumberButton label={'0'} />
                        <MagniﬁcientEqualButton label={'='} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;