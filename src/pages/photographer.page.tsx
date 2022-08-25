import React from 'react';

import { Menu } from '../views/Menu.view';
import { Footer } from '../views/Footer.view';
import { Jumbotron } from '../views/Jumbotron.view';
import { Video } from '../views/Video.view';
import { Text } from '../views/Text.view';
import { Layout } from '../views/Layout.view';
import { Grid } from '../views/Grid.page';
import { Paragraph } from '../views/Paragraph.view';
import { Link } from '../views/Link.view';

import splash from '../assets/videos/photographer.mp4';

const Photographer: React.FC = () => (
    <Layout>
        <Menu />
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
                    exbition{' '}
                    <Link
                        href="https://muzeumwspolczesne.pl/mww/wystawy/tamtego-dnia-wszyscy-wyjechali-lukasz-zgrzebski/?lang=en"
                        target="_blank"
                    >
                        &quot;That day everyone left&quot;
                    </Link>{' '}
                    took place in Contemporary Museum in Wrocław.
                </Paragraph>
                <Paragraph>
                    <Link href="/river">By the river (2021-)</Link>
                </Paragraph>
                <Paragraph>
                    <Link href="/stay-at-home">Stay at home zine (2020)</Link>
                </Paragraph>
                <Paragraph>
                    <Link href="/that-day-everyone-left">
                        That day everyone left (2019)
                    </Link>
                </Paragraph>
            </Text>
        </Grid>
        <Footer />
    </Layout>
);

export default { Page: Photographer };
