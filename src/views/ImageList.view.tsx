import React from 'react';

import { Paragraph } from './Paragraph.view';
import { Image } from './Image.view';

export const ImageList: React.FC<{ images: string[] }> = ({ images }) => (
    <>
        {images.map((src) => (
            <Paragraph key={src}>
                <Image src={src} />
            </Paragraph>
        ))}
    </>
);
