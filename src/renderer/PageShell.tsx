import React from 'react';

import { PageContextProvider } from './page.context';
import { PageContext } from './types';

export const PageShell: React.FC<
    React.PropsWithChildren<{ pageContext: PageContext }>
> = ({ pageContext, children }) => (
    <React.StrictMode>
        <PageContextProvider pageContext={pageContext}>
            {children}
        </PageContextProvider>
    </React.StrictMode>
);
