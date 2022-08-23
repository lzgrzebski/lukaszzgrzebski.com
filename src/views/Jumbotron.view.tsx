import React from 'react';
import cx from 'classnames';

import styles from './Jumbotron.module.css';

export const Jumbotron: React.FC<React.ComponentProps<'div'>> = ({
    className,
    ...props
}) => <div className={cx(styles.jumbotron, className)} {...props} />;
