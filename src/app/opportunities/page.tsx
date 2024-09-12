import React from 'react'
import styles from './opportunities.module.css'
import Image from 'next/image'
import AvailableOpportunities from '../../components/available-opportunities/AvailableOpportunities'

export default function Opportunites() {
    return (
        <main className={styles.main}>
            <div className={styles.banner}>
                <div className={styles["left-block"]}>
                    <h1>Accedez aux opportunités du moment sur wekomkom</h1>
                    <p>Plus de 100 opportunités pour vous!</p>
                </div>
                <div className={styles["right-block"]}>
                    <Image
                        src={'/banner-img.png'}
                        alt="Picture of the author"
                        width={400}
                        height={200}
                    />
                </div>
            </div>
            {/* <AvailableOpportunities /> */}
        </main>
    )
}
