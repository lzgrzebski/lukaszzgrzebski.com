import React from 'react';

import splash from '../assets/videos/developer.mp4';
import styles from './developer.module.css';
import { Menu } from '../views/Menu.view';
import { Footer } from '../views/Footer.view';
import { Jumbotron } from '../views/Jumbotron.view';
import { Video } from '../views/Video.view';
import { Text } from '../views/Text.view';
import { Layout } from '../views/Layout.view';
import { Grid } from '../views/Grid.page';
import { Paragraph } from '../views/Paragraph.view';
import { Link } from '../views/Link.view';

const Developer: React.FC = () => (
    <Layout className={styles.developer}>
        <Menu />
        <Jumbotron>
            <Video src={splash} />
        </Jumbotron>
        <Grid>
            <Text>
                <Paragraph>
                    As a developer I love to experiment, mess with media APIs in
                    the browser, and create clean UIs.
                </Paragraph>
                <Paragraph>
                    Have masters in computer science. And multiple years of
                    experience working in Poland and Norway.
                </Paragraph>
                <Paragraph>
                    Currently I&apos;m working at Pexip where I make video
                    collaboration tools.
                </Paragraph>
                <Paragraph>
                    <Link href="/pixlzr" target="_blank">
                        Pixlzr
                    </Link>
                </Paragraph>
            </Text>
        </Grid>
        <Footer />
    </Layout>
);

export default { Page: Developer };
