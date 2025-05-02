import AboutBanner from '/public/assets/images/banners/about-banner.png';

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