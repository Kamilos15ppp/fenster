import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
    AboutWrapper,
    AboutHeader,
    AboutInfo,
    AboutLogotype,
    AboutSignet
} from './About.css';

function About() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <AboutWrapper>
            <AboutHeader
                data-aos='fade-down'
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                {t('about')}
            </AboutHeader>
            <AboutInfo
                data-aos='fade-up-left'
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                {t('about_info')}
            </AboutInfo>
            <AboutLogotype
                data-aos='zoom-in'
                data-aos-duration="1000"
                data-aos-once="true"
            />
            <AboutSignet
                data-aos='zoom-in'
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-once="true"
            />
        </AboutWrapper>
    );
}

export default About;
