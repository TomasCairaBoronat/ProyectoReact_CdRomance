import NavLogo from '../images/logo.png';
import '../styles/nav-bar.css';
function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg" id='navBar'>
          <div className="container-fluid">
            <a className="navbar-brand" href="./index.html"><img src={NavLogo} id="logoNav" alt='logo of CD Romance'/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Categories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
}
export default NavBar;