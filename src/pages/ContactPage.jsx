import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactPage() {
  return (
    <div className="contact " id="contact">
      <Container>
        <Row className="d-grid justify-content-center align-items-center mt-5">
          <Col className="text-center">
            <h1>For Any Question Please Mail Us:</h1>
            <h1>
              {" "}
              <a href="https:/mail.google.com" target="_blank" className="mail">
                restuarmando@gmail.com
              </a>{" "}
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;
