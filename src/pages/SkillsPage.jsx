import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

import { Skills } from '../data/data'

const SkillsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }, // Delay untuk efek satu per satu
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
    <div className="skills">
      <Container className="text-center">
        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 fw-bold"
        >
          Tech Stack
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-5 text-muted"
        >
          Technologies I use to build and create amazing experiences.
        </motion.p>

        {/* Grid */}
        <Row className="justify-content-center g-3 row-cols-lg-6 row-cols-md-4 row-cols-2">
          {Skills.map((data, index) => (
            <Col key={data.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // Animasi tetap berjalan setiap muncul
                transition={{ duration: 0.6, delay: index * 0.1 }} // Mirip AOS delay otomatis
                className="tech-card"
              >
                <img
                  src={data.imageURL}
                  width="70"
                  height="70"
                  alt={data.name}
                />
                <p className="mt-3 fw-semibold">{data.name}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default SkillsPage
