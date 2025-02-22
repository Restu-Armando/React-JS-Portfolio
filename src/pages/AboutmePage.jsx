import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion, useAnimation } from 'framer-motion'
import { Certifications, Experience, Skills } from '../data/data'

// Components
import TechBadge from '../components/BadgeComponent'

const AboutmePage = () => {
  const motionControls = useAnimation()
  // Gandakan data untuk kesan infinite scroll
  const duplicatedItems = [...Skills, ...Skills]
  // Durasi animasi infinite scroll
  const animationDuration = 20
  // Variants untuk animasi data item agar konsisten
  const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }
  // Variants untuk animasi teks
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div
      className="aboutme position-relative "
      id="aboutme"
      // style={{ minHeight: '150vh' }}
    >
      {/* KONTEN UTAMA */}
      <Container fluid className="position-relative">
        {/* SECTION ABOUT */}
        <Row
          className="align-items-center justify-content-center background-aboutme px-4 mt-4 md-mt-0"
          style={{ minHeight: '80vh' }}
        >
          {/* Kolom Kiri - Teks */}
          <Col md={6} className="">
            <motion.h1
              className="fw-bold about-header mt-5 mt-md-0"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              About me<span>.</span>
            </motion.h1>
            <motion.p
              className="text-muted mt-3"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            >
              I am a Frontend Developer and UI/UX Designer who is passionate
              about creating functional and aesthetically pleasing web
              interfaces. With a combination of design and coding, I deliver
              intuitive and engaging digital experiences for users.
            </motion.p>
            <motion.div
              variants={textVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
            >
              <button className="button shadow mt-3 mt-md-3" href="/contact">
                <span className="button-content">Get in Touch</span>
              </button>
            </motion.div>
          </Col>

          {/* Kolom Kanan - Gambar */}
          <Col
            md={6}
            className="d-flex justify-content-center mt-5 mt-md-0 py-5 mb-5 md-mb-0"
          >
            <motion.div
              className="card-image"
              initial={{ opacity: 1, scale: 0.95, y: 10, rotateZ: 2 }}
              animate={{
                opacity: 1,
                // scale: 1,
                y: [0, -8, 0, 8, 0],
                rotate: [5, 5.5, 5, 4.5, 5],
              }}
              whileHover={{
                scale: 1.05,
                rotateZ: 5,
                transition: { duration: 0.5 }, // Respons hover lebih cepat
              }}
              transition={{
                // Untuk animasi floating (looping)
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="./card-about.png"
                alt="About Card"
                loading="lazy"
                style={{
                  width: '100%',
                  maxWidth: '550px',
                  borderRadius: '15px',
                  display: 'block',
                }}
              />
            </motion.div>
          </Col>
        </Row>

        <div className="position-relative px-0 px-md-4 mt-4 md-mt-0">
          <Row className="mt-5 ">
            <Col md={10} className="pt-2">
              <motion.h1
                className="fw-bold title-work"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariant}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                Work Experience
              </motion.h1>
            </Col>
          </Row>
          {Experience.map((data, id) => (
            <Col key={id}>
              <motion.div
                className="row mt-2 detail-work"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariant}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                <Col md={10} className="pt-2">
                  <h6 className="mt-2 mb-2">{data.job}</h6>
                  <Row className="mb-2">
                    <Col xs={12} sm={6}>
                      <p className="mb-0">
                        <i class="fa-solid fa-building"></i> {''}
                        {data.perusahaan}
                      </p>
                    </Col>
                    <Col xs={12} sm={6}>
                      <p className="mb-0">
                        <i className="fa-solid fa-location-dot mx-1"></i>{' '}
                        {data.kota}
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={2} className="pt-2 text-end">
                  <span className="badge text-success rounded-4 border-0 mt-2 mb-2">
                    {data.type}
                  </span>
                  <p className="mb-0 text-end">
                    <i class="fa-solid fa-calendar"></i> {data.Tanggal}
                  </p>
                </Col>
              </motion.div>
              <hr className="w-100 border-2" />
            </Col>
          ))}

          {/* SECTION EDUCATION */}
          <Row className="mt-2">
            <Col md={12} className="pt-2">
              <motion.h1
                className="fw-bold title-work"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariant}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                Education
              </motion.h1>
            </Col>
          </Row>
          <motion.div
            className="row mt-2 education"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariant}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Col md={10} className="pt-2">
              <h6 className="mt-2 mb-2">
                Bachelor’s Degree Information Systems
              </h6>
              <Row className="mb-2">
                <Col xs={12} sm={6}>
                  <p className="mb-0">
                    <i class="fa-solid fa-building"></i> Universitas Putra
                    Indonesia YPTK Padang
                  </p>
                </Col>
                <Col xs={12} sm={6}>
                  <p className="mb-0">
                    <i className="fa-solid fa-location-dot"></i> Padang,
                    Indonesia
                  </p>
                </Col>
              </Row>
            </Col>
            <Col md={2} className="pt-2 text-end">
              <span className="badge text-success rounded-4 border-0 mt-2 mb-2">
                Bachelor's Degree
              </span>
              <p className="mb-0 text-end">
                <i class="fa-solid fa-calendar"></i> 07/2019 - 05/2023
              </p>
            </Col>
          </motion.div>
          <hr className="w-100 border-2" />

          {/* SECTION CERTIFICATIONS */}
          <Row className="mt-2">
            <Col md={12} className="pt-2">
              <motion.h1
                className="fw-bold title-work"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariant}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                Certifications
              </motion.h1>
            </Col>
          </Row>
          {Certifications.map((data, id) => (
            <Col key={id}>
              {/* <Row className="mt-2 education"> */}
              <motion.div
                className="row mt-2 education"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={itemVariant}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                <Col md={10} className="pt-2">
                  <h6 className="mt-2 mb-2">{data.title}</h6>
                  <Row className="mb-2">
                    <Col xs={12} sm={6}>
                      <p className="mb-0">
                        <i class="fa-solid fa-building"></i> {''}
                        {data.publish}
                      </p>
                    </Col>
                    <Col xs={12} sm={6}>
                      <p className="mb-0">
                        <i className="fa-solid fa-location-dot"></i> {data.kota}
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={2} className="pt-2 text-end">
                  <span className="badge text-success rounded-4 border-0 mt-2 mb-2">
                    <a
                      className="text-success text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={data.link}
                    >
                      VIEW{' '}
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </span>
                  <p className="mb-0 text-end">
                    <i class="fa-solid fa-calendar"></i> {data.Tanggal}
                  </p>
                </Col>
              </motion.div>
              {/* </Row> */}
              <hr className="w-100 border-2" />
            </Col>
          ))}
        </div>
      </Container>

      {/* SECTION TECH STACK */}
      {/* <Row>
        <Col>
          <div
            className="w-100 mt-5 overflow-hidden "
            style={{ padding: '10px', fontSize: '13px' }}
          >
            Baris Pertama: scroll dari kiri ke kanan
            <motion.div
              className="d-flex flex-nowrap"
              animate={{ x: [0, '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: animationDuration,
                ease: 'linear',
              }}
            >
              {duplicatedItems.map((item, index) => (
                <TechBadge
                  key={`row1-${index}`}
                  logo={item.imageURL}
                  name={item.name}
                />
              ))}
            </motion.div>

            Baris Kedua: scroll dari kanan ke kiri
            <motion.div
              className="d-flex flex-nowrap"
              animate={{ x: ['-50%', 0] }}
              transition={{
                repeat: Infinity,
                duration: animationDuration,
                ease: 'linear',
              }}
            >
              {duplicatedItems.map((item, index) => (
                <TechBadge
                  key={`row2-${index}`}
                  logo={item.imageURL}
                  name={item.name}
                />
              ))}
            </motion.div>
          </div>
        </Col>
      </Row> */}
    </div>
  )
}

export default AboutmePage
