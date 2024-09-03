import React from 'react'
import styles from './custom_tag.module.css'

export default function CustomTag({
    tagBgColor,
    tagTextColor,
    tagTitle,
}) {
    return (
        <div>
            <p className={styles["tag-desc"]}
                style={{
                    backgroundColor: tagBgColor,
                    color: tagTextColor,
                }}>
                {tagTitle}
            </p>
        </div>
    )
}
