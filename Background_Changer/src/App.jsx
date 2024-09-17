import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  let [color, setColor] = useState("grey");

  return (
    <>
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center" style={{backgroundColor: color}}>
        <div className="container text-center fixed-bottom mb-5">
          <button
            type="button"
            onClick={() => setColor("red")}
            className="mx-2 btn btn-outline-dark"
          >
            Red
          </button>
          <button
            type="button"
            onClick={() => setColor("blue")}
            className="mx-2 btn btn-outline-dark"
          >
            Blue
          </button>
          <button
            type="button"
            onClick={() => setColor("yellow")}
            className="mx-2 btn btn-outline-dark"
          >
            Yellow
          </button>
          <button
            type="button"
            onClick={() => setColor("green")}
            className="mx-2 btn btn-outline-dark"
          >
            Green
          </button>
          <button
            type="button"
            onClick={() => setColor("black")}
            className="mx-2 btn btn-outline-dark"
          >
            Black
          </button>
          <button
            type="button"
            onClick={() => setColor("purple")}
            className="mx-2 btn btn-outline-dark"
          >
            Purple
          </button>
          <button
            type="button"
            onClick={() => setColor("orange")}
            className="mx-2 btn btn-outline-dark"
          >
            Orange
          </button>
          <button
            type="button"
            onClick={() => setColor("white")}
            className="mx-2 btn btn-outline-dark"
          >
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
