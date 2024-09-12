import React from 'react';
import Link from 'next/link';
import styles from './call_to_action_btn.module.css';

export default function CallToActionDiscoverBtn({ description, icon, link }) {
    return (
        <Link href={link} className={styles["btn-style"]}>{description} <span className={styles["icon"]}>{icon ? icon : ''}</span></Link>
    );
}
