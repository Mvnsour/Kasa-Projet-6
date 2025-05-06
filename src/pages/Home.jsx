import apartmentList from '../data/db.json';
import HomeBanner from "../components/HomeBanner";
import ApartmentCard from "../components/ApartmentCard";
import './Home.scss';

function Home() {
  return (
    <>
      <HomeBanner />
        <ul className="apartment-list">
          {apartmentList.map((apartment) => (
            <ApartmentCard
            key={apartment.id}
            apartment={apartment}
            />
          ))}
        </ul>
    </>
  );
}
export default Home;