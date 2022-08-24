import React, { useState } from 'react';
import { Page } from './constants';
import { Developer } from './pages/Developer.page';
import { Hello } from './pages/Hello.page';
import { Musician } from './pages/Musician.page';
import { Photographer } from './pages/Photographer.page';
import { Pixlzr } from './pages/Pixlzr.page';
import { River } from './pages/River.page';
import { StayAtHome } from './pages/StayAtHome.page';
import { ThatDayEveryoneLeft } from './pages/ThatDayEveryoneLeft.page';

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
        case Page.ThatDayEveryoneLeft:
            return <ThatDayEveryoneLeft setPage={setPage} />;
        case Page.River:
            return <River setPage={setPage} />;
        case Page.StayAtHome:
            return <StayAtHome setPage={setPage} />;
        default:
            return <Hello setPage={setPage} />;
    }
};
