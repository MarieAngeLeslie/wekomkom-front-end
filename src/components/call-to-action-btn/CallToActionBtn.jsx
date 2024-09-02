import React from 'react';
import Link from 'next/link';
import styles from './CallToActionBtn.module.css';

export default function CallToActionBtn({ description, icon, link }) {
    return (
        <Link href={link} className={styles["btn-style"]}>{description} <span className={styles["icon"]}>{icon ? icon : ''}</span></Link>
    );
}
