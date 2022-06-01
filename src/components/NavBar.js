import NavLogo from '../images/logo.png';
import CartWidget from './CartWidget.js';
import NavLinks from './NavLinks';
import '../styles/nav-bar.css';
function NavBar() {
    return(
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
        <a className="navbar-brand" href="./index.html"><img src={NavLogo} id="logoNav" alt='logo of CD Romance'/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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