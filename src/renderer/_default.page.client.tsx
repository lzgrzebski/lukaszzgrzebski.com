export { render };
export const clientRouting = true;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageContext } from './types';
import 'normalize.css';
import '../index.css';

let root: ReactDOM.Root;
async function render(pageContext: PageContext) {
    const { Page, pageProps } = pageContext;

    const page = (
        <React.StrictMode>
            <Page {...pageProps} />
        </React.StrictMode>
    );

    const container = document.getElementById('react-container') as HTMLElement;
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
}
