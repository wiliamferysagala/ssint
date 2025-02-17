import { cn } from '@/lib/util'
import { ReactNode } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Header from './Header'

const Base = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className={cn(
        'min-h-screen w-full',
        'bg-primary',
        'text-white font-bold',
        'relative',
        'overflow-hidden',
        'text-fourth',
        'snap-none '
      )}
    >
      <Header />
      <motion.div
        style={{ scaleX }}
        className="w-full bg-red-500 fixed top-0 h-1 left-0"
      />
      <main className={cn('px-5 w-full h-full scroll-smooth p-2')}>
        {children}
      </main>
    </motion.div>
  )
}

export default Base
