import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbuddy from "../../Assets/Projects/chatbuddy.png";
import yourOrderi from "../../Assets/Projects/yourOrderi.jpg";

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
              imgPath={chatbuddy}
              isBlog={false}
              title="CHATBUDDY"
              description="It is a dynamic web application developed using React for the frontend and Node.js with Express.js for the backend. It features real-time user interaction and chat capabilities, ensuring a responsive and engaging user experience. Encryption protocols are integrated to bolster data security, prioritizing user privacy. The application includes robust login/signup functionality to manage user access effectively. By leveraging these technologies and features, It provides a secure and interactive platform for users to connect and communicate in real-time, while maintaining stringent measures to protect sensitive information and ensure a seamless user journey."
              demoLink="https://chatbuddy4.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yourOrderi}
              isBlog={false}
              title="YourOrder"
              description="It is a responsive React app for in-restaurant food ordering, offering categorized menus, cart management, and real-time order tracking. It integrates external libraries for enhanced functionality and visual appeal, prioritizing modularity with well-structured components and CSS styling for a seamless user experience."
              // ghLink=""
              demoLink="https://yourorder.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
