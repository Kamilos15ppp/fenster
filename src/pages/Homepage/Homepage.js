import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Button } from 'components';
import {
  ArticleWrapper,
  HeaderWrapper,
  Wrapper,
  Header,
  HeaderImage,
  HeaderImageDarker,
  ScrollIndicator,
  ButtonWrapper,
  Image,
  Slogan,
  CooperationLogosWrapper,
} from './Homepage.css';

import { ReactComponent as Mouse } from 'assets/images/mouse.svg';
import header1 from 'assets/images/header/header1.jpg';
import header2 from 'assets/images/header/header2.jpg';
import header3 from 'assets/images/header/header3.jpg';
import secHeader from 'assets/images/header/second-header.jpg';
import coop1 from 'assets/logos/1.png';
import coop2 from 'assets/logos/2.png';
import coop3 from 'assets/logos/3.jpg';
import coop4 from 'assets/logos/4.png';
import coop5 from 'assets/logos/5.png';
import coop6 from 'assets/logos/6.png';
import coop7 from 'assets/logos/7.png';
import coop8 from 'assets/logos/8.png';
import coop9 from 'assets/logos/9.png';
import coop10 from 'assets/logos/10.png';
import coop11 from 'assets/logos/11.png';
import coop12 from 'assets/logos/12.png';
import coop13 from 'assets/logos/13.png';
import coop14 from 'assets/logos/14.png';
import coop15 from 'assets/logos/15.png';
import coop16 from 'assets/logos/16.png';
import coop17 from 'assets/logos/17.png';
import coop18 from 'assets/logos/18.png';
import coop19 from 'assets/logos/19.png';
import coop20 from 'assets/logos/20.png';
import coop21 from 'assets/logos/21.png';
import coop22 from 'assets/logos/22.jpg';
import coop23 from 'assets/logos/23.png';

const logos = [
  { id: 1, img: coop1 },
  { id: 2, img: coop2 },
  { id: 3, img: coop3 },
  { id: 4, img: coop4 },
  { id: 5, img: coop5 },
  { id: 6, img: coop6 },
  { id: 7, img: coop7 },
  { id: 8, img: coop8 },
  { id: 9, img: coop9 },
  { id: 10, img: coop10 },
  { id: 11, img: coop11 },
  { id: 12, img: coop12 },
  { id: 13, img: coop13 },
  { id: 14, img: coop14 },
  { id: 15, img: coop15 },
  { id: 16, img: coop16 },
  { id: 17, img: coop17 },
  { id: 18, img: coop18 },
  { id: 19, img: coop19 },
  { id: 20, img: coop20 },
  { id: 21, img: coop21 },
  { id: 22, img: coop22 },
  { id: 23, img: coop23 },
];

function Homepage() {
  const { t } = useTranslation();
  const imgs = useMemo(() => [header2, header1, header3], []);
  const [headerBg, setHeaderBg] = useState(imgs[0]);

  const scrollDown = () => window.scroll(0, 500);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    let index = 0;
    const imageChanger = setInterval(() => {
      if (index > imgs.length - 1) {
        index = 0;
      }
      setHeaderBg(imgs[index]);
      index++;
    }, 3000);

    return () => clearInterval(imageChanger);
  }, [imgs]);

  return (
    <Wrapper>
      <HeaderWrapper>
        <ScrollIndicator onClick={scrollDown}>
          <Mouse />
        </ScrollIndicator>
        <HeaderImageDarker color="rgba(0, 0, 0, 0.55)" />
        <HeaderImage src={headerBg} alt="" />
      </HeaderWrapper>
      <Header
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {t('about')}
      </Header>
      <ArticleWrapper>
        {t('homepage_about')}
        <ButtonWrapper>
          <Button to="/about" content={`${t('read_more')}`} />
        </ButtonWrapper>
      </ArticleWrapper>
      <HeaderWrapper style={{ marginTop: '5rem' }}>
        <HeaderImageDarker color="rgba(6, 160, 204, 0.45)" />
        <Image image={secHeader} />
        <Slogan>{t('homepage_slogan')}</Slogan>
      </HeaderWrapper>
      <Header
        as="h2"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {t('cooperation')}
      </Header>
      <CooperationLogosWrapper>
        {logos.map((logo) => (
          <img
            key={logo.id}
            style={{ placeSelf: 'center' }}
            width={150}
            src={logo.img}
            alt={`Logo ${logo.id}`}
          />
        ))}
      </CooperationLogosWrapper>
    </Wrapper>
  );
}

export default Homepage;
