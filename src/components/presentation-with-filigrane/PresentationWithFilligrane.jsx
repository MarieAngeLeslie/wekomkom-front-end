import React from 'react'
import Image from 'next/image'
import styles from './presentation.module.css'

export default function PresentationWithFilligrane({ imageSrc, alt, desc }) {
    return (
        <div className={styles["main"]}>
            <Image
                src={imageSrc}
                layout='fill'
                objectFit='cover'
                alt={alt} />
            <p>{desc}</p>
        </div>
    )
}
