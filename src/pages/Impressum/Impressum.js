import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MainHeader,
  ContentWrapper,
  Paragraph,
  Wrapper,
} from './Impressum.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Impressum() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Wrapper>
      <MainHeader
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {t('impressum')}
      </MainHeader>
      <ContentWrapper
        data-aos="fade-up"
        data-aos-delay="1300"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Paragraph>Natalia Stachnik</Paragraph>
        <Paragraph>Oberurseler Str. 3, 61440 Oberursel</Paragraph>
        <Paragraph>Tel: +49 176 242 648 54</Paragraph>
        <Paragraph>Email: nataliastachnik.ns@gmail.com</Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Impressum;
