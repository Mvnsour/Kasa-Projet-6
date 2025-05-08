import AboutBanner from '/public/assets/images/banners/about-banner.png';
import Collapse from '../components/Collapse/Collapse';
import './About.scss';
import aboutList from '../data/aboutList.json';

function About() {
  return (
    <>
      <div className="about">
        <img src={AboutBanner} alt="landscape" className="about__banner"/>
        <section className='about__collapse'>
          {aboutList.map(({ title, content }) => (
            <Collapse key={title} title={title} content={content} /> 
          ))} 
        </section>
      </div>
    </>
  );
}

export default About;