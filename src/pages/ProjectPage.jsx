import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { TechnologiData } from '../data/data'

const categories = ['All', 'Frontend', 'UI/UX', 'FullStack']

const ProjectPage = () => {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [expanded, setExpanded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  // const [filteredProjects, setFilterdProjects] = useState(TechnologiData)
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     const filtered = TechnologiData.filter((project) =>
  //     selectedCategory === 'All' || project.filterTag.includes(selectedCategory)
  //     )
  //     setFilterdProjects(filtered)
  //     setVisibleProjects(6)
  //     setExpanded(false)
  //     setLoading(false)
  //   }, 500);
  // }, [selectedCategory])

  const filteredProjects = TechnologiData.filter(
    (project) =>
      selectedCategory === 'All' ||
      project.filterTag.includes(selectedCategory),
  )

  const toggleProjects = () => {
    if (expanded) {
      setVisibleProjects(6)
    } else {
      setVisibleProjects(TechnologiData.length)
    }
    setExpanded(!expanded)
  }

  return (
    <div className="project" id="project">
      <Container className="mt-lg-5">
        {/* Section Title */}
        <Row className="">
          <Col className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            <motion.p
              className="subheading"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A collection of my recent work
            </motion.p>
          </Col>
        </Row>

        {/* Filter Tags */}
        <Row className="mb-4">
          <motion.div
            className="col text-center"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`mx-1 button mb-3 mb-lg-0 ${
                  selectedCategory === category ? 'active' : ''
                }`}
                animate={{ opacity: selectedCategory === category ? 1 : 0.7 }} // Opacity lebih terang untuk yang aktif
                transition={{ duration: 0.3 }}
              >
                <span className="button-content">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </Row>

        {/* Project Grid */}
        <Row
          className="g-4 justify-content-center align-items-stretch mb-5"
          key={selectedCategory} // Supaya animasi ter-trigger saat filter berubah
        >
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <Col key={index} xs={12} md={6} lg={6} xl={4} className="d-flex">
              <motion.div
                className="project-card w-100 d-flex flex-column"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                layout // Supaya posisi card berubah lebih smooth
              >
                <div className="project-card-image">
                  <img
                    src={project.imageURL}
                    alt={project.name}
                    loading="lazy"
                  />
                </div>
                <div className="project-card-content d-flex flex-column flex-grow-1">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">
                    {project.description.length > 100
                      ? project.description.slice(0, 90) + '...'
                      : project.description}
                  </p>

                  {/* Project Links */}
                  <div className="project-links mb-2">
                    {project.LinkCode && (
                      <a
                        href={project.LinkCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link details"
                      >
                        <i className="fa-solid fa-folder"></i>
                      </a>
                    )}
                    {project.linkView && (
                      <a
                        href={project.linkView}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link demo"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </a>
                    )}
                    {!project.LinkCode && !project.linkView && (
                      <span className="no-link">🚧 Coming Soon</span>
                    )}
                  </div>
                </div>

                {/* Project Tags */}
                <div className="project-tags d-flex justify-content-start justify-content-around flex-wrap">
                  {Array.isArray(project.tag) &&
                    project.tag.map((tag, tagIndex) => (
                      <img
                        key={tagIndex}
                        src={tag.image}
                        alt={tag.name}
                        height={25}
                        width={25}
                        className="tag-icon"
                      />
                    ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Show More / Show Less Button */}
        {TechnologiData.length > 6 && (
          <Row className="mt-4">
            <Col className="text-center">
              <motion.button
                className="button"
                onClick={toggleProjects}
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display:
                    filteredProjects.length <= 6 ? 'none' : 'inline-block',
                }}
              >
                <span className="button-content">
                  {expanded ? 'Show Less Projects' : 'Show More Projects'}
                </span>
              </motion.button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

export default ProjectPage
