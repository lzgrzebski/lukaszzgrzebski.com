import React from 'react';
import cx from 'classnames';

import styles from './Grid.module.css';

export const Grid: React.FC<
    React.ComponentProps<'div'> & {
        row1?: React.ReactNode;
        row2?: React.ReactNode;
        row3?: React.ReactNode;
        row4?: React.ReactNode;
    }
> = ({ className, children, row1, row2, row3, row4, ...props }) => (
    <div className={cx(styles.grid, className)} {...props}>
        {(children ?? row1) && (
            <div className={styles.row1}>
                {children}
                {row1}
            </div>
        )}
        {row2 && <div className={styles.row2}>{row2}</div>}
        {row3 && <div className={styles.row3}>{row3}</div>}
        {row4 && <div className={styles.row4}>{row4}</div>}
    </div>
);
