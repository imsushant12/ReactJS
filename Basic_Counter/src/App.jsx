import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [counter, setCounter] = useState(5);

  const increaseCounter = () => {
    if (counter >= 0 && counter < 20) {
      setCounter(counter + 1);
    }
  };
  const decreaseCounter = () => {
    if (counter > 0 && counter <= 20) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="mt-5 text-center">
        <button onClick={increaseCounter} type="button" class="btn btn-primary">
          Click here to increase the counter
        </button>
        <p className="my-2">Current count: {counter}</p>
        <button onClick={decreaseCounter} type="button" class="btn btn-danger">
          Click here to increase the counter
        </button>
      </div>
    </>
  );
}

export default App;
