import React, {useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

import {
    GalleryWrapper,
    GalleryHeader,
    GalleryImg,
    ImgContainer,
    ImagesWrapper
} from './Gallery.css';

import image1Small from '../../assets/photos/1_s.jpg';
import image1Medium from '../../assets/photos/1_m.jpg';
import image1Large from '../../assets/photos/1_l.jpg';
import image2Small from '../../assets/photos/2_s.jpg';
import image2Medium from '../../assets/photos/2_m.jpg';
import image2Large from '../../assets/photos/2_l.jpg';
import image3Small from '../../assets/photos/3_s.jpg';
import image3Medium from '../../assets/photos/3_m.jpg';
import image3Large from '../../assets/photos/3_l.jpg';
import image4Small from '../../assets/photos/4_s.jpg';
import image4Medium from '../../assets/photos/4_s.jpg';
import image4Large from '../../assets/photos/4_s.jpg';
import image5Small from '../../assets/photos/5_s.jpg';
import image5Medium from '../../assets/photos/5_m.jpg';
import image5Large from '../../assets/photos/5_l.jpg';
import image6Small from '../../assets/photos/6_s.jpg';
import image6Medium from '../../assets/photos/6_m.jpg';
import image6Large from '../../assets/photos/6_l.jpg';
import image7Small from '../../assets/photos/7_s.jpg';
import image7Medium from '../../assets/photos/7_m.jpg';
import image7Large from '../../assets/photos/7_l.jpg';
import image8Small from '../../assets/photos/8_s.jpg';
import image8Medium from '../../assets/photos/8_m.jpg';
import image8Large from '../../assets/photos/8_l.jpg';
import image9Small from '../../assets/photos/9_s.jpg';
import image9Medium from '../../assets/photos/9_m.jpg';
import image9Large from '../../assets/photos/9_l.jpg';
import image10Small from '../../assets/photos/10_s.jpg';
import image10Medium from '../../assets/photos/10_m.jpg';
import image10Large from '../../assets/photos/10_l.jpg';
import image11Small from '../../assets/photos/11_s.jpg';
import image11Medium from '../../assets/photos/11_m.jpg';
import image11Large from '../../assets/photos/11_l.jpg';
import image12Small from '../../assets/photos/12_s.jpg';
import image12Medium from '../../assets/photos/12_m.jpg';
import image12Large from '../../assets/photos/12_l.jpg';
import image13Small from '../../assets/photos/13_s.jpg';
import image13Medium from '../../assets/photos/13_m.jpg';
import image13Large from '../../assets/photos/13_l.jpg';
import image14Small from '../../assets/photos/14_s.jpg';
import image14Medium from '../../assets/photos/14_m.jpg';
import image14Large from '../../assets/photos/14_l.jpg';

function Gallery() {
    const { t } = useTranslation();
    const sizes = '(max-width: 360px) 300px, (max-width: 768px) 640px, (max-width: 1300px) 1280px, 1920px';
    const imagesRef = useRef(null);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const photos = [...imagesRef.current.children];
        photos.map((photo) => gsap.fromTo(photo, { scale: 0, autoAlpha: 0 }, { delay: 0.5, duration: 2, scale: 1, autoAlpha: 1 }));
    }, []);

    const images = [
        {id: 5, imgS: image5Small, imgM: image5Medium, imgL: image5Large, isBig: false},
        {id: 8, imgS: image8Small, imgM: image8Medium, imgL: image8Large, isBig: false},
        {id: 1, imgS: image1Small, imgM: image1Medium, imgL: image1Large, isBig: false},
        {id: 2, imgS: image2Small, imgM: image2Medium, imgL: image2Large, isBig: false},
        {id: 3, imgS: image3Small, imgM: image3Medium, imgL: image3Large, isBig: false},
        {id: 4, imgS: image4Small, imgM: image4Medium, imgL: image4Large, isBig: false},
        {id: 6, imgS: image6Small, imgM: image6Medium, imgL: image6Large, isBig: false},
        {id: 7, imgS: image7Small, imgM: image7Medium, imgL: image7Large, isBig: false},
        {id: 13, imgS: image13Small, imgM: image13Medium, imgL: image13Large, isBig: true},
        {id: 14, imgS: image14Small, imgM: image14Medium, imgL: image14Large, isBig: true},
        {id: 12, imgS: image12Small, imgM: image12Medium, imgL: image12Large, isBig: true},
        {id: 11, imgS: image11Small, imgM: image11Medium, imgL: image11Large, isBig: true},
        {id: 10, imgS: image10Small, imgM: image10Medium, imgL: image10Large, isBig: true},
        {id: 9, imgS: image9Small, imgM: image9Medium, imgL: image9Large, isBig: true},
    ];

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
                {images.map(({id, imgS, imgM, imgL, isBig}) => (
                    <ImgContainer key={id}>
                        <GalleryImg
                            srcSet={`${imgS} 640w, ${imgM} 1280w, ${imgL} 1920w`}
                            sizes={sizes}
                            src={imgL}
                            alt={`Image ${id}`}
                            loading='lazy'
                            isBig={isBig}
                        />
                    </ImgContainer>
                ))}
            </ImagesWrapper>
        </GalleryWrapper>
    );
}

export default Gallery;
