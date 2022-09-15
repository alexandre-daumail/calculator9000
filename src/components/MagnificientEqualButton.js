import Button from './Button';
import "./MagnificientEqualButton.css";

const MagnificientEqualButton = () => {
  return (
    <Button
      key="="
      className="equals"
      value="="
      onClick={() => {
        console.log(`equal clicked!`);
      }}
    />
  );
}
  
// Export our button component.
export default MagnificientEqualButton;