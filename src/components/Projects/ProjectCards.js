import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
     <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="card-img-fixed"
      />
      <Card.Body className="d-flex flex-column">
        <div className="flex-grow-1">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>

        {!props.isBlog && props.demoLink && (
        <Button
        variant="primary"
        href={props.demoLink}
        target="_blank"
        style={{ marginTop: "2.5rem" }}
      >
        <CgWebsite /> &nbsp;
        {"Demo"}
      </Button>
      
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
