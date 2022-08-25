import React from 'react';
import cx from 'classnames';
import styles from './Menu.module.css';
import { Link } from './Link.view';

const MenuLink: React.FC<React.ComponentProps<typeof Link> & { i: number }> = ({
    i,
    href,
    children,
    ...props
}) => (
    // FIXME: dirty hack to get both backdrop-filter and mix-blend-mode they need to be in seperate composite layers
    <>
        <div
            className={cx(styles.button, styles[`button${i}`], styles.filter)}
        ></div>
        <Link
            activeClassName={styles.active}
            className={cx(styles.button, styles[`button${i}`], styles.blend)}
            focusClassName={styles.focus}
            href={href}
            {...props}
        >
            {children}
        </Link>
    </>
);

export const Menu: React.FC = () => (
    <>
        <div className={styles.menu}></div>
        {[
            ['Developer', '/developer'],
            ['Photographer', '/photographer'],
            ['Musician', '/musician'],
        ].map(([children, href], i) => (
            <MenuLink href={href} i={i} key={href}>
                {children}
            </MenuLink>
        ))}
    </>
);
