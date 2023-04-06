import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Ticker.module.css'
import Driver from '@/components/driver'
const inter = Inter({ subsets: ['latin'] })
import { getLocalData } from '../utils/localFiles';
import React, { useEffect } from 'react'
import Message from '@/components/message'

export async function getStaticProps() {
  const localData = await getLocalData()

  return {
    props: { localData }
  }
}


export default function Ticker({localData}) {
    const [message_index, setMessagesIndex] = React.useState(0);

    function getNextMessage() {
        console.log("HORSE")
        if(message_index == localData.messages.length - 1) {
            setMessagesIndex(0);
        } else {
            setMessagesIndex((prev_index) => prev_index + 1);
        }
    }
  return (
    <>
     
      <main className={`${styles.main} ${styles.layout}`}>
            <div>
                <div>
                    <div className={styles.ticker}>
                    <div className={styles.sport_indicator}>NASA</div>
                    <div className={styles.info_container}>
                        <div className={styles.score_container}>
                        <Driver name={localData.sportsman_leader.name} points={localData.sportsman_leader.points} championship={"sportsman"} ></Driver>
                        <Driver name={localData.drivers_leader.name} points={localData.drivers_leader.points} championship={"drivers"} ></Driver>
                        
                        </div>
                        <Message content={localData.messages[message_index]} onLoopDone={getNextMessage}></Message>
                    </div>
                    </div>
                    <div className={styles.logo_container}></div>
                    <div className={styles.logo}></div>
                </div>
            </div>
      </main>
    </>
  )
}

/*
<div className={styles.status_container}>
                            <div className={`${styles.status_icon} ${styles.arrow_up}`}></div>
                            <div className={styles.status_number}>3</div>
                        </div>
                      
                        <div className={styles.game_info_container}>
                            <div className={styles.game_info_text}>OUT</div>
                            <div className={styles.game_info_out_container}>
                            <div className={styles.circle_empty}></div>
                            <div className={styles.circle}></div>
                            </div>
                            <div className={styles.diamond_containter}>
                            <div className={`${styles.first} ${styles.diamond_empty}`}></div>
                            <div className={`${styles.second} ${styles.diamond_empty}`}></div>
                            <div className={`${styles.third} ${styles.diamond}`}></div>
                            </div>
                        </div>
                        
                        */