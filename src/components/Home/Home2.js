import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
             <p className="home-about-body" style={{ textAlign: "justify" }}>
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              Through my internships at <i>
                <b className="purple">{" "} Django Softwares Pvt. Ltd. and Crystaltech Services Pvt. Ltd.</b> </i>, I gained hands-on experience in backend development,<i>
                <b className="purple">{" "}API integration, database management, authentication systems, debugging, testing, and performance optimization </b> </i> . Working with development teams helped me strengthen my understanding of clean code practices, collaboration, and building reliable software solutions.
              <br/>
              <br/>
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Tech Solutions,{" "}
                </b>
              </i>
              and creating real-world products,intuitive user experiences..
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>

          </Col>
         
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
