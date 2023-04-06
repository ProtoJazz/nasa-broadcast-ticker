import { Inter } from 'next/font/google'
import styles from '@/styles/Ticker.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Message({content}) {
  return (
    <>
        <div className={styles.info}>{content}</div>
    </>
  )
}
