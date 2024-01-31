import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { TechnologiData } from "../data/data";

const ProjectPage = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    // Menambahkan lebih banyak proyek setiap kali tombol "Show More" ditekan
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <div className="project mb-5" id="project">
      <Container className="mt-lg-5">
        <h1 className="mt-lg-5 text-center">Projects</h1>
        <p className="mb-5 text-center">Things I've Build so far</p>
        <Row lg="3" md="2" className="g-5">
          {TechnologiData.slice(0, visibleProjects).map((data, id) => (
            <Col
              key={id}
              className="d-grid align-items-center justify-content-center "
            >
              <Card className="rounded-4">
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
                    href={data.linkView}
                    target="_blank"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover "
                  >
                    <i className="fa-solid fa-link me-1"></i> Live Priview
                  </Card.Link>

                  <Card.Link
                    href={data.LinkCode}
                    target="_blank"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover "
                  >
                    <i className="fa-brands fa-github me-1"></i> View Code
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mt-5">
            <button className="button shadow" onClick={loadMoreProjects}>
              <span className="button-content">Show More</span>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectPage;
