import Base from '@/components/Base'
import { motion } from 'motion/react'

const HomePage = () => {
  const random = () => Math.floor(Math.random() * (2 * 1000) - 1000)

  return (
    <Base>
      <motion.div className="flex w-full min-h-screen  justify-center items-center text-4xl">
        <motion.div
          initial={{
            y: random(),
            x: random(),
            rotate: random(),
            scale: random(),
          }}
          animate={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        >
          S
        </motion.div>
        <motion.div
          initial={{
            y: random(),
            x: random(),
            rotate: random(),
            scale: random(),
          }}
          animate={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0, 0.71, 0.2, 1.01] }}
        >
          s
        </motion.div>
        <motion.div
          initial={{
            y: random(),
            x: random(),
            rotate: random(),
            scale: random(),
          }}
          animate={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
        >
          i
        </motion.div>
        <motion.div
          initial={{
            y: random(),
            x: random(),
            rotate: random(),
            scale: random(),
          }}
          animate={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0, 0.71, 0.2, 1.01] }}
        >
          n
        </motion.div>
        <motion.div
          initial={{
            y: random(),
            x: random(),
            rotate: random(),
            scale: random(),
          }}
          animate={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0, 0.71, 0.2, 1.01] }}
        >
          t
        </motion.div>
        <motion.div
          initial={{
            y: random(),
            x: random(),
            rotate: random(),
            scale: random(),
          }}
          animate={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.3, ease: [0, 0.71, 0.2, 1.01] }}
        >
          D
        </motion.div>
        <motion.div
          initial={{
            y: random(),
            x: random(),
            rotate: random(),
            scale: random(),
          }}
          animate={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0, 0.71, 0.2, 1.01] }}
        >
          e
        </motion.div>
        <motion.div
          initial={{
            y: random(),
            x: random(),
            rotate: random(),
            scale: random(),
          }}
          animate={{ y: 0, x: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          v
        </motion.div>
      </motion.div>
    </Base>
  )
}

export default HomePage
