import "../App.css";
import { useState } from "react";

function InputForm() {
  const [text, setText] = useState("");

  // set the text area with the user input
  const previewText = (event) => {
    setText(event.target.value);
  };

  // set the text to balcn (Cleartext)
  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  // set the text to uppercase
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // set the text to lowercase
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // capitalize the text
  const capitalizeText = () => {
    const arr = text.split(" ");
    // loop through each element of the array & capitalize the first letter
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    // Joining all the elements of the array back into a string
    setText(arr.join(" "));
  };

  // removing the extra spaces
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ] + /).join(" ");
    setText(newText);
  };

  // copy text
  const copyText = () => {};

  // checking the spelling
  const spellChecker = () => {};

  // checking the grammar
  const grammarChecker = () => {};

  // summarize the text
  const summarizeText = () => {};

  // reverse the text
  const textReverse = () => {};

  // toggle the text
  const textToggle = () => {};

  // counting words logic
  let wordsCounter = text.split(" ").length;
  if (text === "") wordsCounter = 0;

  // counting sentences logic
  const re = /[.!?]/;
  let sentenceCounter = text.split(re).length - 1;

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <label
            htmlFor="myBox font-weight-bold"
            className="myBox text-changer mb-3"
          >
            <h3>Write your text below 📝</h3>
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={previewText}
            id="myBox"
            rows="11"
          ></textarea>
        </div>

        {/* Action button and summary on the same line */}
        <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
          {/* Summary content */}
          <div className="fs-6 text-changer">
            <b>Summary of your text</b>: Your text is of 5 minute
            <span className="fs-6">(s)</span> read.
            <span className="blockquote text-dark fs-6">
              <span className="fs-6"> It has {text.length} character(s)</span>,
              <span className="fs-6"> {wordsCounter} word(s),</span> and
              <span className="fs-6"> {sentenceCounter} sentence(s)</span>.
            </span>
          </div>

          {/* Clear Text Button */}
          <button
            type="submit"
            className="btn btn-lg mx-3 fs-6 btn-danger"
            onClick={clearText}
          >
            Clear Text
          </button>
        </div>

        {/* Text modification buttons */}
        <div className="container d-flex flex-wrap justify-content-start">
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={upperCase}
          >
            Convert to UPPERCASE
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={lowerCase}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={capitalizeText}
          >
            Capitalize Text
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={copyText}
          >
            Copy Text
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={spellChecker}
          >
            Spell Checker
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={grammarChecker}
          >
            Grammar Checker
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={summarizeText}
          >
            Text Summarizer
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={textReverse}
          >
            Text Reversal
          </button>
          <button
            className="btn btn-sm mx-1 my-1 fs-6 btn-secondary"
            onClick={textToggle}
          >
            Case Toggling
          </button>

          {/* 
          // Additional buttons for future that can be tried 
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Text-to-Speech
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Find and Replace
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Word Wrapping/Line Break Manager
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Readability Score
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Text Encryption/Decryption
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Text Comparison
          </button>
          */}
        </div>

        {/* Text preview */}
        <div className="mb-4 fs-6 text-changer">
          <h4 className="mt-4 mb-2 text-changer">📖 Preview of your text</h4>
          <p className="border">{text}</p>
        </div>
      </div>
    </>
  );
}

export default InputForm;
