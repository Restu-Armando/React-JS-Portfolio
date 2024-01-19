import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { TechnologiData } from "../data/data";

function ProjectComponents() {
  // let navigate = useNavigate();

  return (
    <div className="project mb-5">
      <Container className=" mt-5 ">
        <h1 className="mt-5 text-center">Projects</h1>
        <p className="mb-5 text-center">Things I've Build so far</p>
        <Row lg="3" md="2" className="g-5">
          {TechnologiData.map((data, id) => (
            <Col
              key={id}
              className="d-grid align-items-center justify-content-center "
            >
              <Card className="rounded-4" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={data.imageURL}
                  className="img-fluid rounded-top-4 "
                />
                <Card.Body className="shadow-lg rounded-4">
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Subtitle className="mb-2">
                    {data.description}
                  </Card.Subtitle>
                  <Card.Text>Tech Stack : {data.tag}</Card.Text>

                  <Card.Link
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover "
                  >
                    <i class="fa-solid fa-link me-1"></i> Live Priview
                  </Card.Link>

                  <Card.Link
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover "
                  >
                    <i class="fa-brands fa-github me-1"></i> View Code
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            {/* button ini menggunakan react router link */}
            <button className="button shadow">
              <span
                className="button-content"
                // onClick={() => navigate("/project")}
              >
                Show More
              </span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectComponents;
