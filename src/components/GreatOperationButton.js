import "./GreatOperationButton.css";

const GreatOperationButton = () => {

  const operators = ["+", "-", "*", "/"];

  return (
    <div className="great-opererator">

      {
        operators.map((operator, index) => {

          return (
            <button key={index} onClick={() => {console.log(`${operator} clicked!`)}}> 
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