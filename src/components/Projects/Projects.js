import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import forum from "../../Assets/Projects/retro.png";
import hockey from "../../Assets/Projects/portfolio-6.jpg";
import foodie from "../../Assets/Projects/portfolio-3.jpg";
import arts from "../../Assets/Projects/portfolio-1.jpg";
import bus from "../../Assets/Projects/portfolio-5.jpg";
import bookShop from "../../Assets/Projects/portfolio-2.jpg";
import coffee_shop from "../../Assets/Projects/coffee_shop.jpg"
import katberry from "../../Assets/Projects/katberry.jpg"
import shop from "../../Assets/Projects/e-commerce.webp"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arts}
              isBlog={false}
              title="Art & Craft Project"
              description="Arts and crafts encompass a wide range of creative activities"
              demoLink="https://assignment10artandcrafts.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookShop} 
              isBlog={false}
              title="Book Shop"
              description="Give a short description of your project here.."
              demoLink="https://melodious-caramel-9b6e5f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Kitchen"
              description="Food Web"
              demoLink="https://dreamy-sprite-534856.netlify.app/?fbclid=IwY2xjawF838lleHRuA2FlbQIxMAABHWyoh-gtC9rVufKAgvrPLm1DMh0c-ujnjGvFgWbwgllCQJg40HcLiVXeTA_aem_gk_0KK-PSbK6H_eW8u7S-Q"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffee_shop}
              isBlog={false}
              title="Coffee Shop"
              description="Savor the Perfect Brew"
              demoLink="https://coffee-shop-six-xi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={katberry}
              isBlog={false}
              title="Katberry Studio"
              description="An Software Company Web"
              demoLink="https://katberrystudio-ehoi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Online Shop"
              description="An E-commerce Site"
              demoLink="https://lamptech-task-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forum}
              isBlog={false}
              title="Retro Forum"
              description="Online Retro Forum"
              demoLink="https://taupe-wisp-587c70.netlify.app/?fbclid=IwY2xjawF84J5leHRuA2FlbQIxMAABHU2haUhjNTsrRAkYm285tPGrmoUp1vYCyII5COIr7Z0UIyYgvX9jlgH8Xg_aem_9I8RlRDvRWB2NgoAMlosAw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              isBlog={false}
              title="Bus Service"
              description="Online Bus Ticketing System"
              demoLink="https://tasrin827746.github.io/Assignment5/?fbclid=IwY2xjawF84U1leHRuA2FlbQIxMAABHYGprZAkw7-5u0Hbbbf8CvwuC4gexiVl_939zXLIR5qkvIU8QNbYZXhaCQ_aem_srN7TUu_v5DpUj6-aBYfFQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hockey}
              isBlog={false}
              title="Hockey"
              description="Hockey Game"
              demoLink="https://tasrin827746.github.io/Assignment3/?fbclid=IwY2xjawF84dRleHRuA2FlbQIxMAABHSRuuhdZUeO7Kp_zoO5O4fpSAH9pY3nZNO3kvYNVeHviJcaG78jXHY3r1A_aem_6FU5V5DSlSnd_wpsKshsiA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
