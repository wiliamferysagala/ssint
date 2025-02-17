import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import LearningPage from '@/pages/learning'
import ProjectPage from '@/pages/project'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/learning',
    element: <LearningPage />,
  },
  {
    path: '/project',
    element: <ProjectPage />,
  },
])

export default router
