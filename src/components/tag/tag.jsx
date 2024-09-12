import React from 'react'
import styles from './tag.module.css'
export default function Tag({ tagTitle }) {
    return (
        <div className={styles["tag-main-block"]}>
            <p className={styles["tag-desc"]}>{tagTitle}</p>
        </div>
    )
}
