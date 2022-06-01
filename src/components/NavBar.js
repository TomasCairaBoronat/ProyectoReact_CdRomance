import NavLogo from '../images/logo.png';
import CartWidget from './CartWidget.js';
import '../styles/nav-bar.css';
import NavLinks from './NavLinks';
function NavBar() {
    return(
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="./index.html"><img src={NavLogo} id="logoNav" alt='logo of CD Romance'/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLinks hrefA="./index.html" title="Home"/>
            <NavLinks hrefA="#" title="Categories"/>
            <NavLinks hrefA="#" title="Contact"/>
            </ul>
            <CartWidget/>
          </div>
        </div>
      </nav>
    );
}
export default NavBar;