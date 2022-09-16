import "../css/MagnificientEqualButton.css";

const MagnificientEqualButton = (props) => {
  return (
    <button
      key="="
      className="equals"
      onClick={() => {
        props.equalsClickHandler()
      }}
    > = </button>
  );
}
  
// Export our button component.
export default MagnificientEqualButton;