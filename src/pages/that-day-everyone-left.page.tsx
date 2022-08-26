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

import img1 from '../assets/photos/that-day-everyone-left/1.jpg';
import img2 from '../assets/photos/that-day-everyone-left/2.jpg';
import img3 from '../assets/photos/that-day-everyone-left/3.jpg';
import img4 from '../assets/photos/that-day-everyone-left/4.jpg';
import img5 from '../assets/photos/that-day-everyone-left/5.jpg';
import img6 from '../assets/photos/that-day-everyone-left/6.jpg';
import img7 from '../assets/photos/that-day-everyone-left/7.jpg';
import img8 from '../assets/photos/that-day-everyone-left/8.jpg';
import img9 from '../assets/photos/that-day-everyone-left/9.jpg';
import img10 from '../assets/photos/that-day-everyone-left/10.jpg';
import img11 from '../assets/photos/that-day-everyone-left/11.jpg';
import img12 from '../assets/photos/that-day-everyone-left/12.jpg';
import img14 from '../assets/photos/that-day-everyone-left/14.jpg';
import img15 from '../assets/photos/that-day-everyone-left/15.jpg';
import img16 from '../assets/photos/that-day-everyone-left/16.jpg';
import img17 from '../assets/photos/that-day-everyone-left/17.jpg';

const images = [
    img3,
    img1,
    img2,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img14,
    img15,
    img16,
    img17,
];

const ThatDayEveryoneLeft: React.FC = () => (
    <Layout>
        <Menu />
        <Jumbotron>
            <Image src={img4} />
        </Jumbotron>
        <Grid
            row1={
                <Text>
                    <Paragraph>
                        When everybody left, it got really quiet. Quiet and
                        empty. But if you stood in one of these streets, it
                        wouldn&apos;t be as easy to grasp the emptiness as the
                        stillness. There are cars, there&apos;s a stray dog, it
                        seems as if the Christmas lights are going to light up
                        as soon as it gets dark. But it doesn&apos;t darken, the
                        water doesn&apos;t move, you will never hear these
                        particular waves. So should some forensics team come to
                        investigate this unusual scene, they would feel the
                        warmth of the engine of a car left in the harbour, but
                        they wouldn&apos;t hear the echos any conversations. The
                        cause and effect seem forever separated. However,
                        through the visual mindfulness of Łukasz
                        Zgrzebski&apos;s scenes. We are brought closer to the
                        hidden narrative and the power of the absence of
                        closure.
                    </Paragraph>
                    <Paragraph>
                        In the theory of sound there is a notion that the
                        acoustic signal of &quot;white noise&quot; is a
                        completely flat spectrum. This term comes from the
                        analogy with the optical spectrum of an electromagnetic
                        wave. Visual sound and tone constitutes a kind of
                        background music that doesn&apos;t directly attract
                        attention, but still bring relief and stirs mindfulness.
                        Pictures by Łukasz Zgrzebski are only apparently
                        soothing or just to a certain degree. You could flip
                        though these pictures like you would a Scandinavian
                        furniture catalogue. However, that peace and order is a
                        minimalist illusion. We are taken in by the consistent
                        colour palette and faultless composition. You can take a
                        breath but when you exhale, something deeper starts to
                        emerge.
                    </Paragraph>
                    <Paragraph>
                        Such a story might have been a beautiful illustration
                        for finely drawn maps of Eugeniusz Romer acquainting us
                        with frosty North. Such pictures could have appeared on
                        the covers of collector&apos;s editions of old-time
                        sagas. Such innocence of view has however been lost.
                        These pictures set an empty stage, that has the faint
                        echos of past trauma. So when we gaze at this deserted
                        landscape, we contemplate it focused and in silence. And
                        at a certain point we feel empathy for those who had to
                        abandon their homes. Then just another few breaths and
                        we realise that they are us.
                    </Paragraph>
                </Text>
            }
            row2={<ImageList images={images} />}
        />
        <Footer />
    </Layout>
);

export default { Page: ThatDayEveryoneLeft };
