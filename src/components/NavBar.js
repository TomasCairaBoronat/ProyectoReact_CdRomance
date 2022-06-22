import NavLogo from '../images/logo.png';
import CartWidget from './CartWidget.js';
import '../styles/nav-bar.css';
import {Link, NavLink} from 'react-router-dom'
function NavBar() {
    return(
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={NavLogo} id="logoNav" alt='logo of CD Romance'/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <NavLink to='/' className="nav-link active">Home</NavLink>
              </li>
              <li>
                <NavLink to='/contact' className="nav-link active ">Contact</NavLink>
              </li>
              <li className='nav-item dropdown'>
                <NavLink className="nav-link active dropdown-toggle" to="/games" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Games
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink to='/games' className="nav-link active " >All games</NavLink></li>
                  <li><NavLink to='/games/PS1' className="nav-link active " >PS1</NavLink></li>
                  <li><NavLink to='/games/Game-Cube' className="nav-link active ">Game Cube</NavLink></li>
                </ul>
              </li>
            </ul>

            <CartWidget/>
          </div>
        </div>
      </nav>
    );
};
export default NavBar;