import "../css/GreatOperationButton.css";

const GreatOperationButton = (props) => {

  const operators = ["+", "-", "*", "/"];

  return (
    <div className="great-opererator">

      {
        operators.map((operator, index) => {

          return (
            <button key={index} onClick={() => {props.signClickHandler(operator)}}> 
              {operator}
            </button>
          )

        })
      }

    </div>
  )
}
  
// Export our button component.
export default GreatOperationButton;