import ParallaxText from '../components/ParallaxText'
import { motion } from 'framer-motion'
import { Container, Row, Col } from 'react-bootstrap'
import { TypeAnimation } from 'react-type-animation'
function HeroPage() {
  return (
    <div className="hero">
      {/* Background Parallax Text */}
      <div className="parallax-container">
        <ParallaxText baseVelocity={-5} className="parallax-top">
          Frontend Developer - UI/UX Designer✨
        </ParallaxText>
        <ParallaxText baseVelocity={5} className="parallax-bottom">
          UI/UX Designer✨ - Enthusiastic Web Developer
        </ParallaxText>
      </div>

      {/* Hero Section Content */}
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="12" className="mt-4 mb-4 text-start text-dark">
            <motion.h1
              className="introduce"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              Hi 👋 I’m <br />
              <motion.span
                className="name"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Restu Armando
              </motion.span>
              <br />
              <TypeAnimation
                sequence={[
                  'I Am FrontEnd Developer 🌐',
                  400,
                  'UI/UX Designer 🎨',
                  400,
                  'Enthusiastic Web Developer 🚀',
                  400,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </motion.h1>

            <button className="button shadow mt-3 mt-md-3">
              <a
                href="https://drive.google.com/file/d/1aY9Ebp0lNPHs8mw0YnysH63MEILcfBix/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span className="button-content">Get in Touch</span>
              </a>
            </button>
          </Col>

          <Col lg="5" md="12" className="text-center pb-5 d-block">
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0], // Floating effect
              }}
              transition={{
                duration: 1, // Untuk fade-in dan scale
                delay: 1.2,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="content">
                <img
                  src={'/hero.png'}
                  alt=""
                  width="250"
                  height="250"
                  className="img-fluid"
                />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroPage
