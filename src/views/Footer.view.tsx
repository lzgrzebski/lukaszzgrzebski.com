import React from 'react';
import styles from './Footer.module.css';
import { Link } from './Link.view';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link href="/">&copy; łukasz</Link>
            <div className={styles.links}>
                <Link
                    href="https://www.linkedin.com/in/lukasz-zgrzebski/"
                    target="_blank"
                >
                    linkedin
                </Link>
                <Link
                    href="https://www.instagram.com/lukasz_zgrzebski/"
                    target="_blank"
                >
                    instagram
                </Link>
                <Link href="https://github.com/lzgrzebski" target="_blank">
                    github
                </Link>
            </div>
        </div>
    );
};
