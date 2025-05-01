import apartmentList from '../data/db.json';
import HomeBanner from "../components/HomeBanner";
import ApartmentCard from "../components/ApartmentCard";

function Home() {
  return (
    <>
      <HomeBanner />
      <ul>
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