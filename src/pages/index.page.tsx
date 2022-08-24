import React from 'react';

import { Text } from '../views/Text.view';

import styles from './index.module.css';

const Hello: React.FC = () => (
    <div className={styles.hello}>
        <Text className={styles.wrapper}>
            Hello, <br />
            my name is Łukasz, I am a<br />
            <a className={styles.link} href="/developer">
                developer
            </a>{' '}
            and{' '}
            <a className={styles.link} href="/photographer">
                photographer
            </a>
            . <br />
            <br />
            And in my free time aspiring{' '}
            <a className={styles.link} href="/musician">
                musician
            </a>{' '}
            too :).
        </Text>
    </div>
);

export default { Page: Hello };
