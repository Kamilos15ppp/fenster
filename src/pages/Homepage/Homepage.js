import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

import { Button } from '../../components';
import {
    ArticleWrapper,
    HeaderWrapper,
    HomepageWrapper,
    HomepageHeader,
    HomepageImage,
    HomepageImageDarker,
    HomepageImageHeader,
    HeaderImage,
    HeaderImageDarker,
    CompanyTitle,
    PersonTitle
} from './Homepage.css';

import windowImage from '../../assets/images/window.jpg';
import constructionImage from '../../assets/images/construction.jpg';
import materialsImage from '../../assets/images/screw.jpg';


function Homepage() {
    const { t } = useTranslation();
    const companyRef = useRef(null);
    const personRef = useRef(null);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        gsap.fromTo(
            companyRef.current,
            { scale: 0, autoAlpha: 0 },
            { duration: 1.2, scale: 1, autoAlpha: 1, ease: 'bounce' }
        );
        gsap.fromTo(
            personRef.current,
            { y: '+=400', autoAlpha: 0 },
            { duration: 1.2, delay: 1, y: 0, autoAlpha: 1, ease: 'back' }
        );
    },[]);

    return (
        <HomepageWrapper>
            <HeaderWrapper>
                <HeaderImageDarker/>
                <HeaderImage>
                    <CompanyTitle
                        ref={companyRef}
                    >
                        Fenster & Bautechnik
                    </CompanyTitle>
                    <PersonTitle
                        ref={personRef}
                    >
                        Natalia Stachnik
                    </PersonTitle>
                </HeaderImage>
            </HeaderWrapper>
            <HomepageHeader
                data-aos='fade-down'
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                {t('homepage_header')}
            </HomepageHeader>
            <ArticleWrapper>
                <HomepageImage
                    image={windowImage}
                    position='right'
                    data-aos='fade-left'
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    <HomepageImageDarker />
                    <HomepageImageHeader>
                        {t('windows')}
                    </HomepageImageHeader>
                </HomepageImage>
                <Button
                    content={t('see_the_offer')}
                    position='right'
                    to='/offer'
                />
            </ArticleWrapper>
            <ArticleWrapper>
                <HomepageImage
                    image={constructionImage}
                    position='left'
                    data-aos='fade-right'
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    <HomepageImageDarker />
                    <HomepageImageHeader>
                        {t('construction')}
                    </HomepageImageHeader>
                </HomepageImage>
                <Button
                    content={t('see_the_offer')}
                    position='left'
                    to='/offer'
                />
            </ArticleWrapper>
            <ArticleWrapper>
                <HomepageImage
                    image={materialsImage}
                    position='right'
                    data-aos='fade-left'
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    <HomepageImageDarker />
                    <HomepageImageHeader>
                        {t('building_materials')}
                    </HomepageImageHeader>
                </HomepageImage>
                <Button
                    content={t('see_the_offer')}
                    position='right'
                    to='/offer'
                />
            </ArticleWrapper>
        </HomepageWrapper>
    );
}

export default Homepage;
