import { useParams, Navigate } from 'react-router';
import apartmentList from '../data/db.json';
import Info from '../components/Info/Info';
import Collapse from '../components/Collapse/Collapse';
import Tags from '../components/Tags/Tags';
import Host from '../components/Host/Host';
import StarRating from '../components/StarRating/StarRating';
import Slideshow from '../components/SlideShow/SlideShow';
import './ApartmentPage.scss';

function ApartmentPage() {
  const { id } = useParams();
  const apartment = apartmentList.find((apt) => apt.id === id);

  if (!apartment) {
    return <Navigate to="/error" replace />;
  }

  return (
    <>
      <Slideshow pictures={apartment.pictures} title={apartment.title}/>
      <section className="apartment-info">
        <Info title={apartment.title} location={apartment.location} />
        <Tags tags={apartment.tags} />
      </section>
      <section className="apartment-host">
        <Host host={apartment.host.name} picture={apartment.host.picture} />
        <StarRating rating={apartment.rating} />
      </section>
      <Collapse title="Description" content={apartment.description} />
      <Collapse title="Équipements" content={apartment.equipments} />
    </>
  );
}

export default ApartmentPage;