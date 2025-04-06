import React from "react";
import { Col, Row } from "react-bootstrap";

const techLogos = [
  { src: "/html.svg", alt: "HTML" },
  { src: "/tailwind.png", alt: "Tailwind" },
  { src: "/typescript.svg", alt: "Typescript" },
  { src: "/js.png", alt: "JavaScript" },
  { src: "/nodejs.png", alt: "Node.js" },
  { src: "/react.webp", alt: "React" },
  { src: "/next.webp", alt: "Next.js" },
  { src: "/mongo.png", alt: "MongoDB" },
  { src: "/git.png", alt: "Git" },
  { src: "/firebase.png", alt: "Firebase" },
  { src: "/c.png", alt: "C" },
  { src: "/python.svg", alt: "Python" },
  { src: "/java.png", alt: "Java" },
];

function Techstack() {
  return (
    <Row className="justify-content-center pb-5">
      {techLogos.map((tech, index) => (
        <Col key={index} xs={2} md={2} className="tech-icons d-flex justify-content-center">
          <img
            src={tech.src}
            alt={tech.alt}
            className="img-fluid rounded-2 shadow-sm"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
