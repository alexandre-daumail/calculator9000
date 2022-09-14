//Import React (Mandatory Step).
import React from 'react';

class Calculator extends React.Component {
    render() {
        return (
            <div className="frame">

                <CalculatorTitle value="Calculator 9000" />

                <div class="mainCalc">

                    <BeautifulScreen />

                    <div className="button-row">
                    </div>

                    <div className="button-row">
                        <AmazingNumberButton label={'7'} />
                        <AmazingNumberButton label={'8'} />
                        <AmazingNumberButton label={'9'} />
                        <GreatOperationButton label={'/'} />
                    </div>
                    
                    <div className="button-row">
                        <AmazingNumberButton label={'4'} />
                        <AmazingNumberButton label={'5'} />
                        <AmazingNumberButton label={'6'} />
                        <GreatOperationButton label={'*'} />
                    </div>
                    
                    <div className="button-row">
                        <AmazingNumberButton label={'1'} />
                        <AmazingNumberButton label={'2'} />
                        <AmazingNumberButton label={'3'} />
                        <GreatOperationButton label={'-'} />
                    </div>
                    
                    <div className="button-row">
                        <AmazingNumberButton label={' '} />
                        <AmazingNumberButton label={'0'} />
                        <AmazingNumberButton label={' '} />
                        <GreatOperationButton label={'+'} />
                    </div>
                    <div>
                    
                        <MagniﬁcientEqualButton label={'='} />

                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;