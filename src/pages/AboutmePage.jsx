import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Experience } from "../data/data";

function AboutmePage() {
  return (
    <div className="aboutme" id="aboutme">
      <Container className="mt-5">
        <Row>
          <Col md={7} className="pt-2 desc">
            <h1 data-aos="fade-right" className="fw-bold">
              About Me
            </h1>
            <p
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              className="p-2"
            >
              As an undergraduate student at Universitas Putra Indonesia YPTK
              Padang with a computer science background, I have the
              responsibility of creating attractive and responsive websites as a
              Front-end Developer. I have expertise in combining design and
              development skills to provide optimal user experience. With quick
              adaptability, I am ready to take on the challenge of creating
              intuitive and aesthetically pleasing user interfaces. I am
              committed to continuously improving my skills and making positive
              contributions to website development projects.
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col data-aos="fade-right" md={7} className="pt-2">
            <h1 className="fw-bold">Work Experience</h1>
          </Col>
        </Row>
        {Experience.map((data, id) => (
          <Col key={id}>
            <Row
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              className="mt-2 detail-work"
            >
              <Col md={5} className="pt-2 g-col-6 justify-content-beetwen">
                <h6 className="mt-2 mb-2">{data.job}</h6>
                <Col className="d-flex justify-content-between mb-2">
                  <p className="mb-0">
                    <i class="fa-regular fa-building "></i> {data.perusahaan}
                  </p>
                  <Col md={5}>
                    <p className="mb-0 ">
                      <i class="fa-solid fa-location-dot mx-1"></i> {data.kota}
                    </p>
                  </Col>
                </Col>
              </Col>

              <Col md={2} className="pt-2 g-col-6 text-end">
                <span className="badge text-success rounded-4 border-0 mt-2 mb-2 ">
                  {data.type}
                </span>
                <Col className=" mb-2 ">
                  <p className="mb-0 text-end">
                    <i class="fa-regular fa-calendar mx-2"></i>
                    {data.Tanggal}
                  </p>
                </Col>
              </Col>
            </Row>
            <hr className="col-md-7 border-2" />
          </Col>
        ))}

        <Row data-aos="fade-right" data-aos-once="true" className="mt-2">
          <Col md={7} className="pt-2">
            <h1 className=" fw-bold">Education</h1>
          </Col>
        </Row>
        <Row
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="mt-2 education"
        >
          <Col md={5} className="pt-2 g-col-6 justify-content-beetwen">
            <h6 className="mt-2 mb-2">Computer Bachelor's Degree</h6>
            <Col className="d-flex justify-content-between mb-2">
              <p className="mb-0">
                <i class="fa-regular fa-building "></i> Universitas Putra
                Indonesia YPTK Padang
              </p>
              <Col md={5}>
                <p className="mb-0">
                  <i class="fa-solid fa-location-dot"></i> Padang, Indonesia
                </p>
              </Col>
            </Col>
          </Col>

          <Col md={2} className="pt-2 g-col-6 text-end">
            <span className="badge text-success rounded-4 border-0 mt-2 mb-2 ">
              Fulltime
            </span>
            <Col className=" mb-2 text-end">
              <p className="mb-0">
                <i class="fa-regular fa-calendar"></i> 7/2019 - 5/2023
              </p>
            </Col>
          </Col>
        </Row>
        <hr className="col-md-7 border-2" />
      </Container>
    </div>
  );
}

export default AboutmePage;
