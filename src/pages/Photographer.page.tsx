import React from 'react';

import splash from '../assets/videos/photographer.mp4';
import styles from './Photographer.module.css';
import { Page } from '../constants';
import { Menu } from '../views/Menu.view';
import { Footer } from '../views/Footer.view';
import { Jumbotron } from '../views/Jumbotron.view';
import { Video } from '../views/Video.view';
import { Text } from '../views/Text.view';
import { Layout } from '../views/Layout.view';
import { Grid } from '../views/Grid.page';
import { Paragraph } from '../views/Paragraph.view';

export const Photographer: React.FC<{ setPage: (page: Page) => void }> = ({
    setPage,
}) => (
    <Layout>
        <Menu setPage={setPage} />
        <Jumbotron>
            <Video src={splash} />
        </Jumbotron>
        <Grid>
            <Text>
                <Paragraph>
                    As a photographer, I like exploring spaces, especially where
                    nature meets human activity in the symbiosis.
                </Paragraph>
                <Paragraph>
                    I am a graduate from AFA School of Photography and my latest
                    exbition &quot;That day everyone left&quot; took place in
                    Contemporary Museum in Wrocław.
                </Paragraph>
                <Paragraph>
                    <a>By the river (2021-)</a>
                </Paragraph>
                <Paragraph>
                    <a>Stay at home zine (2020)</a>
                </Paragraph>
                <Paragraph>
                    <a>That day everyone left (2019)</a>
                </Paragraph>
            </Text>
        </Grid>
        <Footer />
    </Layout>
);

// https://muzeumwspolczesne.pl/mww/wystawy/tamtego-dnia-wszyscy-wyjechali-lukasz-zgrzebski/?lang=en
