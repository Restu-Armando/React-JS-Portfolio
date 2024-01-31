import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Skills } from "../data/data";

const SkillsPage = () => {
  return (
    <div className="skills" id="skills">
      <Container className="text-center fluid">
        <h1
          data-aos-once="false"
          data-aos="zoom-in-down"
          data-aos-delay="200"
          className="mt-5"
        >
          My Tech Stack
        </h1>
        <p data-aos="zoom-in-down" className="mb-5">
          Technologies i've been using for work with recently
        </p>

        <Row className="d-flex justify-content-center row-cols-lg-6 row-cols-md-3 row-cols-2 g-2 mt-5">
          {Skills.map((data, id) => (
            <Col data-aos="zoom-in" key={data.id} className="g-5">
              <img src={data.imageURL} width="70" height="70" alt={data.name} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SkillsPage;
