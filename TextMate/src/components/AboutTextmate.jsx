import "../App.css";
import aboutUsImage from "../assets/about-us.png";

function AboutTextmate() {
  return (
    <>
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h1 className="display-4 text-info">About Textmate</h1>
          <p className="lead">Your ultimate text utility application!</p>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <img
              src={aboutUsImage}
              alt="Textmate Logo"
              className="img-fluid rounded-circle about-image mb-4"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h3 className="text-secondary">What is Textmate?</h3>
              <p className="text-muted">
                Textmate is a versatile text utility application designed to
                simplify your writing and editing process. Whether you need to
                count words, check grammar, or transform text, Textmate has got
                you covered! With a user-friendly interface and powerful
                features, you can enhance your productivity and creativity.
              </p>
              <p className="text-muted">
                Say goodbye to tedious text management and hello to seamless
                writing experiences. Textmate provides a comprehensive suite of
                tools tailored for writers, editors, and anyone who works with
                text. From counting characters to analyzing readability scores,
                Textmate ensures that your writing is not only polished but also
                efficient.
              </p>
              <p className="text-muted">
                One of the standout features is the built-in spell checker and
                grammar checker, which help you eliminate errors in real-time,
                ensuring your work is always professional and polished.
                Additionally, the text summarization tool can help you distill
                large documents into concise summaries, saving you valuable
                time.
              </p>
              <p className="text-muted">
                Textmate is not just about basic utilities; it includes advanced
                functionalities like text encryption and decryption for secure
                writing, as well as a text comparison tool that allows you to
                easily identify differences between document versions. Whether
                you are a student, professional, or content creator, Textmate is
                designed to meet your diverse text-processing needs.
              </p>
              <p className="text-muted">
                With ongoing updates and user feedback, Textmate continually
                evolves to incorporate the latest writing trends and
                technological advancements. Our commitment to enhancing user
                experience ensures that every writing session is productive and
                enjoyable.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-secondary">Features</h3>
          <div className="features-graphic">
            <pre>
              {`
            ┌─────────────────────────────────────┐
            │          Textmate Features          │
            ├─────────────────────────────────────┤
            │ • Word Counter                      │
            │ • Character Frequency Counter       │
            │ • Spell Checker                     │
            │ • Grammar Checker                   │
            │ • Sentence and Paragraph Counter    │
            │ • Text Summarizer                   │
            │ • Find and Replace                  │
            │ • Text Reversal                     │
            │ • Case Toggling                     │
            │ • Word Wrapping/Line Break Manager  │
            │ • Word Cloud Generator              │
            │ • Readability Score                 │
            │ • Text Encryption/Decryption        │
            │ • Text Comparison                   │
            │ • Text-to-Speech                    │
            │ • Character/Word Limit Checker      │
            │ • Undo/Redo                         │
            └─────────────────────────────────────┘
            `}
            </pre>
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-secondary">Created by</h3>
          <h5 className="text-info">Sushant Gaurav</h5>
          <div>
            <a
              href="https://www.linkedin.com/in/sushant-gaurav/"
              className="btn btn-sm btn-secondary mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://imsushant12.github.io/"
              className="btn btn-sm btn-secondary mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
            <a
              href="https://github.com/imsushant12"
              className="btn btn-sm btn-secondary mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://x.com/_im_sushant"
              className="btn btn-sm btn-secondary mx-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTextmate;
