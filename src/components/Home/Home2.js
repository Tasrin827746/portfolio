import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, PHP, Javascript, Python and little bit Java </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
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
    </Container>
  );
}
export default Home2;
