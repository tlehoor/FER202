import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import "../style/Footer.css"

const Footer = () => {
  return (
    <footer className="footer mt-5 text-align-content-center">
      <h2 className="footer-release-title">
        Releasing Simultaneously Worldwide in 2025
      </h2>
      <Row className="align-items-center justify-content-between mt-4">
        {/* Cột trái: Form đăng ký và mạng xã hội */}
        <Col md={6} className="text-left">
          <h3 className="newsletter-title">SIGN UP FOR THE NEWSLETTER!</h3>
          <Button className="subscribe-button">Subscribe</Button>
          <div className="social-icons mt-3">
            <a href="https://www.facebook.com/Pokemon/" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/facebook.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://x.com/pokemon/" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/x.png" alt="X" className="social-icon" />
            </a>
            <a href="https://youtube.com/pokemon" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/youtube.png" alt="YouTube" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/pokemon/" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://pinterest.com/pokemon" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/pinterest.png" alt="Pinterest" className="social-icon" />
            </a>
          </div>
        </Col>
        {/* Cột giữa: Logo và thông tin */}
        <Col md={6} className="text-center">
          <Image
            src="/images/main-img.jpg"
            alt="Pokémon Legends: Z-A Logo"
            className="footer-logo"
            fluid
          />
          <p className="company-text">The Pokémon Company</p>   
        </Col>
      </Row>
      {/* Footer Links và Copyright */}
      <div className="footer-links mt-4">
        <a href="#" className="footer-link">Privacy Notice</a>
        <a href="#" className="footer-link">Terms of Use</a>
        <a href="#" className="footer-link">Customer Service</a>
        <a href="#" className="footer-link">Forums</a>
      </div>
      <p className="copyright-text mt-2">
        ©2025 Pokémon. ©1995–2025 Nintendo / Creatures Inc. / GAME FREAK inc. Pokémon and Nintendo Switch are trademarks of Nintendo.
      </p>
    </footer>
  );
};

export default Footer;