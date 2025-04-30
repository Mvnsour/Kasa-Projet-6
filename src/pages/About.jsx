import AboutBanner from "../assets/images/about-banner.png";

function About() {
  return (
    <>
      <div className="img-container">
        <h1 className="about-title">About</h1>
        <img src={AboutBanner} alt="landscape" className="about-banner"/>
      </div>
    </>
  );
}

export default About;