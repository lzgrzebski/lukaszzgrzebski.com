import React, { useState } from 'react';
import { Page } from './constants';
import { Developer } from './pages/Developer.page';
import { Hello } from './pages/Hello.page';
import { Musician } from './pages/Musician.page';
import { Photographer } from './pages/Photographer.page';
import { Pixlzr } from './pages/Pixlzr.page';

export const App: React.FC = () => {
    const [page, setPage] = useState(Page.Hello);

    switch (page) {
        case Page.Developer:
            return <Developer setPage={setPage} />;
        case Page.Photographer:
            return <Photographer setPage={setPage} />;
        case Page.Musician:
            return <Musician setPage={setPage} />;
        case Page.Pixlzr:
            return <Pixlzr />;
        default:
            return <Hello setPage={setPage} />;
    }
};
