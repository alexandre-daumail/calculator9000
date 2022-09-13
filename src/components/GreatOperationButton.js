import React from 'react';
  
const GreatOperationButton = (props) => {
  return (
    <input
      type="button"
      value={props.label}
    />
  );
}
  
// Export our button component.
export default GreatOperationButton;