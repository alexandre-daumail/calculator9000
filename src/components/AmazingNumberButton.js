import Button from './Button';
import "./AmazingNumberButton.css";

const AmazingNumberButton = (props) => {

  const amazingNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, "C", 0, "."]

  return (
    <div className="amazing-numbers">

      {
        amazingNumbers.map((number, i) => {

          return (
            <Button
              key={i}
              value={number}
              onClick={() => {
                number === "C"
                  ? props.resetClickHandler()
                  : props.numClickHandler(number)
              }
              }
            />
          )
        })
      }
    </div>
  )

}

// Export our button component.
export default AmazingNumberButton;