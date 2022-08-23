import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>&copy; łukasz</div>
            <div className={styles.links}>
                <a>linkedin</a>
                <a>instagram</a>
                <a>github</a>
            </div>
        </div>
    );
};
