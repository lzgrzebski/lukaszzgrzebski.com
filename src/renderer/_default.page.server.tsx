import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';

import { PageContext } from './types';

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
            <React.StrictMode>
                <Page {...pageProps} />
            </React.StrictMode>
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
