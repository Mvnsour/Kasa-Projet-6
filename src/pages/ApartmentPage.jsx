import { useParams } from 'react-router';
import apartmentList from '../data/db.json';

function ApartmentPage() {
  const { id } = useParams();
  const apartment = apartmentList.find((apt) => apt.id === id);

  // Si aucun appartement trouvé (mauvais id)
  if (!apartment) {
    return <h2>Appartement non trouvé</h2>;
  }

  return (
    <div className="apartment-page">
      <img src={apartment.cover} alt={apartment.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
      <h1>{apartment.title}</h1>
      <p><strong>Location :</strong> {apartment.location}</p>
      <ul>
        {apartment.tags.map((tag, index) => (
          <li key={index} className="tag">{tag}</li>
        ))}
      </ul>
      <p><strong>Description :</strong> {apartment.description}</p>
      <h3>Équipements :</h3>
      <ul>
        {apartment.equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApartmentPage;
