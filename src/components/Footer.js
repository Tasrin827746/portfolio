import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Morsala</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} MT</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
           <li className="social-icons">
                          <a
                            href="https://github.com/Tasrin827746"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <AiFillGithub />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.facebook.com/tasmiratasrin81/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <FaFacebook />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.linkedin.com/in/morsala-tasrin-7a596a35a/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.youtube.com/@creationoftasmira"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                          >
                            <AiFillYoutube />
                          </a>
                        </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
