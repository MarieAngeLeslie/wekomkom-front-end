import React from 'react'
import styles from './PresentationUi.module.css'
import CallToActionBtn from '../../components/call-to-action-btn/CallToActionBtn'

export default function PresentationUi() {
  return (
    <div className={styles["base-ui-block"]}>
      <div className={styles["presentation-ui-block"]}>
        <p className={styles["contractor-number"]}>+2500</p>
        <p className={styles["contractor-desc"]}>Entrepreneurs, structures d’accompagnement et professionnels passionnés  de l’entrepreneuriat !</p>
      </div>
      <CallToActionBtn description="Rejoidre maintenant" link="" />
    </div>
  )
}
