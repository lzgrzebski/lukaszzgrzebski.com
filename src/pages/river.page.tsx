import React from 'react';

import { Footer } from '../views/Footer.view';
import { Grid } from '../views/Grid.page';
import { Jumbotron } from '../views/Jumbotron.view';
import { Layout } from '../views/Layout.view';
import { Menu } from '../views/Menu.view';
import { Paragraph } from '../views/Paragraph.view';
import { Image } from '../views/Image.view';
import { Text } from '../views/Text.view';
import { ImageList } from '../views/ImageList.view';

import img2 from '../assets/photos/river/2.jpg';
import img3 from '../assets/photos/river/3.jpg';
import img4 from '../assets/photos/river/4.jpg';
import img7 from '../assets/photos/river/7.jpg';
import img8 from '../assets/photos/river/8.jpg';
import img9 from '../assets/photos/river/9.jpg';
import img10 from '../assets/photos/river/10.jpg';
import img11 from '../assets/photos/river/11.jpg';

const images = [img3, img11, img8, img4, img2, img7, img9];

const River: React.FC = () => (
    <Layout>
        <Menu />
        <Jumbotron>
            <Image src={img10} />
        </Jumbotron>
        <Grid
            row1={
                <Text>
                    <Paragraph>River</Paragraph>
                </Text>
            }
            row2={<ImageList images={images} />}
        />
        <Footer />
    </Layout>
);

export default { Page: River };
