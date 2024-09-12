import React from 'react'
import Image from 'next/image'
import styles from './pub_ui.module.css'
import SimpleTag from '../simple-tag/SimpleTag'

export default function PubUI({
    mainImageSrc,
    title,
    description,
    tagTitle }) {
    return (
        <div className={styles["main-block"]}>
            <div className={styles["first-side"]}>
                <Image
                    src={mainImageSrc}
                    layout='fill'
                    objectFit='cover'
                    alt={"Concree Available Offer"}
                />
            </div>

            <div className={styles["second-block"]}>
                <div className={styles["tag-block"]}>
                    <SimpleTag simpleTagTitle={tagTitle} />
                </div>
                <p className={styles["title"]}>{title}</p>
                <p className={styles["desc"]}>{description}</p>
                <div className={styles["last-block"]}>
                    <Image
                        src={"/logo.jpg"}
                        width={35}
                        height={35}
                        alt={"Concree SAS logo"}
                    />
                    <p className={styles["concree-name"]}>Par Concree SAS</p>
                </div>
            </div>
        </div>
    )
}
