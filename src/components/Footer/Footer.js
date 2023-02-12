import React from 'react';

import {
  FooterWrapper,
  FooterLink,
  FooterAddress,
  FooterCopy,
  FooterHref,
} from './Footer.css';

function Footer({ address, telNumber, email, labels: { privacy, impressum } }) {
  return (
    <FooterWrapper>
      <FooterLink href={`tel:${telNumber}`}>tel: {telNumber}</FooterLink>
      <FooterLink href={`mailto:${email}`}>email: {email}</FooterLink>
      <FooterAddress>{address}</FooterAddress>
      <FooterHref to="/privacy">{privacy}</FooterHref>
      <FooterHref to="/impressum">{impressum}</FooterHref>
      <FooterCopy>
        Copyright S K Fenster&Bauertechnik - Natalia Stachnik
      </FooterCopy>
    </FooterWrapper>
  );
}

export default Footer;
