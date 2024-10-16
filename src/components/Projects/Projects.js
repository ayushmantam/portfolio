import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import randomPassImg from "../../Assets/Projects/randomPassImg.png";
import aarohaImg from "../../Assets/Projects/aarohaWeb.png";
import chatAppImg from "../../Assets/Projects/chatAppImg.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

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
              imgPath={ecommerce}
              isBlog={false}
              title="Full-Stack E-commerce Website"
              description="Developed a full-stack e-commerce platform with user/admin authentication, product management, order tracking, reviews, filtering, and search functionality. Designed RESTful APIs using Node.js, Express, and MongoDB for managing users, products, orders, and reviews. Built a responsive React UI for browsing, cart management, and integrated secure PayPal payments."
              ghLink="https://github.com/ayushmantam/FriendZone_ChatApp"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatAppImg}
              isBlog={false}
              title="FriendZone-ChatApp"
              description="Developed a responsive real-time chat application using React, Node.js, Express.js, MongoDB, and Socket.io.Implemented features such as user authentication, message encryption, and real-time messaging with Socket.io. Ensuredefficient data handling with MongoDB and secure communication through optimized Express.js backend"
              ghLink="https://github.com/ayushmantam/FriendZone_ChatApp"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="Random Password Generator"
              description="•	One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols.
•	One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
"
              ghLink="https://github.com/ayushmantam/password_generator"
              demoLink="https://passwordgenrator1.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduTechImg}
              isBlog={false}
              title="Gif Generator"
              description="Built a GIF generator using React.js, HTML, JavaScript, and Tailwind CSS. Users can generate random GIFs based on
 their input using the GIFMaker API. Designed with a user-friendly interface and efficient API integration to enhance
 user experience."
              demoLink="https://study-notion-edtech-frontend-pink.vercel.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aarohaImg}
              isBlog={false}
              title="Aaroha Official Webiste"
              description="Contributed to the development of Aaroha’s website, focusing on frontend design and implementation in collaboration
with team members. Enhanced the NGO’s online presence and accessibility to better support its mission."
              ghLink="#"
              demoLink="https://aaroha.org.in/index.html"
            //  <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
