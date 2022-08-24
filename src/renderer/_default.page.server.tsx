export { render };
export { passToClient };

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import { PageContext } from './types';
import 'normalize.css';
import '../index.css';

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps'];

function render(pageContext: PageContext) {
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
        <div id="react-container">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
