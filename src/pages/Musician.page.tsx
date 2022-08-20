import React from 'react';
import splash from '../assets/videos/musician.mp4';
// import './Musician.css';

export const Musician: React.FC = () => {
    return (
        <>
            <video src={splash} autoPlay loop muted />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
                <div style={{ fontSize: 50 }}>Lukasz</div>
            </div>
            <div>
                As a musician, an amatour one I explore ambient soudscapes and
                genererative music, I play in the screamo band called Nukk too.
                And
            </div>

            <div>
                Besides my solo explorations I play in screamo band called Nukk.
                And I was a member of DERME, a group of audiovisual artists
                combining ambient and noise music with experimental cinema.
            </div>

            <div>Marion stokes</div>
            <div>Diploma</div>
            <div>Smth from nukk</div>
        </>
    );
};
