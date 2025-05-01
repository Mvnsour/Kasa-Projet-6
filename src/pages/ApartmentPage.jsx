import { useParams } from 'react-router';
import apartmentList from '../data/db.json';

function ApartmentPage() {
  const { id } = useParams();
  const apartment = apartmentList.find((apt) => apt.id === id);

  // if the apartment is not found, you can handle it here
  if (!apartment) {
    return <h2>Appartement non trouvé</h2>;
  }

  return (
    <>
      <ul>
        {apartment.pictures.map((picture, index) => (
          <li key={index}>
            <img src={picture} alt={apartment.title} />
          </li>
        ))}
      </ul>
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
    </>
  );
}

export default ApartmentPage;