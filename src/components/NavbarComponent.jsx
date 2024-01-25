import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky-top">
      <Navbar
        // bg="light"
        // data-bs-theme="light"
        expand="lg"
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo Brand"
              src="./public/logo 1.svg"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center fw-medium gap-3 ">
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
            </Nav>
            <Nav className="fs-5 text-center">
              <a href="http://google.com">
                <i class="fa-brands fa-github mx-1 text-muted "></i>
              </a>
              <a href="http://google.com">
                <i class="fa-brands fa-square-instagram mx-1 text-muted "></i>
              </a>
              <a href="http://google.com">
                <i class="fa-brands fa-linkedin mx-1 text-muted "></i>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
