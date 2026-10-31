import AppRouter from './router/AppRouter'
import { MotionConfig } from 'framer-motion'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppRouter />
    </MotionConfig>
  )
}
