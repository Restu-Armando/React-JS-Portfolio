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

  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const handleNavbarClose = () => {
    // Menutup navbar jika sedang terbuka
    if (navbarExpanded) {
      setNavbarExpanded(false);
    }
  };

  return (
    <div className="sticky-top">
      <Navbar
        collapseOnSelect
        // bg="light"
        // data-bs-theme="light"
        expand="lg"
        expanded={navbarExpanded}
        className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavbarClose}>
            <img
              alt="Logo Brand"
              src="/logo/restu-transparant.svg"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setNavbarExpanded(!navbarExpanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center fw-medium gap-3 ">
              <Nav.Link
                as={Link}
                to={"/"}
                className="mx-2 "
                onClick={handleNavbarClose}
              >
                {" "}
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/aboutme"}
                className="mx-2 "
                onClick={handleNavbarClose}
              >
                {" "}
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"skills"}
                className="mx-2 "
                onClick={handleNavbarClose}
              >
                {" "}
                Skills
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/project"}
                className="mx-2 "
                onClick={handleNavbarClose}
              >
                {" "}
                Project
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/contact"}
                className="mx-2 "
                onClick={handleNavbarClose}
              >
                {" "}
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="fs-5 text-center">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
