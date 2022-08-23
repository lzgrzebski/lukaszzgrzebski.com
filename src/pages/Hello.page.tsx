import React from 'react';
import { Page } from '../constants';
import { Text } from '../views/Text.view';

import styles from './Hello.module.css';

export const Hello: React.FC<{ setPage: (page: Page) => void }> = ({
    setPage,
}) => (
    <div className={styles.hello}>
        <Text className={styles.wrapper}>
            Hello, <br />
            my name is Łukasz, I am a<br />
            <a className={styles.link} onClick={() => setPage(Page.Developer)}>
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
            <a className={styles.link} onClick={() => setPage(Page.Musician)}>
                musician
            </a>{' '}
            too :).
        </Text>
    </div>
);
