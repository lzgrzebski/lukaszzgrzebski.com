import React from 'react';

import splash from '../assets/videos/developer.mp4';
import styles from './Developer.module.css';
import { Menu } from '../views/Menu.view';
import { Footer } from '../views/Footer.view';
import { Page } from '../constants';
import { Jumbotron } from '../views/Jumbotron.view';
import { Video } from '../views/Video.view';
import { Text } from '../views/Text.view';
import { Layout } from '../views/Layout.view';

export const Developer: React.FC<{ setPage: (page: Page) => void }> = ({
    setPage,
}) => (
    <Layout className={styles.developer}>
        <Menu setPage={setPage} />
        <Jumbotron>
            <Video src={splash} />
        </Jumbotron>
        <Text className={styles.grid}>
            <div className={styles.row1}>
                <div className={styles.paragraph}>
                    As a developer I love to experiment, mess with media APIs in
                    the browser, and create clean UIs.
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
        </Text>
        <Footer />
    </Layout>
);
