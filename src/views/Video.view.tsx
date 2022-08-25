import React from 'react';
import cx from 'classnames';

import styles from './Video.module.css';

export const Video: React.FC<React.ComponentProps<'video'>> = ({
    autoPlay = true,
    className,
    loop = true,
    muted = true,
    preload = 'metadata',
    ...props
}) => (
    <video
        autoPlay={autoPlay}
        className={cx(styles.video, className)}
        loop={loop}
        muted={muted}
        preload={preload}
        {...props}
    />
);