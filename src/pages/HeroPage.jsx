import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import hero from "../assets/image/hero.png";
import { TypeAnimation } from "react-type-animation";
import SkillsPage from "./SkillsPage";
import ProjectPage from "./ProjectPage";

function HeroPage() {
  return (
    <div className="bg-light text-white vh-100 hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="12" className="mt-4 mb-4 text-start text-dark">
            <h1>
              Hi 👋, <br /> My name is <br />
              <span className="name"> Restu Armando </span> <br />
              <TypeAnimation
                className="mb-3"
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "I Am FrontEnd Developer🧑‍💻",
                  1000,
                  "I Am Web Development 🌍",
                  1000,
                  //   "We produce food for Guinea Pigs",
                  //   1000,
                  //   "We produce food for Chinchillas",
                  //   1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <button className="button shadow mt-5">
              <a
                href="https://drive.google.com/file/d/1josLACzrT6YHvLEY9rB8u0OxjewCcLgp/view?usp=sharing"
                target="_blank"
                className="text-decoration-none"
              >
                <span className="button-content"> Here My CV </span>
              </a>
            </button>
          </Col>

          <Col lg="6" md="12" className="text-center pb-5 d-block ">
            <img
              src={"/hero.png"}
              alt=""
              width="250"
              height="250"
              className="img-fluid mt-5 "
            />
          </Col>
        </Row>
      </Container>
      {/* <SkillsPage></SkillsPage>
      <ProjectPage></ProjectPage> */}
    </div>
  );
}

export default HeroPage;
