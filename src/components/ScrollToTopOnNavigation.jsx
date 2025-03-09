import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function ScrollToTopOnNavigation() {
  const [showButton, setShowButton] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Scroll ke atas halaman setiap kali navigasi terjadi
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100) // Tampilkan tombol jika scroll lebih dari 300px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  // const smoothScrollToTop = () => {
  //   if ('scrollBehavior' in document.documentElement.style) {
  //     // Gunakan native smooth scroll jika browser mendukung
  //     window.scrollTo({ top: 0, behavior: 'smooth' })
  //   } else {
  //     let currentPosition = window.scrollY
  //     const speedFactor = 0.1 // Semakin kecil, semakin lambat

  //     const scrollAnimation = () => {
  //       if (currentPosition > 0) {
  //         const step = Math.max(currentPosition * speedFactor, 10) // Minimal step 10px agar tidak stag
  //         currentPosition -= step
  //         window.scrollTo(0, currentPosition)

  //         if (currentPosition > 0) {
  //           requestAnimationFrame(scrollAnimation)
  //         }
  //       }
  //     }

  //     requestAnimationFrame(scrollAnimation)
  //   }
  // }

  return (
    <motion.div
      className={`scroll-to-top ${showButton ? 'visible' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: -50 }}
      onClick={scrollToTop}
    >
      <div className="scroll-circle">
        <i className="fa-solid fa-arrow-up scroll-icon"></i>

        {/* Teks melingkar yang mengelilingi panah */}
        <svg className="circular-text" viewBox="0 0 100 100">
          <path
            id="text-path"
            d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            fill="transparent"
          />
          <text>
            <textPath href="#text-path" startOffset="0%">
              SCROLL TO TOP • SCROLL TO TOP • SCROLL TO TOP •
            </textPath>
          </text>
        </svg>
      </div>
    </motion.div>
  )
}

export default ScrollToTopOnNavigation
