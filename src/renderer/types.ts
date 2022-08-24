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
