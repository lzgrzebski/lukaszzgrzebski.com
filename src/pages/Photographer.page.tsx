import React from 'react';
import cx from 'classnames';

import splash from '../assets/videos/photographer.mp4';
import styles from './Photographer.module.css';
import { Page } from '../constants';
import { Menu } from '../views/Menu.view';
import { Footer } from '../views/Footer.view';

export const Photographer: React.FC<{ setPage: (page: Page) => void }> = ({
    setPage,
}) => {
    return (
        <div className={styles.photographer}>
            <Menu setPage={setPage} />
            <div className={styles.jumbotron}>
                <video
                    autoPlay
                    className={styles.video}
                    loop
                    muted
                    preload="auto"
                    src={splash}
                />
            </div>
            <div className={cx(styles.grid, styles.text)}>
                <div className={styles.row1}>
                    <div className={styles.paragraph}>
                        As a photographer, I like exploring spaces, especially
                        where nature meets human activity in the symbiosis.
                    </div>
                    <div className={styles.paragraph}>
                        I am a graduate from AFA School of Photography and my
                        latest exbition &quot;That day everyone left&quot; took
                        place in Contemporary Museum in Wrocław.
                    </div>
                    <div className={styles.paragraph}>
                        <a>By the river (2021-)</a>
                    </div>
                    <div className={styles.paragraph}>
                        <a>Stay at home zine (2020)</a>
                    </div>
                    <div className={styles.paragraph}>
                        <a>That day everyone left (2019)</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// https://muzeumwspolczesne.pl/mww/wystawy/tamtego-dnia-wszyscy-wyjechali-lukasz-zgrzebski/?lang=en
