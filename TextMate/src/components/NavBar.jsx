import "../App.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand mx-3 text-dark fs-4"
            href="/"
          >
            TextMate
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link mx-3 fs-5 text-dark"
                  aria-current="page"
                  href="#"
                >
                  About-TextMate
                </a>
              </li>
            </ul>
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label mx-2"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
