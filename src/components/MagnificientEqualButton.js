import "../css/MagnificientEqualButton.css";

const MagnificientEqualButton = (props) => {
  return (
    <button
      key="="
      className="equals .color-change-2x"
      onClick={() => {
        props.equalsClickHandler()
      }}
    > = </button>
  );
}
  
// Export our button component.
export default MagnificientEqualButton;