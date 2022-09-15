import Button from './Button';

const AmazingNumberButton = () => {

  const amazingNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

    return (
      <div>

        {
          amazingNumbers.map((number, i) => {

            return (
              <Button
                key={i}
                className={number === "=" ? "equals" : ""}
                value={number}
                onClick={() => {
                  console.log(`${number} clicked!`);
                }}
              />
            )

          })
        }
      </div>
    )

}

// Export our button component.
export default AmazingNumberButton;