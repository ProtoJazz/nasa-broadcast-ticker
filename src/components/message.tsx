import { Inter } from 'next/font/google'
import styles from '@/styles/Ticker.module.css'
import Marquee from 'react-fast-marquee'

const inter = Inter({ subsets: ['latin'] })

export default function Message({content, onLoopDone} : any) {
  return (
    <>
    <div className={styles.info} >
        <Marquee speed={40} onCycleComplete={onLoopDone} delay={3}>{content}</Marquee>
        </div>
    </>
  )
}
