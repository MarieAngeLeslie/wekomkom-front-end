import React from 'react'
import Link from 'next/link';
import styles from './CallToActionBtnWithBg.module.css';

export default function CallToActionBtnWithBg({ description, link }) {
    return (
        <Link href={link} className={styles["btn-style"]}>{description}</Link>
    );
}   