import WelcomeBanner from "../assets/images/home-banner.png";

function HomeBanner() {
  return (
    <div className="container-home-banner">
      <h1 className="banner-title">Chez vous, partout ailleurs</h1>
      <img src={WelcomeBanner} alt="" className="home-banner" />
    </div>
  );
}

export default HomeBanner;