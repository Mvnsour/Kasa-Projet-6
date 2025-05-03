import AboutBanner from '/public/assets/images/banners/about-banner.png';
import Collapse from '../components/Collapse';
import '../pages/About.scss';
import aboutList from '../data/aboutList.json';

function About() {
  return (
    <>
      <div className="img-container">
        <img src={AboutBanner} alt="landscape" className="about-banner"/>
        <div className="main-collapse-container">
        {aboutList.map(({ title, content }) => (
          <section className="about-collapse-container" key={title}>
            <Collapse title={title} content={content} />
          </section> 
        ))} 
      </div>
      </div>
    </>
  );
}

export default About;