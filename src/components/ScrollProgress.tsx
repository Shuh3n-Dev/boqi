import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left pointer-events-none bg-gradient-to-r from-primary via-accent to-primary"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
