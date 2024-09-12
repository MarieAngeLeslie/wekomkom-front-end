import React from 'react'
import styles from './benefit.module.css'
import { CheckedIcon } from '../../images/svg/svgIcon'

export default function Benefit({ description }) {
    return (
        <div className={styles["checked-main-block"]}>
            <CheckedIcon />
            <p>{description}</p>
        </div>
    )
}
