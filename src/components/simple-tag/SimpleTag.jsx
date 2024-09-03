import React from 'react'
import styles from './simple_tag.module.css'

export default function SimpleTag({ simpleTagTitle }) {
    return (
        <div className={styles["tag-main-bloc"]}>
            <p className={styles["tag-desc"]}>{simpleTagTitle}</p>
        </div>
    )
}
