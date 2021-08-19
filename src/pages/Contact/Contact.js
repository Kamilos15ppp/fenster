import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import AOS from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import {
    ContactWrapper,
    ContactHeader,
    ContactLink,
    ContactAddress,
    ContactMap,
    Icon,
    Map
} from './Contact.css';

function Contact() {
    const { t } = useTranslation();
    const telNumber = '123456789';
    const email = 'example@xyz.com'

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ContactWrapper>
            <ContactHeader
                data-aos='fade-down'
                data-aos-delay="300"
                data-aos-duration="1000"
            >
                {t('contact')}
            </ContactHeader>
            <ContactLink
                href={`tel: ${telNumber}`}
                data-aos='fade-left'
                data-aos-delay="600"
                data-aos-duration="1000"
            >
                <Icon>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                </Icon>
                {telNumber}
            </ContactLink>
            <ContactLink
                href={`mailto: ${email}`}
                data-aos='fade-left'
                data-aos-delay="650"
                data-aos-duration="1000"
            >
                <Icon>
                    <FontAwesomeIcon icon={faEnvelope} />
                </Icon>
                {email}
            </ContactLink>
            <ContactAddress
                data-aos='fade-left'
                data-aos-delay="700"
                data-aos-duration="1000"
            >
                <Icon>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </Icon>
                ul. Nowaka 15a
            </ContactAddress>
            <ContactMap
                data-aos='zoom-in'
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <Map
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.775831091222!2d13.409334092157154!3d52.519395812527776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e21c9e04553%3A0xdc8ba3db16be397d!2sBerliner%20Innenstadt%2C%20Berlin%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1629387475555!5m2!1spl!2spl"
                    loading='lazy'
                />
            </ContactMap>
        </ContactWrapper>
    );
}

export default Contact;
