import React from 'react';

import styles from './Hello.module.css';

export const Hello: React.FC = () => {
    return (
        <div className={styles.hello}>
            <div className={styles.text}>
                Hello, <br />
                my name is Łukasz, I am a{' '}
                <a className={styles.link}>developer</a> and{' '}
                <a className={styles.link}>photographer</a>
                . <br />
                <br />
                And in my free time aspiring{' '}
                <a className={styles.link}>musician</a> too :).
            </div>
        </div>
    );
};
