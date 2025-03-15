import React from "react";
import { Col, Row } from "react-bootstrap";

const toolLogos = [
  { src: "/vs.png", alt: "VS Code" },
  { src: "/vercel.png", alt: "Vercel" },
];

function Toolstack() {
  return (
    <Row className="justify-content-center pb-3 g-2">
      {toolLogos.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons px-1">
          <img
            src={tool.src}
            alt={tool.alt}
            className="img-fluid rounded-2 shadow-sm"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
