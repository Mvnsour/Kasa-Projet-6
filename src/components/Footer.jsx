import darkLogoKasa from '../assets/logo/dark-logo-kasa.png';

function Footer() {
  return (
    <footer className="footer">
      <img src={darkLogoKasa} alt="logo Kasa" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;