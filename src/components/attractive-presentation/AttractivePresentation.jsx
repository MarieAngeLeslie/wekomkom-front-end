import React from 'react'
import Image from 'next/image'
import styles from './AttractivePresentation.module.css'

export default function AttractivePresentation({ imageSrc, alt }) {
    return (
        <div className={styles["image-container"]}>
            <Image
                src={imageSrc}
                layout='fill'
                objectFit='cover'
                alt={alt}
            />
        </div>
    )
}
