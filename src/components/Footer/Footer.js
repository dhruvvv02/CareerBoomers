import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faInstagram, faLinkedin, faXTwitter, faTelegram , faYoutube} from "@fortawesome/free-brands-svg-icons"
import "./footer.css";
import logo from '../../assets/images/logo.png';

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#about-us",
  },

  {
    display: "Courses",
    url: "#courses",
  },

  {
    display: "Blog",
    url: "#",
  },

  {
    display: "Advertise with us",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Disclaimer",
    url: "#",
  },

  {
    display: "Refund Policy",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },

  {
    display: "Sitemap",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <img src={logo} width={45} height={35} className="" alt="Logo" /> CareerBoomers
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="social-icon fa-facebook" />
                </a>
              </span>

              <span>
                {" "}
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon fa-instagram" />
                </a>
              </span>

              <span>
                {" "}
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon fa-linkedin" />
                </a>
              </span>
              <br></br>
              <span>
                {" "}
                <a href="https://x.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} className="social-icon fa-twitter" />
                </a>
              </span>

              <span>
                {" "}
                <a href="https://telegram.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTelegram} className="social-icon fa-telegram" />
                </a>
              </span>

              <span>
                {" "}
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="social-icon " />
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: Bangalore, India</p>
            <p> Phone: +91 9301067260 </p>
            <p>Email: careerboomers@gmail.com</p>
          </Col>
        </Row>
        <Row>
          <Col className="copyright mt-4 ">
            <p>Copyright © 2024 CareerBoomers</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;