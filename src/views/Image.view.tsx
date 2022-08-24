import React from 'react';
import cx from 'classnames';

import styles from './Image.module.css';

export const Image: React.FC<React.ComponentProps<'img'>> = ({
    className,
    ...props
}) => <img className={cx(styles.image, className)} {...props} />;
