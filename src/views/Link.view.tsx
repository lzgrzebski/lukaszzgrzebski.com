import React, { useRef } from 'react';
import cx from 'classnames';
import { LinkProps } from '@react-types/link';
import { mergeProps, useLink, useFocusRing } from 'react-aria';

import { usePageContext } from '../renderer/page.context';

export const Link: React.FC<
    React.ComponentProps<'a'> &
        LinkProps & { activeClassName?: string; focusClassName?: string }
> = ({ activeClassName = '', className, focusClassName = '', ...props }) => {
    const pageContext = usePageContext();
    const ref = useRef<HTMLAnchorElement>(null);
    const { focusProps, isFocusVisible } = useFocusRing();
    const {
        // skip onClick as it breaks vite-plugin-ssr
        linkProps: { onClick: _, ...linkProps },
    } = useLink(props, ref);
    const allProps = mergeProps(linkProps, focusProps);

    const isActive = pageContext.urlPathname === props.href;
    return (
        <a
            {...allProps}
            className={cx(
                className,
                isActive && activeClassName,
                isFocusVisible && focusClassName
            )}
            ref={ref}
            {...props}
        />
    );
};
