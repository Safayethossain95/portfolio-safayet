import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
      <div className="myContainer">
        <div className="nvbar myContainer">
          <nav>
            <ul>
              <li>
                <a className="secondaryText " href="#">Home</a>
              </li>
              <li>
                <a className="secondaryText " href="#">Projects</a>
              </li>
              <li>
                <a className="secondaryText " href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
