import React from 'react'
import Image from 'next/image'
import styles from './partner.module.css'

export default function Partner({ imgSrc, altInfo, }) {
    return (
        <div className={styles["main-block"]}>
            <Image
                src={imgSrc}
                alt={altInfo}
            />
        </div>
    )
}
