import Button from './Button';
import "./GreatOperationButton.css";

const GreatOperationButton = () => {
  const operators = ["+", "-", "*", "/"];

  return (
    <div className="great-opererator">

      {
        operators.map((operator, i) => {

          return (
            <Button
              key={i}
              className={operator === "=" ? "equals" : ""}
              value={operator}
              onClick={() => {
                console.log(`${operator} clicked!`);
              }}
            />
          )

        })
      }
    </div>
  )
}
  
// Export our button component.
export default GreatOperationButton;