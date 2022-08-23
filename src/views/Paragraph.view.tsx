import React from 'react';
import cx from 'classnames';

import styles from './Paragraph.module.css';

export const Paragraph: React.FC<React.ComponentProps<'div'>> = ({
    className,
    ...props
}) => <div className={cx(styles.paragraph, className)} {...props} />;
