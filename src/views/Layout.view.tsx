import React from 'react';
import cx from 'classnames';

import styles from './Layout.module.css';

export const Layout: React.FC<React.ComponentProps<'div'>> = ({
    className,
    ...props
}) => <div className={cx(styles.layout, className)} {...props} />;
