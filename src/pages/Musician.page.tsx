import React from 'react';
import cx from 'classnames';
import splash from '../assets/videos/musician.mp4';
import styles from './Musician.module.css';
import { Menu } from '../views/Menu.view';
import { Footer } from '../views/Footer.view';
import { Page } from '../constants';
import { Jumbotron } from '../views/Jumbotron.view';
import { Video } from '../views/Video.view';
import { Iframe } from '../views/Iframe.view';
import { Text } from '../views/Text.view';

export const Musician: React.FC<{ setPage: (page: Page) => void }> = ({
    setPage,
}) => {
    return (
        <div className={styles.musician}>
            <Menu setPage={setPage} />
            <Jumbotron>
                <Video src={splash} />
            </Jumbotron>
            <Text className={styles.grid}>
                <div className={styles.row1}>
                    <div className={styles.paragraph}>
                        As a musician, an amatour one I explore ambient
                        soudscapes and generative music.
                    </div>

                    <div className={styles.paragraph}>
                        Besides my solo explorations I play in screamo band
                        called Nukk. And I was a member of DERME, a group of
                        audiovisual artists combining ambient and noise music
                        with experimental cinema.
                    </div>
                </div>
                <div className={styles.row2}>
                    <Iframe src="https://www.youtube.com/embed/FaVxCsob25U?controls=0" />
                </div>
                <div className={styles.row3}>
                    <Iframe src="https://www.youtube.com/embed/2o8Cukf4orU?controls=0" />
                </div>
                <div className={styles.row4}>
                    <Iframe src="https://www.youtube.com/embed/wlO935TyVyw?controls=0" />
                </div>
            </Text>
            <Footer />
        </div>
    );
};
