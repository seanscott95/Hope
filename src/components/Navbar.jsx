import Image from 'react-bootstrap/Image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <Image
              src="../public/assets/images/h.png"
              className="m-1"
              width="40"
              height="40"
              alt="H"
            />
            <Image
              src="../public/assets/images/o.png"
              className="m-1"
              width="40"
              height="40"
              alt="O"
            />
            <Image
              src="../public/assets/images/p.png"
              className="m-1"
              width="40"
              height="40"
              alt="P"
            />
            <Image
              src="../public/assets/images/e.png"
              className="m-1"
              width="40"
              height="40"
              alt="E"
            />
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
