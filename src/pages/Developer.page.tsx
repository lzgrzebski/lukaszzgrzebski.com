import React from 'react';
import cx from 'classnames';

import splash from '../assets/videos/developer.mp4';
import styles from './Developer.module.css';
import { Menu } from '../views/Menu.view';
import { Footer } from '../views/Footer.view';
import { Page } from '../constants';

export const Developer: React.FC<{ setPage: (page: Page) => void }> = ({
    setPage,
}) => {
    return (
        <div className={styles.developer}>
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
                        As a developer I love to experiment, mess with media
                        APIs in the browser, and create clean UIs.
                    </div>
                    <div className={styles.paragraph}>
                        Have masters in computer science. And multiple years of
                        experience working in Poland and Norway.
                    </div>
                    <div>
                        Currently I&apos;m working at Pexip where I make video
                        collaboration tools.
                    </div>

                    <div
                        className={styles.paragraph}
                        onClick={() => setPage(Page.Pixlzr)}
                    >
                        <a>Pixlzr</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
