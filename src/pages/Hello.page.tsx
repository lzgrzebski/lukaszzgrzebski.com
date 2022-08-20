import React from 'react';

export const Hello: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
                style={{
                    fontFamily: 'Charter',
                    fontSize: 40,
                    lineHeight: 1.2,
                    maxWidth: 550,
                    margin: '0 auto',
                }}
            >
                Hello, <br />
                my name is Łukasz, I am a <a>developer</a> and{' '}
                <a>photographer</a>. <br />
                <br />
                And in my free time aspiring <a>musician</a> too :).
            </div>
        </div>
    );
};
