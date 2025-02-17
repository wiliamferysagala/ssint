import { cn } from '@/lib/util'
import { motion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  return (
    <header className={cn('w-full', 'flex justify-between', 'px-5 py-3')}>
      <h1 className="text-2xl">
        <motion.span
          initial={{ scale: 1, x: -1000 }}
          animate={{ scale: 2, x: 0, transition: { duration: 1 } }}
        >
          S
        </motion.span>
        <motion.span
          initial={{ scale: 1, x: -1000 }}
          animate={{ scale: 2, x: 0, transition: { duration: 1.2 } }}
        >
          s
        </motion.span>
        <motion.span
          initial={{ scale: 1, x: -1000 }}
          animate={{ scale: 2, x: 0, transition: { duration: 1.3 } }}
        >
          i
        </motion.span>
        <motion.span
          initial={{ scale: 1, x: -1000 }}
          animate={{ scale: 2, x: 0, transition: { duration: 1.4 } }}
        >
          n
        </motion.span>
        <motion.span
          initial={{ scale: 1, x: -1000 }}
          animate={{ scale: 2, x: 0, transition: { duration: 1.5 } }}
        >
          t
        </motion.span>
        <motion.span
          initial={{ scale: 1, x: -1000 }}
          animate={{ scale: 2, x: 0, transition: { duration: 1.6 } }}
        >
          D
        </motion.span>
        <motion.span
          initial={{ scale: 1, x: -1000 }}
          animate={{ scale: 2, x: 0, transition: { duration: 1.7 } }}
        >
          e
        </motion.span>
        <motion.span
          initial={{ scale: 1, x: -1000 }}
          animate={{ scale: 2, x: 0, transition: { duration: 1.8 } }}
        >
          v
        </motion.span>
      </h1>
      <nav>
        <ul className="flex gap-5">
          <LinkItems to="/">Home</LinkItems>
          <LinkItems to="/about">About</LinkItems>
          <LinkItems to="/learning">Learning</LinkItems>
          <LinkItems to="/project">Project</LinkItems>
        </ul>
      </nav>
      <motion.button
        className="size-8 rounded-full bg-third"
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 1 }}
        onClick={() => console.log('clicked')}
      ></motion.button>
    </header>
  )
}

export default Header

const LinkItems = ({ children, to }: { children: string; to: string }) => {
  const location = useLocation()

  const notLocal = [
    'relative',
    'after:absolute after:bottom-0 after:border-b-3 hover:after:w-full',
    'hover:after:transition-all hover:after:duration-200 after:w-0 ',
    'after:left-0 after:border-red-500 after:border-solid ',
  ]

  const local = [
    'relative',
    'after:absolute after:bottom-0 after:border-b-3',
    'after:border-red-500 after:w-[103%] after:left-0 -my-1',
  ]

  return (
    <motion.li
      className={cn(to === location.pathname ? local : notLocal)}
      initial={{ transform: 'translateX(-100px)' }}
      animate={{ transform: 'translateX(0px)' }}
      transition={{ type: 'spring' }}
    >
      <Link to={`${to}`}>{children}</Link>
    </motion.li>
  )
}
