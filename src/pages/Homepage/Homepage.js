import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { Animated } from 'react-animated-css';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <HomepageWrapper>
            <HeaderWrapper>
                <HeaderImageDarker/>
                <HeaderImage>
                    <Animated
                        animationIn="zoomIn"
                        animationInDuration={800}
                        isVisible={true}
                    >
                        <CompanyTitle>Fenster & Baurertechnik</CompanyTitle>
                    </Animated>
                    <Animated
                        animationIn="bounceInUp"
                        animationInDuration={1200}
                        animationInDelay={600}
                        isVisible={true}
                    >
                        <PersonTitle>Natalia Stachnik</PersonTitle>
                    </Animated>
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
                />
            </ArticleWrapper>
        </HomepageWrapper>
    );
}

export default Homepage;
