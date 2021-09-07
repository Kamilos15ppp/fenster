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
        gsap.fromTo(images[6], { scale: 0, autoAlpha: 0 }, { delay: 3.5, duration: 1.5, scale: 1, autoAlpha: 1 });
        gsap.fromTo(images[7], { scale: 0, autoAlpha: 0 }, { delay: 4, duration: 1.5, scale: 1, autoAlpha: 1 });
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
                <ImgContainer>
                    <GalleryImg
                        srcSet={`${image1Small} 640w, ${image1Medium} 1280w, ${image1Large} 1920w`}
                        sizes={sizes}
                        src={image1Large}
                        alt='image1'
                        loading='lazy'
                    />
                </ImgContainer>
                <ImgContainer>
                    <GalleryImg
                        srcSet={`${image2Small} 640w, ${image2Medium} 1280w, ${image2Large} 1920w`}
                        sizes={sizes}
                        src={image2Large}
                        alt='image2'
                        loading='lazy'
                    />
                </ImgContainer>
                <ImgContainer>
                    <GalleryImg
                        srcSet={`${image3Small} 640w, ${image3Medium} 1280w, ${image3Large} 1920w`}
                        sizes={sizes}
                        src={image3Large}
                        alt='image3'
                        loading='lazy'
                    />
                </ImgContainer>
                <ImgContainer>
                    <GalleryImg
                        srcSet={`${image4Small} 640w, ${image4Medium} 1280w, ${image4Large} 1920w`}
                        sizes={sizes}
                        src={image4Large}
                        alt='image4'
                        loading='lazy'
                    />
                </ImgContainer>
                <ImgContainer>
                    <GalleryImg
                        srcSet={`${image5Small} 640w, ${image5Medium} 1280w, ${image5Large} 1920w`}
                        sizes={sizes}
                        src={image5Large}
                        alt='image5'
                        loading='lazy'
                    />
                </ImgContainer>
                <ImgContainer>
                    <GalleryImg
                        srcSet={`${image6Small} 640w, ${image6Medium} 1280w, ${image6Large} 1920w`}
                        sizes={sizes}
                        src={image6Large}
                        alt='image6'
                        loading='lazy'
                    />
                </ImgContainer>
                <ImgContainer>
                    <GalleryImg
                        srcSet={`${image7Small} 640w, ${image7Medium} 1280w, ${image7Large} 1920w`}
                        sizes={sizes}
                        src={image7Large}
                        alt='image7'
                        loading='lazy'
                    />
                </ImgContainer>
                <ImgContainer>
                    <GalleryImg
                        srcSet={`${image8Small} 640w, ${image8Medium} 1280w, ${image8Large} 1920w`}
                        sizes={sizes}
                        src={image8Large}
                        alt='image8'
                        loading='lazy'
                    />
                </ImgContainer>
            </ImagesWrapper>
        </GalleryWrapper>
    );
}

export default Gallery;
