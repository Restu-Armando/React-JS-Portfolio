import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useReducedMotion,
} from 'framer-motion'
import { wrap } from '@motionone/utils'

const ParallaxText = ({ children, baseVelocity = 50 }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const shouldReduceMotion = useReducedMotion()
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  })

  // Animasi horizontal (infinite scroll)
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  // **Animasi vertical parallax**
  // const y = useTransform(scrollY, [0, 1000], [0, 100])

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    // const deltaFactor = delta / 2000
    const deltaFactor = shouldReduceMotion ? delta / 3000 : delta / 2000

    const currentVelocity = velocityFactor.get()

    let moveBy = directionFactor.current * baseVelocity * deltaFactor

    directionFactor.current =
      currentVelocity < 0
        ? -1
        : currentVelocity > 0
        ? 1
        : directionFactor.current

    moveBy += directionFactor.current * moveBy * currentVelocity
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="parallax">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="scroller"
        style={{ x }}
      >
        <span>{children} &nbsp;</span>
        <span>{children} &nbsp;</span>
        <span>{children} &nbsp;</span>
        <span>{children} &nbsp;</span>
      </motion.div>
    </div>
  )
}

export default ParallaxText
