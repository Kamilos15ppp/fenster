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
    LinksWrapper,
    Map
} from './Contact.css';

function Contact() {
    const { t } = useTranslation();
    const telNumber = '+49 176 242 648 54';
    const email = 'nataliastachnik.ns@gmail.com';
    const address = 'Oberurseler Str. 3, 61440 Oberursel';

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ContactWrapper>
            <ContactHeader
                data-aos='fade-down'
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                {t('contact')}
            </ContactHeader>
            <LinksWrapper>
                <ContactLink
                    href={`tel: ${telNumber}`}
                    data-aos='fade-left'
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-once="true"
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
                    data-aos-once="true"
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
                    data-aos-once="true"
                >
                    <Icon>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </Icon>
                    {address}
                </ContactAddress>
            </LinksWrapper>
            <ContactMap
                data-aos='zoom-in'
                data-aos-delay="800"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <Map
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638.7068215167187!2d8.595144982547483!3d50.18306550841588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd081af2e20931%3A0xeaf8dbe9612a81a8!2sOberurseler%20Str.%203%2C%2061440%20Oberursel%20(Taunus)%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1630072317764!5m2!1spl!2spl"
                    loading='lazy'
                />
            </ContactMap>
        </ContactWrapper>
    );
}

export default Contact;
