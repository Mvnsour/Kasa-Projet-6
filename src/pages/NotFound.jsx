import { Link } from "react-router";
import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__msg">
        <span>Oups! La page que </span>
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/" className="home-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
export default NotFound;
