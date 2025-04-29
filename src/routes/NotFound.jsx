import { Link } from "react-router";

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <button>Go back to the homepage</button>
      </Link>
    </div>
  );
}
 export default NotFound;