import React from "react";
import { Row, Container, Col, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function FooterComponents() {
  // get current year for footer
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <Container>
        {/* Row 1 */}
        <Row className="mb-4">
          <Col sm={3} lg={6}>
            <div className="d-flex justify-content-start">
              <img
                src={"./logo/restu.png"}
                alt=""
                className="img-fluid"
                width="80"
                height="80"
              />
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="d-flex justify-content-end mt-3 flex-wrap">
              <a href=""> restuarmando@gmail.com</a>
            </div>
          </Col>
          <Col sm={3} lg={3}>
            <div className="d-flex justify-content-end mt-3 gap-3">
              <a href="https://github.com/Restu-Armando" target="_blank">
                <i className="fa-brands fa-github mx-1 text-muted "></i>
              </a>
              <a
                href="https://www.instagram.com/restu.armando/"
                target="_blank"
              >
                <i className="fa-brands fa-square-instagram mx-1 text-muted "></i>
              </a>
              <a
                href="https://www.linkedin.com/in/restu-armando/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin mx-1 text-muted "></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        {/* Row 2 */}
        <Row>
          <Col sm={7} lg={6}>
            <div className="d-flex flex-column flex-md-row flex-lg-row gap-3 mb-3">
              <Nav.Link href="" className="mx-2  ">
                <Link to={"/"}>Home</Link>
              </Nav.Link>
              <Nav.Link href="" className="mx-2 ">
                <Link to={"/aboutme"}>About</Link>
              </Nav.Link>
              <Nav.Link href="" className="mx-2 ">
                <Link to={"/skills"}>Skills</Link>
              </Nav.Link>
              <Nav.Link href="" className="mx-2 ">
                <Link to={"/project"}>Project</Link>
              </Nav.Link>
              <Nav.Link href="" className="mx-2 ">
                <Link to={"/contact"}>Contact</Link>
              </Nav.Link>
            </div>
          </Col>
          <Col sm={5} lg={6}>
            <div className="d-flex justify-content-end text-muted ">
              {" Designed and Built by"}
              <span className="footer-name"> Restu Armando </span> | Copyright
              &copy; {currentYear}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComponents;
