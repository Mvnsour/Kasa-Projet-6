import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <h1 className="error-title">404</h1>
      <p className="error-msg">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="home-link">
        <button>Retourner sur la page d’accueil</button>
      </Link>
    </div>
  );
}
export default NotFound;
