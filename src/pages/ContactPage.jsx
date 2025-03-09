import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

function ContactPage() {
  return (
    <div className="contact " id="contact">
      <Container>
        <Row className="justify-content-center align-items-center mt-5">
          <Col lg={8} md={10} sm={12} className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              // exit={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <h1 className="contact-header">
                For Any Question Please Mail Us:
              </h1>
              <h1 className="text-break">
                {' '}
                {/* Text-break biar nggak overflow */}
                <motion.a
                  href="https:/mail.google.com"
                  target="_blank"
                  className="mail d-inline-block"
                  whileHover={{
                    transition: { duration: 0.3 },
                  }}
                >
                  restuarmando@gmail.com
                </motion.a>
              </h1>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactPage
