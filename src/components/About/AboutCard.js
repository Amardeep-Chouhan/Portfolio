import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign:"justify"}}>
            Hi everyone! I’m <span className="purple">Amardeep Chouhan</span>{" "}
            from <span className="purple">Bhopal, India</span>.
            <br />
            <br />
            I'm a {" "}
            <span className="purple">Full-Stack Web Developer</span>
            <span> with hands-on experience building scalable,production-ready web applications using {" "}</span>
            <span className="purple">React, Node.js,TypeScript,PostgreSQL,and MongoDB.</span>.
            <br />
            <br />I hold a Bachelor's degree in
            <span className="purple"> Information Technology (IoT) </span> from{" "}
            <span className="purple">Madhav Institute of Technology & Science (MITS), Gwalior.</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Modern Tech Stacks
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building software that solves real-world problems."{" "}
          </p>
          <footer className="blockquote-footer">Amardeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
