import React from 'react';
import cx from 'classnames';
import styles from './Menu.module.css';
import { Page } from '../constants';

export const Menu: React.FC<{ setPage: (page: Page) => void }> = ({
    setPage,
}) => {
    return (
        <>
            <div className={styles.menu}></div>
            <div
                className={cx(styles.button, styles.button1, styles.filter)}
            ></div>
            <div
                className={cx(styles.button, styles.button1, styles.blend)}
                onClick={() => setPage(Page.Developer)}
            >
                Developer
            </div>
            <div
                className={cx(styles.button, styles.button2, styles.filter)}
            ></div>
            <div
                className={cx(styles.button, styles.button2, styles.blend)}
                onClick={() => setPage(Page.Photographer)}
            >
                Photographer
            </div>
            <div
                className={cx(styles.button, styles.button3, styles.filter)}
            ></div>
            <div
                className={cx(
                    styles.button,
                    styles.button3,
                    styles.blend,
                    styles.active
                )}
                onClick={() => setPage(Page.Musician)}
            >
                Musician
            </div>
        </>
    );
};
