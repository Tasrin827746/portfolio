import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Morsala </span>
            from <span className="purple"> Dhaka, Bangladesh</span>
            <br />
            <br />
            I have completed B.sc in computer science and engineering in this year.
I recently completed a internship on JavaScript, React.js and Next.js

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Crafting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be Yourself"{" "}
          </p>
          <footer className="blockquote-footer">Morsala</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
