import React from 'react';
import cx from 'classnames';
import styles from './Menu.module.css';

export const Menu: React.FC = () => (
    <>
        <div className={styles.menu}></div>
        <div className={cx(styles.button, styles.button1, styles.filter)}></div>
        <a
            className={cx(styles.button, styles.button1, styles.blend)}
            href="/developer"
        >
            Developer
        </a>
        <div className={cx(styles.button, styles.button2, styles.filter)}></div>
        <a
            className={cx(styles.button, styles.button2, styles.blend)}
            href="/photographer"
        >
            Photographer
        </a>
        <div className={cx(styles.button, styles.button3, styles.filter)}></div>
        <a
            className={cx(
                styles.button,
                styles.button3,
                styles.blend,
                styles.active
            )}
            href="/musician"
        >
            Musician
        </a>
    </>
);
