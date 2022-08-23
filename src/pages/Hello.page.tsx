import React from 'react';
import { Page } from '../constants';

import styles from './Hello.module.css';

export const Hello: React.FC<{ setPage: (page: Page) => void }> = ({
    setPage,
}) => {
    return (
        <div className={styles.hello}>
            <div className={styles.text}>
                Hello, <br />
                my name is Łukasz, I am a<br />
                <a
                    className={styles.link}
                    onClick={() => setPage(Page.Developer)}
                >
                    developer
                </a>{' '}
                and{' '}
                <a
                    className={styles.link}
                    onClick={() => setPage(Page.Photographer)}
                >
                    photographer
                </a>
                . <br />
                <br />
                And in my free time aspiring{' '}
                <a
                    className={styles.link}
                    onClick={() => setPage(Page.Musician)}
                >
                    musician
                </a>{' '}
                too :).
            </div>
        </div>
    );
};
