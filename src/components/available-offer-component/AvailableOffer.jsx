import React from 'react'
import Image from 'next/image'
import Tag from '../tag/tag'
import styles from './AvailableOffer.module.css'

export default function AvailableOffer({
    mainImageSrc,
    title,
    description,
    price,
    tagTitle
}) {
    return (
        <div className={styles["main-block"]}>
            <div className={styles["first-side"]}>
                <Image
                    src={mainImageSrc}
                    layout='fill'
                    objectFit='cover'
                    alt={"Concree Available Offer"}
                />
                <div className={styles["tag-block"]}>
                    <Tag tagTitle={tagTitle} />
                </div>
            </div>
            <div className={styles["second-block"]}>
                <p className={styles["title"]}>{title}</p>
                <p className={styles["desc"]}>{description}</p>
                <div className={styles["last-block"]}>
                    <Image
                        src={"/logo.jpg"}
                        width={35}
                        height={35}
                        alt={"Concree SAS logo"}
                    />
                    <p className={styles["concree-name"]}>Concree SAS</p>
                    <p className={styles["price-style"]}>{price}</p>
                </div>
            </div>
        </div>
    )
}
