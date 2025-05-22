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
import e_commerce from "../../Assets/Projects/e-commerce.png"
import restaurant from "../../Assets/Projects/restaurant.jpg"

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
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant"
              description="A stylish and responsive website for a restaurant, featuring a digital menu, online reservations, and a smooth user experience for browsing dishes and placing orders."
              demoLink="https://my-restaurant-eosin.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arts}
              isBlog={false}
              title="Art & Craft Project"
              description="A vibrant and creative platform showcasing a variety of arts and crafts, designed to inspire creativity through project galleries, tutorials, and hands-on activities."
              demoLink="https://assignment10artandcrafts.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e_commerce}
              isBlog={false}
              title="E-Commerce Website"
              description="A modern and responsive online shopping platform featuring product listings, detailed item pages, a shopping cart, and a smooth checkout experience."
              demoLink="https://e-commerce-7aeh.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookShop} 
              isBlog={false}
              title="Book Shop"
              description="A clean and user-friendly online bookstore where users can browse, explore, and purchase a wide range of books across various genres."
              demoLink="https://melodious-caramel-9b6e5f.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Kitchen"
              description="An elegant restaurant website featuring a curated menu, rich visuals, and a smooth user experience for browsing dishes, making reservations, and exploring culinary offerings."
              demoLink="https://dreamy-sprite-534856.netlify.app/?fbclid=IwY2xjawF838lleHRuA2FlbQIxMAABHWyoh-gtC9rVufKAgvrPLm1DMh0c-ujnjGvFgWbwgllCQJg40HcLiVXeTA_aem_gk_0KK-PSbK6H_eW8u7S-Q"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffee_shop}
              isBlog={false}
              title="Coffee Shop"
              description="A cozy and modern coffee shop website showcasing featured brews, a stylish menu, and an inviting atmosphere for coffee lovers to explore and enjoy."
              demoLink="https://coffee-shop-six-xi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={katberry}
              isBlog={false}
              title="Katberry Studio"
              description="A sleek and modern portfolio site for a software company, showcasing services, projects, and contact details with a responsive and user-friendly design."
              demoLink="https://katberrystudio-ehoi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Online Shop"
              description="A modern and responsive online shopping platform featuring product listings, detailed item pages, a shopping cart, and a smooth checkout experience."
              demoLink="https://lamptech-task-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forum}
              isBlog={false}
              title="Retro Forum"
              description="An online community forum with a nostalgic retro design, built for users to share thoughts, start discussions, and connect over shared interests."
              demoLink="https://taupe-wisp-587c70.netlify.app/?fbclid=IwY2xjawF84J5leHRuA2FlbQIxMAABHU2haUhjNTsrRAkYm285tPGrmoUp1vYCyII5COIr7Z0UIyYgvX9jlgH8Xg_aem_9I8RlRDvRWB2NgoAMlosAw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              isBlog={false}
              title="Online Bus Ticketing System"
              description="A web-based platform for booking bus tickets, allowing users to search routes, view schedules, select seats, and confirm reservations with ease."
              demoLink="https://tasrin827746.github.io/Assignment5/?fbclid=IwY2xjawF84U1leHRuA2FlbQIxMAABHYGprZAkw7-5u0Hbbbf8CvwuC4gexiVl_939zXLIR5qkvIU8QNbYZXhaCQ_aem_srN7TUu_v5DpUj6-aBYfFQ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hockey}
              isBlog={false}
              title="Hockey"
              description="A dynamic website dedicated to hockey, featuring team highlights, game schedules, player stats, and engaging visuals for fans and enthusiasts."
              demoLink="https://tasrin827746.github.io/Assignment3/?fbclid=IwY2xjawF84dRleHRuA2FlbQIxMAABHSRuuhdZUeO7Kp_zoO5O4fpSAH9pY3nZNO3kvYNVeHviJcaG78jXHY3r1A_aem_6FU5V5DSlSnd_wpsKshsiA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
