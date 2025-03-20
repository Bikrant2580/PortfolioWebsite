import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="justify-content-center">
          <Col xs="auto" className="text-center social">
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100008964849381">
                <img src={navIcon1} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/bikrant157?igsh=MjFlempra21yZDhz">
                <img src={navIcon2} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/bikrant-pudasaini-1675b2221/">
                <img src={navIcon3} alt="LinkedIn" />
              </a>
            </div>
            <p className="mb-0">Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
