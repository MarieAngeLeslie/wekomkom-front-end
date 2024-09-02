import React from 'react'
import styles from './CountAccomplishment.module.css'

export default function CountAccomplishment({ number, desc }) {
    return (
        <div className={styles["base-bloc"]}>
            <p className={styles["contractor-number"]}>+{number}</p>
            <p className={styles["description"]}>{desc}</p>
        </div>
    )
}
