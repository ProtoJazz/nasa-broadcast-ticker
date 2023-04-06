import { Inter } from 'next/font/google'
import styles from '@/styles/Ticker.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Driver({name, points, championship} : any) {
  return (
    <>
        <div className={` ${styles[`championship_${championship}`]} ${styles.driver}`}>{name}<span className={styles.score_value}>{points}</span></div>
    </>
  )
}
