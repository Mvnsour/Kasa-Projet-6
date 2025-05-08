import WelcomeBanner from '/public/assets/images/banners/home-banner.png';
import './HomeBanner.scss'

function HomeBanner() {
  return (
    <div className="banner">
      <h1 className="banner__title">
        <span>Chez vous,</span> partout ailleurs
      </h1>
      <img src={WelcomeBanner} alt="" className="banner__img" />
    </div>
  );
}

export default HomeBanner;