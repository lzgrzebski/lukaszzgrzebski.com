import React, { createContext, useContext } from 'react';

export interface PageContext {
    Page: React.FC;
    exports: {
        documentProps?: {
            title: string;
        };
    };
    urlPathname: string;
    pageProps: Record<string, unknown>;
    documentProps?: {
        title: string;
    };
    isHydration: boolean;
}

const Context = createContext<PageContext | undefined>(undefined);

export const PageContextProvider: React.FC<
    React.PropsWithChildren<{ pageContext: PageContext }>
> = ({ pageContext, children }) => (
    <Context.Provider value={pageContext}>{children}</Context.Provider>
);

export const usePageContext = () => {
    const pageContext = useContext(Context);
    if (pageContext === undefined) {
        throw new Error(
            'usePageContext must be used within a PageContextProvider'
        );
    }

    return pageContext;
};
