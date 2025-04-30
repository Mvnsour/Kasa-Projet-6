import AboutBanner from "../assets/images/about-banner.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="img-container">
        <img src={AboutBanner} alt="landscape" className="about-banner"/>
      </div>
      <Footer />
    </>
  );
}

export default About;