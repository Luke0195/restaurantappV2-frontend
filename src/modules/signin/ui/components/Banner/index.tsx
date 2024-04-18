import logo from '@/app/assets/imgs/logo.svg'
import { motion } from 'framer-motion'
export function Banner() {
  return (
    <div className="w-screen h-screen bg-red-600 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ x: -80, opacity: 0.4 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}>
        <img src={logo} alt="waiterapp logo" />
      </motion.div>
    </div>
  )
}
