import "../App.css";

function InputForm() {
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
          <textarea className="form-control" id="myBox" rows="11"></textarea>
        </div>

        {/* Action button and summary on the same line */}
        <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
          {/* Summary content */}
          <div className="fs-6 text-changer">
            <b>Summary of your text</b>: Your text is of 5 minute
            <span className="fs-6">(s)</span> read. It has
            <span className="blockquote text-dark fs-6">
              <span className="fs-6">Character(s)</span>,
              <span className="fs-6">Word(s)</span> and
              <span className="fs-6">Sentence(s)</span>;
            </span>
          </div>

          {/* Clear Text Button */}
          <button type="submit" className="btn btn-lg mx-3 fs-6 btn-danger">
            Clear Text
          </button>
        </div>

        {/* Text modification buttons */}
        <div className="container d-flex flex-wrap justify-content-start">
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Convert to UPPERCASE
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Convert to lowercase
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Capitalize Text
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Remove Extra Spaces
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Copy Text
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Spell Checker
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Grammar Checker
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Text Summarizer
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
            Text Reversal
          </button>
          <button className="btn btn-sm mx-1 my-1 fs-6 btn-secondary">
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
          <p className="text-white border bg-secondary"></p>
        </div>
      </div>
    </>
  );
}

export default InputForm;
