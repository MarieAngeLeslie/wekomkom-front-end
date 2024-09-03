import React from 'react'
import styles from './achievement.module.css'

export default function Achievement({ achievementNumber, desc }) {
    return (
        <div className={styles["main"]}>
            <p className={styles["achievement-number"]}>+{achievementNumber}</p>
            <p className={styles["desc"]}>{desc}</p>
        </div>
    )
}
