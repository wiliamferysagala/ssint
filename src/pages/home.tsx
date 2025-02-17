import Base from '@/components/Base'
import { cn } from '@/lib/util'

const HomePage = () => {
  return (
    <Base>
      <div
        className={cn(
          'flex w-full h-[calc(100vh)] justify-center items-center overflow-[overlay]'
        )}
      >
        <h1>Wiliam</h1>
      </div>
    </Base>
  )
}

export default HomePage
