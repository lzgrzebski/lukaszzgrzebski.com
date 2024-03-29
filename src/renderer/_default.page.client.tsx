import React from 'react';
import ReactDOM from 'react-dom/client';

import { PageContext } from './types';
import { PageShell } from './PageShell';

import 'normalize.css';
import '../index.css';

let root: ReactDOM.Root;
export const render = async (pageContext: PageContext) => {
    const { Page, pageProps } = pageContext;

    const page = (
        <PageShell pageContext={pageContext}>
            <Page {...pageProps} />
        </PageShell>
    );

    const container = document.getElementById('root') as HTMLElement;
    // SPA
    if (container.innerHTML === '' || !pageContext.isHydration) {
        if (!root) {
            root = ReactDOM.createRoot(container);
        }
        root.render(page);
        // SSR
    } else {
        root = ReactDOM.hydrateRoot(container, page);
    }
};
export const clientRouting = true;
