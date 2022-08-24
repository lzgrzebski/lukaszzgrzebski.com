import React from 'react';

import { Footer } from '../views/Footer.view';
import { Grid } from '../views/Grid.page';
import { Jumbotron } from '../views/Jumbotron.view';
import { Layout } from '../views/Layout.view';
import { Menu } from '../views/Menu.view';
import { Paragraph } from '../views/Paragraph.view';
import { Image } from '../views/Image.view';
import { Text } from '../views/Text.view';
import { Page } from '../constants';

import img1 from '../assets/photos/stay-at-home/1.jpg';
import { Iframe } from '../views/Iframe.view';

export const StayAtHome: React.FC<{
    setPage: (page: Page) => void;
}> = ({ setPage }) => {
    return (
        <Layout>
            <Menu setPage={setPage} />
            <Jumbotron>
                <Image src={img1} />
            </Jumbotron>
            <Grid
                row1={
                    <Text>
                        <Paragraph>Stay at home zine</Paragraph>
                    </Text>
                }
                row2={
                    <>
                        <Paragraph>
                            <Iframe src="//e.issuu.com/embed.html?d=stayathome_zin&amp;u=krzysiekorlowski" />
                        </Paragraph>
                    </>
                }
            />
            <Footer />
        </Layout>
    );
};
