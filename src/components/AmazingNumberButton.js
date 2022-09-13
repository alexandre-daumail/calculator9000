import React from 'react';
  
const AmazingNumberButton = (props) => {
  return (
    <input
      type="button"
      value={props.label}
    />
  );
}
  
// Export our button component.
export default AmazingNumberButton;