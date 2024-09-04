import React from 'react'
import styles from './available_opportunities.module.css'
import Image from 'next/image'
import { TimeIcon, LocationIcon } from '../../images/svg/svgIcon'

export default function AvailableOpportunities() {
    return (
        <div className={styles.main}>
            <div className={styles.img_bloc}>
                <Image
                    src={'/available_opportunities.png'}
                    alt="Picture of the author"
                    width={160}
                    height={140}
                />
            </div>
            <div className={styles.opportunities_description_bloc}>
                <div className={styles.author}>
                    <Image
                        src={"/logo.jpg"}
                        alt="Concree logo"
                        width={30}
                        height={30}
                    />
                    <p>Par Concree SAS</p>
                </div>
                <div className={styles.description}>
                    <h1>Trouvez l'Opportunité qui Boostera Votre Entreprise</h1>
                    <p>Découvrez Comm'une Opportunité, la plateforme de mise en relation entre porteurs de projet et communes de France. Outil gratuit pour les entrepreneurs...</p>
                </div>
                <div className={styles.infos}>
                    <div className={styles.info}>
                        <TimeIcon />
                        <p>31 juillet 2024</p>
                    </div>
                    <div className={styles.info}>
                        <TimeIcon />
                        <p>6 mois</p>
                    </div>
                    <div className={styles.info}>
                        <LocationIcon />
                        <p>Dakar, Sénégal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
