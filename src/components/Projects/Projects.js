import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import github from "../../Assets/Projects/githubanalyzer.png";
import datalens from "../../Assets/Projects/datalens.png";
import codemeet from "../../Assets/Projects/CodeMeet.png";
import Trovato from "../../Assets/Projects/Trovato.png";
import suicide from "../../Assets/Projects/suicide.png";
import linkup from "../../Assets/Projects/linkup.png";

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
              imgPath={Trovato}
              isBlog={false}
              title="Trovato-Commerce"
              description="A modern full-stack e-commerce platform built with React, TypeScript, Express.js, PostgreSQL, and real-time communication features.Trovato combines a production-ready shopping experience with secure authentication, payments, customer support chat, video calling, monitoring, and scalable backend architecture."
              ghLink="https://github.com/Amardeep-Chouhan/Trovato-Commerce"
              demoLink="https://trovato-commerce.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkup}
              isBlog={false}
              title="LinkUp"
              description="LinkUp is a full-stack real-time chat application that delivers seamless one-to-one and group messaging with typing indicators,secure authentication environment,real time online status updates,instant notifications. Built with React,Node.js, MongoDB, and Socket.IO,it provides a fast,responsive,and intuitive communication experience with scalable backend architecture for real-time collaboration across devices."
              ghLink="https://github.com/Amardeep-Chouhan/Linkup-live-chat-application"
              demoLink="https://linkup-live-chat-application.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codemeet}
              isBlog={false}
              title="CodeMeet"
              description="Developed a scalable full-stack technical interview platform supporting real-time video interviews, collaborative coding, secure code execution, live chat, and automated feedback.
              Implemented authentication, REST APIs, asynchronous background jobs, and optimized data fetching using React, Node.js, Express.js, MongoDB, Clerk, TanStack Query, Stream, and Inngest."
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="GitHub Profile Analyzer"
              description="GitHub Profile Analyzer API is a backend REST API built with Node.js, Express.js, and MySQL that fetches public GitHub profiles, analyzes repository and developer activity, computes meaningful insights, and stores the processed data for fast querying. The API integrates with the GitHub REST API v3 using Axios, leverages Aiven MySQL for cloud database hosting, is deployed on Render, and follows backend best practices with Helmet, CORS, and rate limiting to ensure security, reliability, and scalability."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datalens}
              isBlog={false}
              title="DataLens"
              description="Data Lens is a modern JSON formatter and explorer that simplifies debugging by providing instant validation, interactive tree visualization, and browser-based processing with complete data privacy."
              ghLink="https://github.com/Amardeep-Chouhan/DataLens"
               demoLink="https://blogs.soumya-jit.tech/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
