import React, { useState, useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="sticky-top">
      <Navbar expand="lg" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={() => setIsOpen(false)}>
            <motion.img
              alt="Logo"
              src="/logo/YES-DARK.svg"
              width="70"
              height="70"
              className="d-inline-block align-top"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Navbar.Brand>
          <div className="d-lg-none">
            <motion.i
              className="fas fa-bars fs-3 cursor-pointer"
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            ></motion.i>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-none d-lg-flex gap-3 align-items-center navbar-nav">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Skills', path: '/skills' },
                { name: 'Project', path: '/project' },
                { name: 'Contact', path: '/contact' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  // whileHover={{ scale: 0.9, transition: { duration: 0.2 } }}
                >
                  <Nav.Link
                    as={Link}
                    to={item.path}
                    className={`fw-medium text-dark text-decoration-none ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    {item.name}
                  </Nav.Link>
                </motion.div>
              ))}
              <div className="d-flex gap-2 icon-container">
                {[
                  { icon: 'github', link: 'https://github.com/your-username' },
                  {
                    icon: 'instagram',
                    link: 'https://instagram.com/your-username',
                  },
                  {
                    icon: 'linkedin',
                    link: 'https://linkedin.com/in/your-username',
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    className="text-dark"
                  >
                    <i className={`fab fa-${social.icon} fs-4`}></i>
                  </motion.a>
                ))}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar untuk mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="mobile-sidebar position-fixed top-0 end-0 vh-100 bg-light shadow-lg p-4"
          >
            <div className="d-flex justify-content-end">
              <motion.i
                className="fas fa-times fs-3 cursor-pointer"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.i>
            </div>
            <Nav className="flex-column text-center gap-4 mt-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Skills', path: '/skills' },
                { name: 'Project', path: '/project' },
                { name: 'Contact', path: '/contact' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Nav.Link
                    as={Link}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="fw-bold fs-5 text-dark text-decoration-none"
                  >
                    {item.name}
                  </Nav.Link>
                </motion.div>
              ))}
              <div className="d-flex justify-content-center gap-3 mt-4">
                {[
                  { icon: 'github', link: 'https://github.com/your-username' },
                  {
                    icon: 'instagram',
                    link: 'https://instagram.com/your-username',
                  },
                  {
                    icon: 'linkedin',
                    link: 'https://linkedin.com/in/your-username',
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-dark"
                  >
                    <i className={`fab fa-${social.icon} fs-4`}></i>
                  </motion.a>
                ))}
              </div>
            </Nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavbarComponent
