import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div class="container max-w-md mx-auto shadow px-4 py-2 my-5 bg-dark text-warning">
        <h1 class="text-white text-center my-3">Password Generator</h1>

        <div class="input-group overflow-hidden mb-4">
          <input
            type="text"
            value=""
            class="form-control"
            placeholder="Password"
            readonly
          />
          <button class="btn btn-success btn-lg">Copy</button>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <div class="d-flex align-items-center gap-2">
            <input type="range" min="6" max="100" class="form-range" />
            <label class="mb-0">Length:</label>
            <span id="lengthDisplay">10</span>
          </div>

          <div class="d-flex align-items-center gap-2">
            <input type="checkbox" id="numberInput" class="form-check-input" />
            <label for="numberInput" class="form-check-label">
              Numbers
            </label>
          </div>

          <div class="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              id="characterInput"
              class="form-check-input"
            />
            <label for="characterInput" class="form-check-label">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
