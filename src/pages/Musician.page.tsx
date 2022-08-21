import React from 'react';
import cx from 'classnames';
import splash from '../assets/videos/musician.mp4';
import styles from './Musician.module.css';

export const Musician: React.FC = () => {
    return (
        <div className={styles.musician}>
            <div className={styles.menu}>
                <div className={cx(styles.button, styles.button1)}>
                    Developer
                </div>
                <div className={cx(styles.button, styles.button2)}>
                    Photographer
                </div>
                <div
                    className={cx(styles.button, styles.button3, styles.active)}
                >
                    Musician
                </div>
            </div>
            <div className={styles.jumbotron}>
                <video
                    src={splash}
                    autoPlay
                    loop
                    muted
                    className={styles.video}
                />
            </div>
            <div className={cx(styles.grid, styles.text)}>
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
                    <iframe
                        src="https://www.youtube.com/embed/FaVxCsob25U?controls=0"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.iframe}
                    ></iframe>
                </div>
                <div className={styles.row3}>
                    <iframe
                        src="https://www.youtube.com/embed/2o8Cukf4orU?controls=0"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.iframe}
                    ></iframe>
                </div>
                <div className={styles.row4}>
                    <iframe
                        src="https://www.youtube.com/embed/wlO935TyVyw?controls=0"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.iframe}
                    ></iframe>
                </div>
            </div>
            <div className={styles.footer}>
                <div>&copy; łukasz</div>
                <div className={styles.links}>
                    <a>linkedin</a>
                    <a>instagram</a>
                    <a>github</a>
                </div>
            </div>
        </div>
    );
};
