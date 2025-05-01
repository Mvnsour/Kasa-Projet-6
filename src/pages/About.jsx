import AboutBanner from "../assets/images/about-banner.png";

function About() {
  return (
    <>
      <div className="img-container">
        <img src={AboutBanner} alt="landscape" className="about-banner"/>
      </div>
    </>
  );
}

export default About;