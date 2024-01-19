import React from "react";
import { Row, Container, Col } from "react-bootstrap";

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
              <img src={"/logo-2.svg"} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="d-flex justify-content-end mt-3 flex-wrap">
              <a href=""> restuarmando@gmail.com</a>
            </div>
          </Col>
          <Col sm={3} lg={3}>
            <div className="d-flex justify-content-end mt-3 gap-3">
              <a href="#">
                <i class="fa-brands fa-github mx-1 text-muted"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-square-instagram mx-1 text-muted "></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin mx-1 text-muted "></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        {/* Row 2 */}
        <Row>
          <Col sm={7} lg={6}>
            <div className="d-flex flex-column flex-md-row flex-lg-row gap-3 mb-3">
              <a href="#">Home </a>
              <a href="#">About</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
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
        {/* <Row className="text-center ">
          <Col sm="4" className="d-flex justify-content-start ">
            <img src={"/logo-2.svg"} alt="" />
          </Col>
          <Col sm="6" className="d-flex justify-content-end align-items-center">
            <p>
              <a className="text-decoration-none" href="https://gmail.com">
                restuarmando@gmail.com
              </a>
            </p>
          </Col>
          <Col
            xs="12"
            sm="2"
            className="d-flex align-items-center justify-content-end pb-3 gap-3"
          >
            <a href="http://google.com">
              <i class="fa-brands fa-github mx-1 text-muted"></i>
            </a>
            <a href="http://google.com">
              <i class="fa-brands fa-square-instagram mx-1 text-muted "></i>
            </a>
            <a href="http://google.com">
              <i class="fa-brands fa-linkedin mx-1 text-muted "></i>
            </a>
          </Col>
          <hr className="mt-4" />
        </Row> */}

        {/* <Row className="d-flex flex-row pt-4 ">
          <Col xs="4" sm="4">
            <p className="d-inline mx-4 ">
              <a className="text-decoration-none" href="">
                Home
              </a>
            </p>
            <p className="d-inline mx-4">
              <a className="text-decoration-none" href="">
                About
              </a>
            </p>
            <p className="d-inline mx-4">
              <a className="text-decoration-none" href="">
                Technologies
              </a>
            </p>
            <p className="d-inline mx-4">
              <a className="text-decoration-none" href="">
                Projects
              </a>
            </p>
            <p className="d-inline mx-4">
              <a className="text-decoration-none" href="">
                Contact
              </a>
            </p>
          </Col>
          <Col>
            <p className="d-inline d-flex justify-content-end">
              Design & Built by{""}
              <span className="footer-name"> Restu Armando</span> | &copy; All
              Rights Reserved
            </p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default FooterComponents;
