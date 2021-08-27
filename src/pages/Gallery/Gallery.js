import React, {useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

import {
    GalleryWrapper,
    GalleryHeader,
    GalleryImg,
    ImagesWrapper
} from './Gallery.css';

import image1Small from '../../assets/compressedimgs/window_640.jpg';
import image1Medium from '../../assets/compressedimgs/window_1280.jpg';
import image1Large from '../../assets/compressedimgs/window_1920.jpg';
import image2Small from '../../assets/compressedimgs/windows_640.jpg';
import image2Medium from '../../assets/compressedimgs/windows_1280.jpg';
import image2Large from '../../assets/compressedimgs/windows_1920.jpg';
import image3Small from '../../assets/compressedimgs/window-transparent_640.jpg';
import image3Medium from '../../assets/compressedimgs/window-transparent_1280.jpg';
import image3Large from '../../assets/compressedimgs/window-transparent_1920.jpg';
import image4Small from '../../assets/compressedimgs/window-transparent-wood_640.jpg';
import image4Medium from '../../assets/compressedimgs/window-transparent-wood_1280.jpg';
import image4Large from '../../assets/compressedimgs/window-transparent-wood_1920.jpg';
import image5Small from '../../assets/compressedimgs/people_640.jpg';
import image5Medium from '../../assets/compressedimgs/people_1280.jpg';
import image5Large from '../../assets/compressedimgs/people_1920.jpg';
import image6Small from '../../assets/compressedimgs/chairs_640.jpg';
import image6Medium from '../../assets/compressedimgs/chairs_1280.jpg';
import image6Large from '../../assets/compressedimgs/chairs_1920.jpg';

function Gallery() {
    const { t } = useTranslation();
    const sizes = '(max-width: 360px) 300px, (max-width: 768px) 640px, (max-width: 1300px) 1280px, 1920px';
    const imagesRef = useRef(null);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const images = imagesRef.current.children;
        gsap.fromTo(images[0], { scale: 0, autoAlpha: 0 }, { delay: .5, duration: 1.5, scale: 1, autoAlpha: 1 });
        gsap.fromTo(images[1], { scale: 0, autoAlpha: 0 }, { delay: 1, duration: 1.5, scale: 1, autoAlpha: 1 });
        gsap.fromTo(images[2], { scale: 0, autoAlpha: 0 }, { delay: 1.5, duration: 1.5, scale: 1, autoAlpha: 1 });
        gsap.fromTo(images[3], { scale: 0, autoAlpha: 0 }, { delay: 2, duration: 1.5, scale: 1, autoAlpha: 1 });
        gsap.fromTo(images[4], { scale: 0, autoAlpha: 0 }, { delay: 2.5, duration: 1.5, scale: 1, autoAlpha: 1 });
        gsap.fromTo(images[5], { scale: 0, autoAlpha: 0 }, { delay: 3, duration: 1.5, scale: 1, autoAlpha: 1 });
    }, []);

    return (
        <GalleryWrapper>
            <GalleryHeader
                data-aos='fade-down'
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                {t('gallery')}
            </GalleryHeader>
            <ImagesWrapper ref={imagesRef}>
                <GalleryImg
                    srcSet={`${image1Small} 640w, ${image1Medium} 1280w, ${image1Large} 1920w`}
                    sizes={sizes}
                    src={image1Large}
                    alt='image1'
                    loading='lazy'
                />
                <GalleryImg
                    srcSet={`${image2Small} 640w, ${image2Medium} 1280w, ${image2Large} 1920w`}
                    sizes={sizes}
                    src={image2Large}
                    alt='image2'
                    loading='lazy'
                />
                <GalleryImg
                    srcSet={`${image3Small} 640w, ${image3Medium} 1280w, ${image3Large} 1920w`}
                    sizes={sizes}
                    src={image3Large}
                    alt='image3'
                    loading='lazy'
                />
                <GalleryImg
                    srcSet={`${image4Small} 640w, ${image4Medium} 1280w, ${image4Large} 1920w`}
                    sizes={sizes}
                    src={image4Large}
                    alt='image4'
                    loading='lazy'
                />
                <GalleryImg
                    srcSet={`${image5Small} 640w, ${image5Medium} 1280w, ${image5Large} 1920w`}
                    sizes={sizes}
                    src={image5Large}
                    alt='image5'
                    loading='lazy'
                />
                <GalleryImg
                    srcSet={`${image6Small} 640w, ${image6Medium} 1280w, ${image6Large} 1920w`}
                    sizes={sizes}
                    src={image6Large}
                    alt='image6'
                    loading='lazy'
                />
            </ImagesWrapper>
        </GalleryWrapper>
    );
}

export default Gallery;
