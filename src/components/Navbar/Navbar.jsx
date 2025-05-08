import logoKasa from '/public/assets/logo/logo-kasa.png';
import { NavLink } from 'react-router';
import './Navbar.scss';

function Navbar() {
  return (
    <header>
      <nav className="nav">
        <NavLink to="/">
          <img src={logoKasa} alt="Logo Kasa" className="nav__logo-kasa" />
        </NavLink>
        <ul className="nav__list">
            <li>
              <NavLink to="/" className="nav__link">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav__link">
                A propos
              </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
