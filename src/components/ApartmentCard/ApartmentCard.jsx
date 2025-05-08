import { Link } from "react-router";
import './ApartmentCard.scss';

function ApartmentCard({ apartment }) {
  return (
    <Link to={`/ApartmentPage/${apartment.id}`}>
      <article className="apartment-card">
        <img 
          className="apartment-card__cover"
          src={apartment.cover}
          alt={`${apartment.title} cover`}
        />
        <span>{apartment.title}</span>
      </article>
    </Link>
  );
}

export default ApartmentCard;