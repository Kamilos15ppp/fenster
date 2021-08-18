import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    GalleryWrapper,
    GalleryHeader,
    GalleryImage,
    ImagesWrapper
} from './Gallery.css';

function Gallery() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <GalleryWrapper>
            <GalleryHeader
                data-aos='fade-down'
                data-aos-delay="100"
                data-aos-duration="1000"
            >
                {t('gallery')}
            </GalleryHeader>
            <ImagesWrapper>
                <GalleryImage
                    num={'0'}
                    data-aos='zoom-in'
                    data-aos-duration="1000"
                />
                <GalleryImage
                    num={'1'}
                    data-aos='zoom-in'
                    data-aos-duration="1000"
                />
                <GalleryImage
                    num={'2'}
                    data-aos='zoom-in'
                    data-aos-duration="1000"
                />
                <GalleryImage
                    num={'0'}
                    data-aos='zoom-in'
                    data-aos-duration="1000"
                />
                <GalleryImage
                    num={'1'}
                    data-aos='zoom-in'
                    data-aos-duration="1000"
                />
                <GalleryImage
                    num={'2'}
                    data-aos='zoom-in'
                    data-aos-duration="1000"
                />
            </ImagesWrapper>
        </GalleryWrapper>
    );
}

export default Gallery;
