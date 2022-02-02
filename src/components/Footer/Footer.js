import React from 'react';

import {
  FooterWrapper,
  FooterLink,
  FooterAddress,
  FooterCopy,
  FooterPrivacy,
} from './Footer.css';

function Footer({ address, telNumber, email, privacyLabel }) {
  return (
    <FooterWrapper>
      <FooterLink href={`tel:${telNumber}`}>tel: {telNumber}</FooterLink>
      <FooterLink href={`mailto:${email}`}>email: {email}</FooterLink>
      <FooterAddress>{address}</FooterAddress>
      <FooterPrivacy to="/privacy">{privacyLabel}</FooterPrivacy>
      <FooterCopy>
        Copyright S K Fenster&Bauertechnik - Natalia Stachnik
      </FooterCopy>
    </FooterWrapper>
  );
}

export default Footer;
