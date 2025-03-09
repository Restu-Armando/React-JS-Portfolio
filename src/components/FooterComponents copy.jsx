import React from 'react'
import { Row, Container, Col, Nav } from 'react-bootstrap'
import { linkSocial } from '../data/data'
import { Link } from 'react-router-dom'

function FooterComponents() {
  // get current year for footer
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container fluid className="footer-container text-center">
        {/* Row 1 */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={6} lg={6}>
            <img
              src="/logo/YES-DARK.svg"
              alt="Logo Name"
              width={150}
              height={150}
            />
          </Col>
        </Row>

        {/* Row 2 */}
        {/* <Row className="justify-content-center mb-3">
          <Col xs={12} md={6} lg={4}>
            <p>Some footer description or tagline.</p>
          </Col>
        </Row> */}

        {/* Row 3 */}
        <Row className="justify-content-center mb-4 short-link">
          <Col xs={12} md={6} lg={6}>
            <Nav className="justify-content-between gap-3 mb-4">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/skills">
                Skills
              </Nav.Link>
              <Nav.Link as={Link} to="/project">
                Project
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Row 4 */}
        <Row className="justify-content-center mb-3 social-link">
          <Col xs={12} md={6} lg={6}>
            <ul className="list-unstyled d-flex justify-content-center gap-3 mb-4">
              {linkSocial.map((social, index) => (
                <li key={index} className="social-icon">
                  <a
                    href={social.URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`fa-brands fa-${social.name}`}></i>
                  </a>
                </li>
              ))}
            </ul>
            <span className="footer-name">
              {' '}
              <a
                href="https:/mail.google.com"
                target="_blank"
                className="footer-name list-unstyled"
              >
                restuarmando@gmail.com
              </a>{' '}
            </span>
          </Col>
        </Row>

        {/* Row 5 */}
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={12}>
            <hr className="mt-0" />
            <p>&copy; {currentYear} Restu Armando. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponents
