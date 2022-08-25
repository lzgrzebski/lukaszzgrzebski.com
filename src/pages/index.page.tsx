import React from 'react';

import { Text } from '../views/Text.view';
import { Link } from '../views/Link.view';

import styles from './index.module.css';

const Hello: React.FC = () => (
    <div className={styles.hello}>
        <Text className={styles.wrapper}>
            Hello, <br />
            my name is Łukasz, I am a<br />
            <Link className={styles.link} href="/developer">
                developer
            </Link>{' '}
            and{' '}
            <Link className={styles.link} href="/photographer">
                photographer
            </Link>
            . <br />
            <br />
            And in my free time aspiring{' '}
            <Link className={styles.link} href="/musician">
                musician
            </Link>{' '}
            too :).
        </Text>
    </div>
);

export default { Page: Hello };
