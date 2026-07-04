import React from "react";
import { Col, Row } from "react-bootstrap";
import claude from "../../Assets/TechIcons/Claude.svg";
import openai from "../../Assets/TechIcons/openai-icon.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import cursor from "../../Assets/TechIcons/cursor-ai-code-icon.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={claude} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Claude AI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={openai} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={cursor} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Cursor</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
