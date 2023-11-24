const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img
              src="../src/assets/images/h.png"
              className="m-1"
              width="40"
              height="40"
              alt="H"
            ></img>
            <img
              src="../src/assets/images/o.png"
              className="m-1"
              width="40"
              height="40"
              alt="H"
            ></img>
            <img
              src="../src/assets/images/p.png"
              className="m-1"
              width="40"
              height="40"
              alt="H"
            ></img>
            <img
              src="../src/assets/images/e.png"
              className="m-1"
              width="40"
              height="40"
              alt="H"
            ></img>
          </a>
        </div>
        
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

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
