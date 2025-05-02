import logoKasa from '/public/assets/logo/logo-kasa.png';
import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logoKasa} alt="Logo Kasa" className="logo-kasa" />
      </NavLink>
      <ul>
        <NavLink to="/" className="nav-link">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className="nav-link">
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
}
export default Navbar;
