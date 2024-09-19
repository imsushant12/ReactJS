import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

function App() {
  // using the useState hook to initialize all the values.
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [passwordLength, setPasswordLength] = useState(8);

  // useRef hook
  const passwordRef = useRef(null);

  // useCallback hook and this function will return a randomly generated password
  const passwordGenerator = useCallback(() => {
    let currentPassword = "";
    let allLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "~`!@#$%^&*()-_+[{}]";
    const numbers = "1234567890";

    if (numberAllowed) {
      allLetters += numbers;
    }

    if (charactersAllowed) {
      allLetters += specialCharacters;
    }

    for (let i = 0; i < passwordLength; i++) {
      let char = Math.floor(Math.random() * allLetters.length);
      currentPassword += allLetters.charAt(char);
    }

    setPassword(currentPassword);
  }, [passwordLength, numberAllowed, charactersAllowed, setPassword]);

  // useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, numberAllowed, charactersAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div class="container max-w-md mx-auto shadow px-4 py-2 my-5 bg-dark text-warning">
        <h1 class="text-white text-center my-3">Password Generator</h1>

        <div class="input-group overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            class="form-control"
            placeholder="Password"
            readonly
            ref={passwordRef}
          />
          <button class="btn btn-success btn-lg">Copy</button>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <div class="d-flex align-items-center gap-2">
            <input
              type="range"
              min={6}
              max={100}
              class="form-range"
              onClick={(e) => {
                setPasswordLength(e.target.value);
              }}
            />
            <label class="mb-0">Length:</label>
            <span id="lengthDisplay">{passwordLength}</span>
          </div>

          <div class="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              id="numberInput"
              class="form-check-input"
              onClick={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label for="numberInput" class="form-check-label">
              Numbers
            </label>
          </div>

          <div class="d-flex align-items-center gap-2">
            <input
              type="checkbox"
              id="characterInput"
              class="form-check-input"
              onClick={() => {
                setCharactersAllowed((prev) => !prev);
              }}
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
