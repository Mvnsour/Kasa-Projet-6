import { Link } from "react-router";
import './ApartmentCard.scss';

function ApartmentCard({ apartment }) {
  return (
    <article className="apartment-card">
      <Link to={`/ApartmentPage/${apartment.id}`}>
        <img 
          className="apartment-card__cover"
          src={apartment.cover}
          alt={`${apartment.title} cover`}
        />
        <span>{apartment.title}</span>
      </Link>
    </article>
  );
}

export default ApartmentCard;