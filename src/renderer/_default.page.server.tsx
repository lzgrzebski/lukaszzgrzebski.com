import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';

import { PageContext } from './types';
import { PageShell } from './PageShell';

import 'normalize.css';
import '../index.css';

export const render = (pageContext: PageContext) => {
    let pageHtml;
    if (!pageContext.Page) {
        // SPA
        pageHtml = '';
    } else {
        // SSR / HTML-only
        const { Page, pageProps } = pageContext;
        pageHtml = ReactDOMServer.renderToString(
            <PageShell pageContext={pageContext}>
                <Page {...pageProps} />
            </PageShell>
        );
    }

    return escapeInject`<!DOCTYPE html>
    <html>
    <head> <meta charset="UTF-8" /></head> 
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps'];
