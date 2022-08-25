import React from 'react';

import splash from '../assets/videos/musician.mp4';
import { Menu } from '../views/Menu.view';
import { Footer } from '../views/Footer.view';
import { Jumbotron } from '../views/Jumbotron.view';
import { Video } from '../views/Video.view';
import { Iframe } from '../views/Iframe.view';
import { Text } from '../views/Text.view';
import { Layout } from '../views/Layout.view';
import { Grid } from '../views/Grid.page';
import { Paragraph } from '../views/Paragraph.view';

const Musician: React.FC = () => (
    <Layout>
        <Menu />
        <Jumbotron>
            <Video src={splash} />
        </Jumbotron>
        <Grid
            row1={
                <Text>
                    <Paragraph>
                        As a musician, an amatour one I explore ambient
                        soudscapes and generative music.
                    </Paragraph>
                    <Paragraph>
                        Besides my solo explorations I play in screamo band
                        called Nukk. And I was a member of DERME, a group of
                        audiovisual artists combining ambient and noise music
                        with experimental cinema.
                    </Paragraph>
                </Text>
            }
            row2={
                <Iframe src="https://www.youtube.com/embed/FaVxCsob25U?controls=0" />
            }
            row3={
                <Iframe src="https://www.youtube.com/embed/2o8Cukf4orU?controls=0" />
            }
            row4={
                <Iframe src="https://www.youtube.com/embed/wlO935TyVyw?controls=0" />
            }
        />
        <Footer />
    </Layout>
);

export default { Page: Musician };
