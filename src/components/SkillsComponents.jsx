import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SkillsComponents = () => {
  return (
    <div className="skills">
      <Container className="text-center fluid">
        <h1 className="mt-5">My Tech Stack</h1>
        <p className="mb-5">
          Technologies i've been using for work with recently
        </p>
        <Row className="d-flex justify-content-center row-cols-lg-6 row-cols-md-3 row-cols-2 g-2 mt-5">
          <Col>
            <img src="./public/html.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/css.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/js.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/bootstrap.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/reactjs.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/tailwind.svg" width="70" height="70" alt="" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center row-cols-lg-6 row-cols-md-3 row-cols-2 g-2 mt-5 ">
          <Col>
            <img src="./public/vscode.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/github.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/git.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/reactjs.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/reactjs.svg" width="70" height="70" alt="" />
          </Col>
          <Col>
            <img src="./public/reactjs.svg" width="70" height="70" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillsComponents;
