import React from 'react';
import cx from 'classnames';

import styles from './Iframe.module.css';

export const Iframe: React.FC<React.ComponentProps<'iframe'>> = ({
    allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    allowFullScreen = true,
    frameBorder = 0,
    className,
    ...props
}) => (
    <iframe
        allow={allow}
        allowFullScreen={allowFullScreen}
        className={cx(styles.iframe, className)}
        frameBorder={frameBorder}
        {...props}
    />
);
