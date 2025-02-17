import { cn } from '@/lib/util'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  return (
    <header className={cn('w-full', 'flex justify-between', 'px-5 py-3')}>
      <h1 className="text-2xl">SsintDev</h1>
      <nav>
        <ul className="flex gap-5">
          <LinkItems to="/">Home</LinkItems>
          <LinkItems to="/about">About</LinkItems>
          <LinkItems to="/learning">Learning</LinkItems>
          <LinkItems to="/project">Project</LinkItems>
        </ul>
      </nav>
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
    <li className={cn(to === location.pathname ? local : notLocal)}>
      <Link to={`${to}`}>{children}</Link>
    </li>
  )
}
