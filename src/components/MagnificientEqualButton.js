import Button from './Button';
import "./MagnificientEqualButton.css";

const MagnificientEqualButton = () => {
  return (
    <button
      key="="
      className="equals"
      onClick={() => {
        console.log(`equal clicked!`);
      }}
    > = </button>
  );
}
  
// Export our button component.
export default MagnificientEqualButton;